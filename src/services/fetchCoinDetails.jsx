import axiosInstance from "../helper/axiosinstance";

export async function fetchCoinData(id) {
  const perPage = 10;
  try {
    const response = await axiosInstance.get(`/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
