import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { GoogleIcon, FacebookIcon } from '../../components/Icons/SocialIcons';
import { styles } from './styles';

type Props = NativeStackScreenProps<any, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!login.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Informe seu login e senha.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Redireciona para a Home resetando a pilha de navegação
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home', params: { userName: login.trim() } }],
      });
    }, 1000);
  };

  const handleGoogleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home', params: { userName: 'Google User' } }],
    });
  };

  const handleFacebookLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home', params: { userName: 'Facebook User' } }],
    });
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
              label="LOGIN"
              value={login}
              onChangeText={setLogin}
              placeholder="Digite seu usuário ou e-mail"
              keyboardType="email-address"
            />

            <InputField
              label="SENHA"
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              secureTextEntry
            />

            <Button
              title="ENTRAR"
              variant="primary"
              onPress={handleLogin}
              loading={loading}
              style={styles.loginBtnSpacing}
            />

            <View style={styles.socialContainer}>
              <Button
                title="LOGIN COM GOOGLE"
                variant="google"
                icon={<GoogleIcon />}
                onPress={handleGoogleLogin}
              />
              <Button
                title="LOGIN COM FACEBOOK"
                variant="facebook"
                icon={<FacebookIcon />}
                onPress={handleFacebookLogin}
              />
            </View>

            <TouchableOpacity
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}
              activeOpacity={0.7}
            >
              <Text style={styles.registerText}>
                Não possui conta?{' '}
                <Text style={styles.registerTextBold}>
                  clique aqui para cadastrar
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}