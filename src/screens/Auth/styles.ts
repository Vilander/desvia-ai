import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 230,
    height: 230,
  },
  formContainer: {
    width: '100%',
    maxWidth: 340,
  },
  loginBtnSpacing: {
    marginTop: 4,
    marginBottom: 16,
  },
  registerBtnSpacing: {
    marginTop: 12,
    marginBottom: 16,
  },
  socialContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 24,
  },
  registerLink: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  registerText: {
    fontSize: 12,
    color: '#E53E3E',
    textAlign: 'center',
  },
  registerTextBold: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});