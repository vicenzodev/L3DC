import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import * as postRepository from '../database/postRepository';
import { Post } from '../types/post';

export function usePosts() {
    const [posts,setPosts] = useState<Post[]>([]);
    const [loading,setLoading] = useState(false);

    const loadPosts = useCallback(async () => {
        try {
            setLoading(true);
            const data = await postRepository.getPosts();
            setPosts(data);
        } catch (error) {
            console.error('Erro ao carregar os posts:', error);
        } finally {
              setLoading(false);
        }
    },[]);

    useFocusEffect(
        useCallback(() => {
            loadPosts();
        },[loadPosts]),
    );

    const removePost = useCallback(
        async (id:number) => {
            await postRepository.deletePost(id);
            await loadPosts();
        },
        [loadPosts]
    );

    return {
        loading,
        posts,
        removePost
    }
}