import axios from "axios";

export const makeRequest = async (method, url, body = null) => {
  const config = {
    method,
    url,
    data: body ? JSON.parse(body) : undefined,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
