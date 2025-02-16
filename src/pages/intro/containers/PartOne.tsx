import { getArticlesSearchRes } from "@/@types/apis/get";
import { useGetArticlesSearch } from "@/hooks/apis/useGetArticlesSearch";
import { useDelArticles } from "@/hooks/useDelArticles";
import { useEffect, useState } from "react";

interface articleDeleteProps {
  articleId: number;
}

const PartOne = ({ articleId }: articleDeleteProps) => {
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");

  const {
    data: resp,
    isLoading,
    isError,
  } = useGetArticlesSearch<getArticlesSearchRes>({
    keyword,
  });

  const { mutate } = useDelArticles();

  const handleSearchClick = () => {
    setKeyword(inputValue);
  };

  const handleDeleteClick = () => {
    mutate({ articleId });
  };

  useEffect(() => {
    console.log("data", resp);
  }, [resp]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading articles</p>;

  return (
    <div className="flex text-left">
      <div className="text-black text-center xxl:text-6xl xl:text-5xl lg:text-3xl md:text-xl sm:text-base xs:text-2xl">
        IT가 궁금한 청년들을 위해
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // inputValue 상태 업데이트
          placeholder="검색어를 입력하시오"
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={handleSearchClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          검색
        </button>
        {resp && <h1>성공</h1>}
        <br></br>
        <br></br>
        <br></br>
        <button
          onClick={handleDeleteClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default PartOne;
