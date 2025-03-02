import { useState } from "react";
import { usePostArticlesTheme } from "@/hooks/apis/usePostArticlesTheme";
import { usePostFiles } from "@/hooks/apis/usePostFiles";
import { handleFileLists } from "../utils/fileHandler";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅

export function useAuditEdit() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");

  const { mutateAsync: createPost, isLoading } = usePostArticlesTheme();
  const { mutateAsync: uploadFiles } = usePostFiles();

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleSubTitleChange = (newSubTitle: string) => {
    setSubTitle(newSubTitle);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handlePostSubmit = async () => {
    try {
      if (category === "") {
        alert("카테고리를 선택해주세요.");
        return;
      }

      const uploadResponse: postFilesRes = await uploadFiles({
        files: [...files, ...images],
      });

      const { result: postFiles } = uploadResponse;
      console.log("uploadResponse", uploadResponse);
      console.log("postFiles", postFiles);

      const postFileList = handleFileLists(postFiles);
      console.log("postFileList", postFileList);

      await createPost({
        theme: category,
        title: title,
        content: content,
        userName: name,
        subTitle: subTitle,
        postFileList,
      });

      navigate(`/`);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    files,
    images,
    title,
    category,
    content,
    setFiles,
    setImages,
    handleTitleChange,
    handleCategoryChange,
    handleContentChange,
    handlePostSubmit,
    handleNameChange,
    handleSubTitleChange,
    isLoading,
  };
}
