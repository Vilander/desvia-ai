import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  logo: {
    width: 280,
    height: 280,
  },
  bannerGray: {
    backgroundColor: '#D1D5DB',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bannerGrayText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    textAlign: 'center',
  },
  bannerBlack: {
    backgroundColor: '#000000',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bannerBlackText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 320,
    alignSelf: 'center',
    gap: 16,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  addBtn: {
    backgroundColor: '#7D8CA3',
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4A5568',
  },
  addBtnText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },
  listBtn: {
    backgroundColor: '#1E293B',
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0F172A',
  },
  listBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});