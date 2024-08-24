import api from "./config";

export const communityService = {
  checkIfCommunityExists: async (communityData) => {
    try {
      const response = await api.post(
        "/communities/checkIfCommunityExists",
        communityData,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCommunity: async (communityData) => {
    try {
      const response = await api.post("/communities/create", communityData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
