import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import {
  getArticlesDetailProps,
  getArticlesDetailRes,
} from "@/@types/apis/get";

export const getArticlesDetail = async ({
  articleId,
}: getArticlesDetailProps): Promise<getArticlesDetailRes> => {
  const response: AxiosResponse<getArticlesDetailRes> = await clientAuth({
    url: `/articles/${articleId}`,
    method: "get",
  });

  return response.data;
};
