import api from "./config";

export const postService = {
  createPost: async (postData) => {
    try {
      const response = await api.post("/posts/create", postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPosts: async (postData) => {
    try {
      const response = await api.get(
        "/posts/getAllPosts?page=1&limit=10?community=66bfd4e3fae5eb91e7833c62",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      throw error;
    }
  },

  // Adicione outros métodos relacionados a posts
};
