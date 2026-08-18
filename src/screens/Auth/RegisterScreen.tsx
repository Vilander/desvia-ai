import React, { useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { styles } from './styles';

type Props = NativeStackScreenProps<any, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (!nome.trim() || !email.trim() || !senha || !repetirSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== repetirSenha) {
      Alert.alert('Erro', 'As senhas não conferem.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, 1200);
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
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/desviaAI_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <InputField
              label="Nome"
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome completo"
              autoCapitalize="words"
            />

            <InputField
              label="email"
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputField
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              secureTextEntry
            />

            <InputField
              label="Repetir Senha"
              value={repetirSenha}
              onChangeText={setRepetirSenha}
              placeholder="Confirme sua senha"
              secureTextEntry
            />

            <Button
              title="Cadastrar"
              variant="primary"
              onPress={handleRegister}
              loading={loading}
              style={styles.registerBtnSpacing}
            />

            <TouchableOpacity
              style={styles.registerLink}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text style={styles.registerText}>
                Já possui conta? <Text style={styles.registerTextBold}>fazer login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}