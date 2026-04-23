import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Post } from '../types/post';

interface PostItemProps {
    post: Post;
    onDelete: (id: number) => void;
}

function formatDate(dateString: Date | string): string {
    return new Date(dateString).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',}
    );
}

export function PostItem({ post, onDelete }: PostItemProps) {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/edit/${post.id}`);
    }

    const handleDelete = () => {
        Alert.alert(
        'Excluir post',
        `Tem certeza que deseja excluir "${post.title}"?\n\nEsta ação não pode ser desfeita.`,
        [
            {
            text: 'Cancelar',
            style: 'cancel', // Não faz nada — apenas fecha o Alert
            },
            {
            text: 'Excluir',
            style: 'destructive', // Vermelho no iOS, padrão no Android
            onPress: () => onDelete(post.id),
            },
        ],
        );
    };

    return(
       <View style={styles.card}>
            {/* Cabeçalho: Título, Data e Botões de Ação */}
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {post.title || "Projeto sem título"}
                    </Text>
                    {post.createdAt && (
                        <Text style={styles.date}>
                            {formatDate(post.createdAt)}
                        </Text>
                    )}
                </View>

                {/* Botões de Ação (Ícones em vez de texto poluem menos) */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={handleEdit} style={styles.iconButtonEdit} activeOpacity={0.7}>
                        <Feather name="edit-2" size={16} color="#c2410c" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleDelete} style={styles.iconButtonDelete} activeOpacity={0.7}>
                        <Feather name="trash-2" size={16} color="#e11d48" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Corpo: Descrição do Projeto */}
            {post.content && (
                <Text style={styles.description} numberOfLines={3}>
                    {post.content}
                </Text>
            )}

            {/* Rodapé: Tags Técnicas (Filamento, Modelo, etc) */}
            {(post.material || post.model3dUrl) && (
                <View style={styles.tagsFooter}>
                    
                    {post.model3dUrl && (
                        <View style={styles.tagLink}>
                            <Feather name="link" size={12} color="#57534e" />
                            <Text style={styles.tagLinkText} numberOfLines={1}>
                                Modelo 3D
                            </Text>
                        </View>
                    )}
                    
                    {post.material && (
                        <View style={styles.tagMaterial}>
                            <Feather name="layers" size={12} color="#047857" />
                            <Text style={styles.tagMaterialText}>
                                {post.material}
                            </Text>
                        </View>
                    )}

                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
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