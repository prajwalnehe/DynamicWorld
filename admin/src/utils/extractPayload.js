export const extractPayload = (response) => {
  if (!response) return [];

  if (response.data !== undefined) {
    const payload = response.data;
    if (payload?.data !== undefined) {
      return payload.data;
    }
    return payload;
  }

  if (response?.data !== undefined) {
    return response.data;
  }

  return response;
};

