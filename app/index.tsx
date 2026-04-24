import React, { useState } from 'react';
import { 
  View,
  Text,
  FlatList, 
  TouchableOpacity,
  TextInput, 
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PostItem } from '../src/components/PostItem'; // Ajuste o caminho se necessário
import { useRouter } from 'expo-router';
import { styles } from '../src/styles/FeedStyle';
import { usePosts } from '../src/hooks/usePosts';


export default function L3DCFeed() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  // Dados mockados
  const {
    posts,
    loading,
    removePost
  } = usePosts();

  const filteredPosts = posts.filter(post => {
    // Verifica a Busca (ignora maiúsculas e minúsculas)
    const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (post.content && post.content.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
    });

  if(loading){
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#4f46e5" />
        <Text className="mt-3 text-gray-500 text-sm">
          Carregando posts...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header com Identidade Visual */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.logoText}>
              L3DC<Text style={styles.logoDot}>.</Text>
            </Text>
            <Text style={styles.subtitleText}>
              Comunidade V3Dev
            </Text>
          </View>
        </View>

        {/* Barra de Busca Profissional */}
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#A8A29E" />
          <TextInput 
            placeholder="Buscar projetos ou filamentos..."
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#A8A29E"
          />
        </View>
      </View>

      {/* Feed de Projetos */}
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postWrapper}>
             <PostItem post={item} onDelete={(id) => removePost(id)} />
          </View>
        )}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.feedTitle}>
            Posts
          </Text>
        )}
      />

      {/* Botão Flutuante (FAB) Estilizado */}
      <TouchableOpacity
        onPress={() => router.push('/form')}
        activeOpacity={0.9}
        style={styles.fab}
      >
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}