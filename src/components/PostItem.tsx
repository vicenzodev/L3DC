import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Post } from '../types/post';
import { styles } from '../styles/PostItemStyles';

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
        router.push(`/form?id=${post.id}`);
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

    const handleOpenLink = async () => {
        if (!post.model3dUrl) return;

        let url = post.model3dUrl.trim();
        
        // Garante que a URL tenha o protocolo para o celular entender que é um site
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = `https://${url}`;
        }

        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert("Erro", "O celular não encontrou um navegador para abrir este link.");
            }
        } catch (error) {
            Alert.alert("Erro", "Falha ao tentar abrir o link.");
        }
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
                        <TouchableOpacity 
                            style={styles.tagLink} 
                            onPress={handleOpenLink}
                            activeOpacity={0.6}
                        >
                            <Feather name="link" size={12} color="#57534e" />
                            <Text style={styles.tagLinkText} numberOfLines={1}>
                                Abrir Modelo 3D
                            </Text>
                        </TouchableOpacity>
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