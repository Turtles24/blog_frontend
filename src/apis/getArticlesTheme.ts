import {
  getArticlesThemeProps,
  getArticlesThemeRes,
} from "@/@types/apis/get/index";
import { clientAuth } from "./client";
import { AxiosResponse } from "axios";

export const getArticlesTheme = async ({
  theme,
  page,
}: getArticlesThemeProps): Promise<getArticlesThemeRes> => {
  const response: AxiosResponse<getArticlesThemeRes> = await clientAuth({
    url: `/articles/theme/${theme}/?page=${page}`,
    method: "get",
  });
  return response.data;
};
