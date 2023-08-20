import { CONFIG } from "../config";

export const getImage = (img) => {
  const fetchedImage = `${CONFIG.API_URL}lists/getImage/${img}`;
  return fetchedImage;
};
