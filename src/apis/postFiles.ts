import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import { postFileProps, postFilesRes } from "@/@types/apis/post/index";

export const postFiles = async ({
  files = [],
}: postFileProps): Promise<AxiosResponse<postFilesRes>> => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  return await clientAuth({
    url: `/files`,
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data", // ✅ 중요! 생략하면 multer가 인식 못 함
    },
  });
};
