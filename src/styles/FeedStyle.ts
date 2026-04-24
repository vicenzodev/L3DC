import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6', // Fundo off-white elegante
  },
  header: {
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1C1917',
    letterSpacing: -1,
  },
  logoDot: {
    color: '#EA580C', // Laranja tech
  },
  subtitleText: {
    color: '#A8A29E',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 2,
  },
  profileButton: {
    backgroundColor: '#F5F5F4',
    padding: 12,
    borderRadius: 50,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAF9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F5F5F4',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: '#292524',
    fontWeight: '500',
    fontSize: 15,
  },
  filtersContainer: {
    paddingVertical: 16,
  },
  filtersScroll: {
    paddingHorizontal: 24,
  },
  categoryPill: {
    marginRight: 12,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
  },
  categoryPillActive: {
    backgroundColor: '#1C1917',
    borderColor: '#1C1917',
  },
  categoryPillInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E5E4',
  },
  categoryText: {
    fontWeight: '700',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  categoryTextInactive: {
    color: '#78716C',
  },
  postWrapper: {
    paddingHorizontal: 20,
  },
  feedContent: {
    paddingBottom: 100,
  },
  feedTitle: {
    paddingHorizontal: 24,
    marginTop:16,
    marginBottom: 16,
    color: '#A8A29E',
    fontWeight: '700',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 32,
    backgroundColor: '#EA580C',
    width: 64,
    height: 64,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EA580C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF9F6',
  },
  loadingText: {
    marginTop: 12,
    color: '#78716C',
    fontSize: 14,
    fontWeight: '500',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  backButton: {
    padding: 8,
    backgroundColor: '#F5F5F4',
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1917',
  },
  formContainer: {
    padding: 24,
  },
  label: {
    color: '#A8A29E',
    fontWeight: '700',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7E5E4',
    padding: 16,
    borderRadius: 16,
    color: '#292524',
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 24,
  },
  textArea: {
    minHeight: 120,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7E5E4',
    borderRadius: 16,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  inputFlex: {
    flex: 1,
    paddingVertical: 16,
    color: '#292524',
    fontWeight: '500',
    fontSize: 15,
  },
  materialsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8, // Espaçamento entre os botões
    marginBottom: 32,
  },
  materialPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
  },
  materialPillActive: {
    backgroundColor: '#EA580C',
    borderColor: '#EA580C',
  },
  materialPillInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E5E4',
  },
  materialText: {
    fontWeight: '700',
    fontSize: 14,
  },
  materialTextActive: {
    color: '#FFFFFF',
  },
  materialTextInactive: {
    color: '#78716C',
  },
  saveButton: {
    backgroundColor: '#1C1917', // Preto sólido
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  saveButtonDisabled: {
    backgroundColor: '#A8A29E', // Cinza quando estiver salvando
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 12,
  },
});