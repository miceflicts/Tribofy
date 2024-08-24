import api from "./config";

export const userService = {
  createUser: async (userData) => {
    try {
      const response = await api.post("/user/create", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
