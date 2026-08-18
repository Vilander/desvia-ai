import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { styles } from './styles';

interface UserHeaderProps {
  userName?: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ userName = 'Fulano' }) => {
  const firstName = userName.trim().split(' ')[0] || 'Fulano';

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Olá, {firstName}</Text>
      <View style={styles.avatarContainer}>
        {/* Ícone de Usuário */}
        <Svg width={30} height={30} viewBox="0 0 24 24" fill="#1A202C">
          <Circle cx="12" cy="7" r="4" />
          <Path d="M12 14c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
        </Svg>
      </View>
    </View>
  );
};