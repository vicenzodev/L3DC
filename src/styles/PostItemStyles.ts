import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FCFBF8', // Um tom levemente off-white/terroso para dar um ar mais orgânico
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E7E5E4',
        // Sombra suave para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        // Sombra suave para Android
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    headerTextContainer: {
        flex: 1,
        paddingRight: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#292524',
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        fontWeight: '500',
        color: '#78716C',
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    iconButtonEdit: {
        backgroundColor: '#FFEDD5',
        padding: 8,
        borderRadius: 20,
    },
    iconButtonDelete: {
        backgroundColor: '#FFE4E6',
        padding: 8,
        borderRadius: 20,
    },
    description: {
        fontSize: 14,
        color: '#57534E',
        lineHeight: 22,
        marginBottom: 16,
    },
    tagsFooter: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F4',
    },
    tagLink: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    tagLinkText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#44403C',
        marginLeft: 6,
    },
    tagMaterial: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECFDF5',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    tagMaterialText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#047857',
        marginLeft: 6,
    },
});