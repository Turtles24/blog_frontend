export interface getArticlesThemeRes {
  page: number;
  totalPages: number;
  hasNext: boolean;
  data: getArticleResDto[]; // ✅ 배열로 수정
}

export interface getArticleResDto {
  articleId: number;
  userName: string; // ✅ data 객체 제거
  title: string;
  subTitle: string;
}

export interface getArticlesThemeProps {
  theme: string;
  page: number;
}

export interface getArticlesSearchProps {
  keyword: string;
}

export interface getArticlesSearchRes {
  data: postArticleSearchResDto[];
}

export interface postArticleSearchResDto {
  articleId: number;
  userName: string;
  theme: string;
  title: string;
  subTitle: string;
}
