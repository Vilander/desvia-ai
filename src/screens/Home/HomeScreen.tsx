import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserHeader } from '../../components/UserHeader';
import { Button } from '../../components/Button';
import { styles } from './styles';

type Props = NativeStackScreenProps<any, 'Home'>;

export default function HomeScreen({ route, navigation }: Props) {
  // Pega o nome vindo dos parâmetros de navegação do cadastro/login
  const userName = route.params?.userName || 'Fulano';

const handleAddBuraco = () => {
    navigation.navigate('RegisterPothole', { userName });
  };

const handleVerBuracos = () => {
    navigation.navigate('ListPotholes', { userName });
  };



  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* Cabeçalho Olá, PrimeiroNome */}
          <UserHeader userName={userName} />

          {/* Logo Central */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/desviaAI_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Banner Cinza */}
          <View style={styles.bannerGray}>
            <Text style={styles.bannerGrayText}>
              Vamos juntos deixar nossa{'\n'}cidade melhor?
            </Text>
          </View>

          {/* Banner Preto */}
          <View style={styles.bannerBlack}>
            <Text style={styles.bannerBlackText}>
              Fotografe, sinalize, denuncie
            </Text>
          </View>
        </View>

        {/* Botões de Ação */}
        <View style={styles.buttonsContainer}>
          <Button
            title="+ Add Novo Buraco"
            onPress={handleAddBuraco}
            style={styles.addBtn}
            textStyle={styles.addBtnText}
          />
          <Button
            title="Ver Buracos cadastrados"
            onPress={handleVerBuracos}
            style={styles.listBtn}
            textStyle={styles.listBtnText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}