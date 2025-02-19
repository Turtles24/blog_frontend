import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import {
  patchArticlesProps,
  patchArticlesRes,
} from "@/@types/apis/patch/index";

export const patchArticles = async ({
  articleId,   
  theme,
  title,
  content,
  subTitle,
}: patchArticlesProps): Promise<patchArticlesRes> => {
  const response: AxiosResponse<patchArticlesRes> = await clientAuth({
    url: `/articles/${articleId}`,
    method: "patch",
    data: {
      theme,
      title,
      content,
      subTitle,
    },
  });
  return response.data;
};
