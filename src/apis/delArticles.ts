import { clientAuth } from "./client";
import { AxiosResponse } from "axios";
import { delArticlesProps, delArticlesRes } from "@/@types/apis/del";

export const delArticles = async ({
  articleId,
}: delArticlesProps): Promise<AxiosResponse<delArticlesRes>> => {
  return await clientAuth({
    method: "delete",
    url: `/articles/${articleId}`,
  });
};
