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

  fetchCommunities: async (fetchParams) => {
    try {
      const response = await api.get(
        `/communities/fetchCommunities?page=${fetchParams.page || 1}&limit=${fetchParams.limit || 9}&slug=${fetchParams.slug || ""}&id=${fetchParams.id || ""}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
