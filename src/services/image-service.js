import { IMAGE_UPLOAD_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helpers";

export const uploadImages = async (movieId, files) => {
  const formData = new FormData();

  // Add all files to FormData with "images" key (backend expects List<MultipartFile> images)
  files.forEach((file) => {
    formData.append("images", file);
  });

  const headers = await getAuthHeader();
  delete headers["Content-Type"];

  return fetch(`${IMAGE_UPLOAD_API}/${movieId}`, {
    method: "POST",
    headers: headers,
    body: formData,
  });
};
