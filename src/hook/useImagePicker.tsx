import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export function useImagePicker() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Função para abrir a câmera do dispositivo
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão da câmera para continuar.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Função para buscar uma imagem da galeria
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão da galeria para continuar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Função para salvar a foto na galeria (opcional, caso queira guardar a foto tirada)
  const saveImage = async () => {
    if (!imageUri) {
      Alert.alert('Erro', 'Selecione ou tire uma foto primeiro!');
      return;
    }

    const { status } = await MediaLibrary.requestPermissionsAsync(true);

    if (status === 'granted') {
      try {
        await MediaLibrary.createAssetAsync(imageUri);
        Alert.alert('Sucesso!', 'Imagem salva na galeria do seu celular com sucesso.');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar a imagem.');
      }
    } else {
      Alert.alert('Permissão negada', 'Precisamos da permissão para salvar fotos.');
    }
  };

  const clearImage = () => {
    setImageUri(null);
  };

  return {
    imageUri,
    takePhoto,
    pickImage,
    saveImage,
    clearImage,
  };
}

export default useImagePicker;