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
  logIn: async (userData) => {
    try {
      const response = await api.post("/user/login", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  isInCommunity: async (userData) => {
    try {
      const response = await api.get(
        `/user/isInCommunity?userId=${userData.userId}&communityId=${userData.communityId}`,
        userData,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
