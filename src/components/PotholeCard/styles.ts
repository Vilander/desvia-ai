import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    gap: 6,
  },
  textContainer: {
    flex: 1,
  },
  streetText: {
    fontSize: 11,
    color: '#475569',
  },
  cityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
  },
  detailsBtn: {
    backgroundColor: '#CBD5E1',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'center',
  },
  detailsBtnText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1E293B',
  },
});