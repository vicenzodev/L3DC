//Interface que representa um post no banco
export interface Post {
    id: number;
    title: string;
    content: string;
    material: string;
    model3dUrl: string;
    createdAt: Date;
}

export interface CreatePostDTO {
    title: string;
    content: string;
    model3dUrl: string;
    material: string;
}

export interface UpdatePostDTO {
    title?: string;
    content?: string;
    model3dUrl?: string;
    material?: string;
}