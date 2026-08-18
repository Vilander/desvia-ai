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
    paddingBottom: 40,
  },
  blackBar: {
    backgroundColor: '#000000',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  blackBarTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  photoWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 6,
  },
  cameraBox: {
    width: 150,
    height: 95,
    backgroundColor: '#4B4963',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  locationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  locBtn: {
    flex: 1,
    height: 48,
    backgroundColor: '#1E293B',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  locBtnActive: {
    backgroundColor: '#334155',
    borderWidth: 1.5,
    borderColor: '#64748B',
  },
  locBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 320,
    marginTop: 20,
  },
  actionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  cancelBtn: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E53E3E',
  },
  cancelBtnText: {
    color: '#E53E3E',
    fontSize: 13,
    fontWeight: '700',
  },
  saveBtnActive: {
    backgroundColor: '#7D8CA3',
    borderColor: '#4A5568',
  },
  saveBtnDisabled: {
    backgroundColor: '#D1D5DB',
    borderColor: '#CBD5E1',
  },
  saveBtnTextActive: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '700',
  },
  saveBtnTextDisabled: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '700',
  },
});