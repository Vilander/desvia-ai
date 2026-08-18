import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './styles';

export interface PotholeItem {
  id: string;
  image: ImageSourcePropType | { uri: string };
  rua: string;
  cidade: string;
  uf: string;
  numero?: string;
  bairro?: string;
  data?: string;
  autor?: string;
}

interface PotholeCardProps {
  item: PotholeItem;
  onPressDetails: (item: PotholeItem) => void;
}

export const PotholeCard: React.FC<PotholeCardProps> = ({ item, onPressDetails }) => {
  return (
    <View style={styles.card}>
      {/* Imagem do Buraco */}
      <Image source={item.image} style={styles.image} resizeMode="cover" />

      {/* Localização com Pin Vermelho */}
      <View style={styles.infoContainer}>
        <Svg width={18} height={22} viewBox="0 0 24 24" fill="#880000">
          <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </Svg>
        <View style={styles.textContainer}>
          <Text style={styles.streetText} numberOfLines={1}>
            {item.rua}
          </Text>
          <Text style={styles.cityText} numberOfLines={1}>
            {item.cidade}/{item.uf}
          </Text>
        </View>
      </View>

      {/* Botão Ver Mais */}
      <TouchableOpacity
        style={styles.detailsBtn}
        onPress={() => onPressDetails(item)}
        activeOpacity={0.7}
      >
        <Text style={styles.detailsBtnText}>ver mais</Text>
      </TouchableOpacity>
    </View>
  );
};