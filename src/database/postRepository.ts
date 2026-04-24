import {getDatabase} from './database';
import {Post, CreatePostDTO, UpdatePostDTO} from '../types/post';

export async function getPosts(): Promise<Post[]> {
    const db = await getDatabase();
    return db.getAllAsync<Post>('SELECT * FROM posts ORDER BY createdAt DESC');
}

export async function getPostById(id: number): Promise<Post | null> {
    const db = await getDatabase();
    return db.getFirstAsync<Post | null>('SELECT * FROM posts WHERE id = ?', [id]);
}

export async function createPost(data: CreatePostDTO): Promise<Post> {
    const db = await getDatabase();
    const { title, content, material, model3dUrl } = data;
    const result = await db.runAsync('INSERT INTO posts (title, content, material, model3dUrl, createdAt) VALUES (?, ?, ?, ?, datetime())',
        [title,
        content,
        material,
        model3dUrl]);
    return (await getPostById(result.lastInsertRowId))!;
}

export async function updatePost(id: number, data: UpdatePostDTO): Promise<Post | null> {
    const db = await getDatabase();
    await db.runAsync(
        `UPDATE posts SET title = ?, content = ?, material = ?, model3dUrl = ? WHERE id = ?`,
        data.title ?? null,
        data.content ?? null,
        data.material ?? null,
        data.model3dUrl ?? null,
        id
    );
    return getPostById(id);
}

export async function deletePost(id: number): Promise<void> {
    const db = await getDatabase();
    await db.runAsync('DELETE FROM posts WHERE id = ?', [id]);
}