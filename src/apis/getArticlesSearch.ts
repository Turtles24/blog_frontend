import { AxiosResponse } from "axios";
import { clientAuth } from "./client";
import {
  getArticlesSearchProps,
  getArticlesSearchRes,
} from "@/@types/apis/get/index";

export const getArticlesSearch = async ({
  keyword,
}: getArticlesSearchProps): Promise<getArticlesSearchRes> => {
  const response: AxiosResponse<getArticlesSearchRes> = await clientAuth({
    url: `/articles/search/${keyword}`,
    method: "get",
  });

  return response.data;
};
