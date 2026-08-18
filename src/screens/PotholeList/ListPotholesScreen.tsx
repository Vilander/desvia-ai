import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';

import { AppHeader } from '../../components/AppHeader';
import { PotholeCard, PotholeItem } from '../../components/PotholeCard';
import { styles } from './styles';

const MOCK_POTHOLES: PotholeItem[] = [
  {
    id: '1',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
  {
    id: '2',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
  {
    id: '3',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
  {
    id: '4',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
  {
    id: '5',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
  {
    id: '6',
    image: { uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400' },
    rua: 'Rua 30 de março',
    numero: '452',
    bairro: 'Centro',
    cidade: 'Americana',
    uf: 'SP',
    data: '16/04/2026',
    autor: 'Fulano de tal',
  },
];

type Props = NativeStackScreenProps<any, 'ListPotholes'>;

export default function ListPotholesScreen({ route, navigation }: Props) {
  const userName = route.params?.userName || 'Fulano';

  const handleOpenDetails = (item: PotholeItem) => {
    // Próximo passo: tela de detalhes (iPhone 17 - 7)
    // navigation.navigate('ReportDetail', { item, userName });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Topo Global */}
      <AppHeader userName={userName} />

      {/* Faixa Título com Botão Voltar */}
      <View style={styles.bannerGray}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="#0F172A">
            <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </Svg>
        </TouchableOpacity>

        <Text style={styles.bannerTitle}>Buracos registrados</Text>
      </View>

      {/* Grid com duas colunas */}
      <FlatList
        data={MOCK_POTHOLES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <PotholeCard item={item} onPressDetails={handleOpenDetails} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}