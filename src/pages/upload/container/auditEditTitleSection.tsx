import { useState } from "react";
import useTruncateText from "@/hooks/useTruncateText";
import { FilterDropDown } from "@/component/FilterDropdown/FilterDropdown";

interface AuditEditTitleSectionProps {
  initialTitle?: string;
  initialSubTitle?: string;
  initialUserName?: string;
  initialCategory?: string;
  onTitleChange: (title: string) => void;
  onSubTitleChange: (subTitle: string) => void;
  onNameChange: (name: string) => void;
  onCategoryChange: (category: string) => void;
  categoryList: string[];
}

export function AuditEditTitleSection({
  initialTitle = "",
  initialSubTitle = "",
  initialUserName = "",
  initialCategory = "",
  onTitleChange,
  onSubTitleChange,
  onCategoryChange,
  onNameChange,
  categoryList,
}: AuditEditTitleSectionProps) {
  const [title, setTitle] = useState<string>(initialTitle);
  const [subTitle, setSubTitle] = useState<string>(initialSubTitle);
  const [userName, setUserName] = useState<string>(initialUserName);
  const [category, setCategory] = useState<string>(initialCategory);

  const truncatedTitle = useTruncateText(title, 50);
  const truncatedSubTitle = useTruncateText(subTitle, 100);
  const truncatedUserName = useTruncateText(userName, 25);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      onTitleChange(newTitle);
    }
  };

  const handleSubTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSubTitle = event.target.value;
    if (newSubTitle.length <= 50) {
      setSubTitle(newSubTitle);
      onSubTitleChange(newSubTitle);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    if (newName.length <= 50) {
      setUserName(newName);
      onNameChange(newName);
    }
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className="px-[200px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[30px]">
      <div className="flex flex-row items-center justify-center gap-4 xs:flex-col xs:items-start xs:gap-1 sm:flex-col sm:items-start sm:gap-1">
        <input
          type="text"
          id="title"
          value={truncatedTitle}
          onChange={handleTitleChange}
          className="w-3/12   rounded-xs border-[0.125rem] border-gray-300 px-3 py-[0.4rem] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 md:text-base sm:text-sm"
          placeholder="글 제목"
        />
        <input
          type="text"
          id="subTitle"
          value={truncatedSubTitle}
          onChange={handleSubTitleChange}
          className="w-8/12 rounded-xs border-[0.125rem] border-gray-300 px-3 py-[0.4rem] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          placeholder="부제목"
        />
        <input
          type="text"
          id="name"
          value={truncatedUserName}
          onChange={handleNameChange}
          className="w-1/12 rounded-xs border-[0.125rem] border-gray-300 px-3 py-[0.4rem] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          placeholder="작성자"
        />
        <FilterDropDown
          className="sm-hidden xs-hidden flex h-[2.5rem] w-[6.5rem] items-center justify-center rounded-xs border-[0.125rem] border-gray-300 px-[0.4rem] py-[0.35rem] text-sm font-bold text-gray-500"
          itemStyle="py-0 pr-0 text-base font-bold text-gray-500"
          defaultValue="카테고리"
          optionValue={categoryList}
          onValueChange={handleCategoryChange}
          value={category}
        />
      </div>
    </div>
  );
}
