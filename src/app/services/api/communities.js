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

  discoverCommunities: async (fetchParams) => {
    try {
      const response = await api.get(
        `/communities/discoverCommunities?page=${fetchParams.page || 1}&limit=${fetchParams.limit || 9}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
