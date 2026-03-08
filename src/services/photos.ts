import axios from "axios";
import type { Photo } from "../types/photo";

axios.defaults.baseURL = import.meta.env.VITE_PEXELS_URL;
axios.defaults.headers.common["Authorization"] = import.meta.env.VITE_PEXELS_API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface ApiResponse {
  photos: Photo[],
}


export const getPhotos = async(query: string):Promise<Photo[]> => {
  const response = await axios.get<ApiResponse>(`search?query=${query}`);
  return response.data.photos;
};
