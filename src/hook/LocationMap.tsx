import { useState } from 'react';
import { Alert } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  hasServicesEnabledAsync, // <-- CORRIGIDO AQUI
  LocationObject,
  LocationGeocodedAddress,
  Accuracy,
} from 'expo-location';

export interface FormattedAddress {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const STATE_TO_UF: Record<string, string> = {
  acre: 'AC', alagoas: 'AL', amapá: 'AP', amapa: 'AP', amazonas: 'AM',
  bahia: 'BA', ceará: 'CE', ceara: 'CE', 'distrito federal': 'DF',
  'espírito santo': 'ES', 'espirito santo': 'ES', goiás: 'GO', goias: 'GO',
  maranhão: 'MA', maranhao: 'MA', 'mato grosso': 'MT', 'mato grosso do sul': 'MS',
  'minas gerais': 'MG', pará: 'PA', para: 'PA', paraíba: 'PB', paraiba: 'PB',
  paraná: 'PR', parana: 'PR', pernambuco: 'PE', piauí: 'PI', piaui: 'PI',
  'rio de janeiro': 'RJ', 'rio grande do norte': 'RN', 'rio grande do sul': 'RS',
  rondônia: 'RO', rondonia: 'RO', roraima: 'RR', 'santa catarina': 'SC',
  'são paulo': 'SP', 'sao paulo': 'SP', sergipe: 'SE', tocantins: 'TO',
};

function formatUF(region?: string | null): string {
  if (!region) return '';
  const clean = region.trim();
  if (clean.length === 2) return clean.toUpperCase();
  return STATE_TO_UF[clean.toLowerCase()] || clean.substring(0, 2).toUpperCase();
}

export function useLocation() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [address, setAddress] = useState<LocationGeocodedAddress | null>(null);
  const [formattedAddress, setFormattedAddress] = useState<FormattedAddress | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  async function getLocation() {
    setLoadingLocation(true);
    try {
      // Usando o método correto da API do Expo Location
      const isLocationEnabled = await hasServicesEnabledAsync();
      if (!isLocationEnabled) {
        Alert.alert('Atenção', 'Ative o GPS do seu aparelho.');
        return null;
      }

      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        Alert.alert(
          'Permissão Negada',
          'É necessário permitir o acesso à localização para preencher automaticamente.'
        );
        return null;
      }

      const currentPosition = await getCurrentPositionAsync({
        accuracy: Accuracy.High,
      });
      setLocation(currentPosition);

      const enderecoResponse = await reverseGeocodeAsync({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });

      if (enderecoResponse && enderecoResponse.length > 0) {
        const firstAddress = enderecoResponse[0];
        setAddress(firstAddress);

        const formatted: FormattedAddress = {
          rua: firstAddress.street || firstAddress.name || '',
          numero: firstAddress.streetNumber || '',
          bairro: firstAddress.district || firstAddress.subregion || '',
          cidade: firstAddress.city || firstAddress.subregion || '',
          uf: formatUF(firstAddress.region),
        };

        setFormattedAddress(formatted);
        return formatted;
      }

      return null;
    } catch (error) {
      console.error('Erro ao obter localização:', error);
      Alert.alert('Erro', 'Não foi possível obter a sua localização atual.');
      return null;
    } finally {
      setLoadingLocation(false);
    }
  }

  return {
    location,
    address,
    formattedAddress,
    loadingLocation,
    getLocation,
  };
}

export default useLocation;