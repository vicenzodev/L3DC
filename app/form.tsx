import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams, useNavigation } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import * as PostRepository from '../src/database/postRepository';
import { styles } from '../src/styles/FeedStyle';

export default function PostForm() {
  const router = useRouter();
  const nav = useNavigation();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isEditing = !!id;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [material, setMaterial] = useState('');
  const [model3dUrl, setModel3dUrl] = useState('');

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    nav.setOptions({
      title: isEditing ? 'Editar Post' : 'Novo Post',
      headerShown: false
    });
  }, []);

  useEffect(() => {
    if (!isEditing) return;

    async function loadPost() {
      try {
        const post = await PostRepository.getPostById(Number(id));
        if (!post) {
          Alert.alert('Erro', 'Post não encontrado');
          router.back();
          return;
        }
        setTitle(post.title);
        setContent(post.content);
        setMaterial(post.material);
        setModel3dUrl(post.model3dUrl);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o post.');
        router.back();
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [id, isEditing, router]);

  const handleSave = async () => {
    const titleTrim = title.trim();

    if (!titleTrim) {
      Alert.alert('Campo Obrigatório', 'O título do post é obrigatório.');
      return;
    }

    setSaving(true);
    try {
      if (isEditing) {
        await PostRepository.updatePost(Number(id), {
          title: titleTrim,
          content: content,
          material: material,
          model3dUrl: model3dUrl
        });
      } else {
        await PostRepository.createPost({
          title: titleTrim,
          content: content,
          material: material,
          model3dUrl: model3dUrl
        });
      }
      router.push('/');
    } catch (error) {
      Alert.alert('Erro', error + ' Teste');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#4f46e5" />
        <Text className="mt-3 text-gray-500 text-sm">Carregando tarefa...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="#444" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{id ? 'Editar Projeto' : 'Novo Projeto'}</Text>
          <View style={{ width: 40 }}></View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Título do Projeto</Text>
          <TextInput style={styles.input} placeholder="Ex: Suporte Articulado V3" placeholderTextColor="#A8A29E" value={title} onChangeText={setTitle} />
          <Text style={styles.label}>Descrição / Notas técnicas</Text>
          <TextInput style={[styles.input, styles.textArea]} placeholder="Conte detalhes sobre a impressão, suportes, preenchimento..." placeholderTextColor="#A8A29E" value={content} onChangeText={setContent} multiline numberOfLines={4} textAlignVertical="top" />
          <Text style={styles.label}>Material</Text>
          <TextInput style={styles.input} placeholder="PLA, ABS, PETG..." placeholderTextColor="#A8A29E" value={material} onChangeText={setMaterial} />
          <Text style={styles.label}>Link do Modelo</Text>
          <View style={styles.inputWithIcon}>
            <Feather name="link" size={18} color="#A8A29E" style={styles.inputIcon} />
            <TextInput style={styles.inputFlex} placeholder="https://exemplo.com.br/modelo3d.stl" placeholderTextColor="#A8A29E" value={model3dUrl} onChangeText={setModel3dUrl} autoCapitalize="none" keyboardType="url" />
          </View>
          <TouchableOpacity onPress={handleSave} activeOpacity={0.8} disabled={saving} style={[styles.saveButton, saving && styles.saveButtonDisabled]}>
            {saving ? <ActivityIndicator color="white" size="small" /> : <Feather name="cpu" size={20} color="white" />}
            <Text style={styles.saveButtonText}>{saving ? 'Salvando...' : (id ? 'Atualizar Projeto' : 'Publicar na L3DC')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}