import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import {
  postArticlesFileProps,
  postArticlesFilesRes,
} from "@/@types/apis/post/index";

export const postArticlesFiles = async ({
  articleId,
  files = [],
}: postArticlesFileProps): Promise<postArticlesFilesRes> => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response: AxiosResponse<postArticlesFilesRes> = await clientAuth({
    url: `/articles/${articleId}/files`,
    method: "post",
    data: formData,
  });

  return response.data;
};
