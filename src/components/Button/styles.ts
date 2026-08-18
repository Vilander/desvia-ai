import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  baseBtn: {
    width: '100%',
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  baseText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  primaryBtn: {
    backgroundColor: '#718096',
    borderWidth: 1,
    borderColor: '#4A5568',
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  googleBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADCE0',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  googleBtnText: {
    color: '#3C4043',
  },
  facebookBtn: {
    backgroundColor: '#1877F2',
    elevation: 1,
    shadowColor: '#1877F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  facebookBtnText: {
    color: '#FFFFFF',
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#4A5568',
  },
  outlineBtnText: {
    color: '#2D3748',
  },
});