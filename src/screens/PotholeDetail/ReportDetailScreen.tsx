import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';

import { AppHeader } from '../../components/AppHeader';
import { PotholeItem } from '../../components/PotholeCard';
import { styles } from './styles';

type Props = NativeStackScreenProps<any, 'ReportDetail'>;

export default function ReportDetailScreen({ route, navigation }: Props) {
  const userName = route.params?.userName || 'Fulano';
  const item: PotholeItem = route.params?.item;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Topo Global */}
      <AppHeader userName={userName} />

      {/* Faixa Título */}
      <View style={styles.bannerGray}>
        <Text style={styles.bannerTitle}>Buracos registrados</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Botão de Voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Svg width={32} height={32} viewBox="0 0 24 24" fill="#0F172A">
            <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </Svg>
        </TouchableOpacity>

        {/* Card Principal */}
        <View style={styles.card}>
          {/* Foto Grande */}
          <Image source={item.image} style={styles.image} resizeMode="cover" />

          {/* Dados de Endereço */}
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>{item.rua}</Text>
              <Text style={styles.label}>Nº: {item.numero || 'S/N'}</Text>
            </View>

            <Text style={styles.label}>Bairro: {item.bairro || 'Não informado'}</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Cidade: {item.cidade}</Text>
              <Text style={styles.label}>UF: {item.uf}</Text>
            </View>
          </View>
        </View>

        {/* Rodapé do Card (Criador e Data) */}
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>Cadastrado por: {item.autor || userName}</Text>
          <Text style={styles.metaText}>{item.data || '12/04/2026'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}