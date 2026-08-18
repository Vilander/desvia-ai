import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';

import { AppHeader } from '../../components/AppHeader';
import { InputField } from '../../components/InputField';
import { useLocation } from '../../hook/LocationMap';
import { useImagePicker } from '../../hook/useImagePicker'; // Importação do novo Hook
import { styles } from './styles';

type Props = NativeStackScreenProps<any, 'RegisterPothole'>;

export default function RegisterPotholeScreen({ route, navigation }: Props) {
  const userName = route.params?.userName || 'Fulano';

  const { getLocation, loadingLocation } = useLocation();
  const { imageUri, takePhoto, pickImage } = useImagePicker();

  const [formVisible, setFormVisible] = useState(false);
  const [locationMode, setLocationMode] = useState<'auto' | 'manual' | null>(null);

  // Campos do formulário
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  // Localização Automática
  const handleAutoLocation = async () => {
    setLocationMode('auto');
    const result = await getLocation();

    if (result) {
      setRua(result.rua);
      setNumero(result.numero);
      setBairro(result.bairro);
      setCidade(result.cidade);
      setUf(result.uf);
      setFormVisible(true);
    } else {
      setFormVisible(true);
    }
  };

  // Localização Manual
  const handleManualLocation = () => {
    setLocationMode('manual');
    setFormVisible(true);
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setUf('');
  };

  // Menu para escolher entre Tirar Foto ou Galeria
  const handleCapturePhoto = () => {
    Alert.alert(
      'Adicionar Foto',
      'Escolha a origem da foto do buraco:',
      [
        { text: 'Câmera', onPress: takePhoto },
        { text: 'Galeria', onPress: pickImage },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  // Validação: A imagem agora também é obrigatória
  const isFormValid =
    imageUri !== null &&
    rua.trim().length > 0 &&
    numero.trim().length > 0 &&
    bairro.trim().length > 0 &&
    cidade.trim().length > 0 &&
    uf.trim().length > 0;

  const handleSave = () => {
    if (!isFormValid) return;

    Alert.alert('Sucesso', 'Buraco registrado com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Topo com Logo e Perfil */}
          <AppHeader userName={userName} />

          {/* Faixa Título */}
          <View style={styles.blackBar}>
            <Text style={styles.blackBarTitle}>Cadastrar Novo Buraco</Text>
          </View>

          <View style={styles.content}>
            {/* Botão de Tirar Foto */}
            <View style={styles.photoWrapper}>
              <Text style={styles.photoLabel}>Tirar foto</Text>
              <TouchableOpacity
                style={[
                  styles.cameraBox,
                  imageUri && { backgroundColor: 'transparent' } // Remove o fundo se tiver imagem
                ]}
                onPress={handleCapturePhoto}
                activeOpacity={0.8}
              >
                {imageUri ? (
                  // Se existir a imagem, mostra a foto capturada
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 150, height: 95, borderRadius: 16 }}
                    resizeMode="cover"
                  />
                ) : (
                  // Caso contrário, mostra o ícone SVG
                  <Svg width={100} height={44} viewBox="0 0 100 44" fill="#FFFFFF">
                    <Path d="M18 10h6v8h8v6h-8v8h-6v-8h-8v-6h8z" />
                    <Path d="M56 12h8l3-4h14l3 4h8c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H56c-2.2 0-4-1.8-4-4V16c0-2.2 1.8-4 4-4zm18 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-3c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" />
                  </Svg>
                )}
              </TouchableOpacity>
            </View>

            {/* Botões de Seleção de Localização */}
            <View style={styles.locationButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.locBtn,
                  locationMode === 'auto' && styles.locBtnActive,
                ]}
                onPress={handleAutoLocation}
                disabled={loadingLocation}
                activeOpacity={0.8}
              >
                {loadingLocation ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.locBtnText}>Localização atual automatica</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.locBtn,
                  locationMode === 'manual' && styles.locBtnActive,
                ]}
                onPress={handleManualLocation}
                activeOpacity={0.8}
              >
                <Text style={styles.locBtnText}>Localização manual</Text>
              </TouchableOpacity>
            </View>

            {/* Formulário Condicional */}
            {formVisible && (
              <View style={styles.formContainer}>
                <InputField
                  label="Rua/Avenida"
                  value={rua}
                  onChangeText={setRua}
                  placeholder="Nome da rua ou avenida"
                />
                <InputField
                  label="Número"
                  value={numero}
                  onChangeText={setNumero}
                  placeholder="Número ou ponto de referência"
                  keyboardType="numeric"
                />
                <InputField
                  label="Bairro"
                  value={bairro}
                  onChangeText={setBairro}
                  placeholder="Nome do bairro"
                />
                <InputField
                  label="Cidade"
                  value={cidade}
                  onChangeText={setCidade}
                  placeholder="Nome da cidade"
                />
                <InputField
                  label="UF"
                  value={uf}
                  onChangeText={setUf}
                  placeholder="Estado (ex: SP)"
                  autoCapitalize="characters"
                  maxLength={2}
                />
              </View>
            )}

            {/* Grupo de Ações: Cancelar e Salvar */}
            {formVisible && (
              <View style={styles.actionButtonsContainer}>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.cancelBtn]}
                  onPress={handleCancel}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cancelBtnText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.actionBtn,
                    isFormValid ? styles.saveBtnActive : styles.saveBtnDisabled,
                  ]}
                  onPress={handleSave}
                  disabled={!isFormValid}
                  activeOpacity={0.8}
                >
                  <Text
                    style={
                      isFormValid
                        ? styles.saveBtnTextActive
                        : styles.saveBtnTextDisabled
                    }
                  >
                    Salvar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}