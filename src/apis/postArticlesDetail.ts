import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import {
  postArticlesDetailProps,
  postArticlesRes,
} from "@/@types/apis/post/index";

export const postArticlesTheme = async ({
  articleId,
}: postArticlesDetailProps): Promise<postArticlesRes> => {
  const response: AxiosResponse<postArticlesRes> = await clientAuth({
    url: `/articles/${articleId}`,
    method: "post",
  });

  return response.data;
};
