import sam from "@/assets/sam.png";

interface articleContentProps {
  content: string;
}

const DetailContent = ({ content }: articleContentProps) => {
  return (
    <div className="flex place-items-center flex-col">
      <div className="w-[850px] mt-20">
        <img src={sam}></img>
      </div>
      <div className="text-black text-[Pretendard] text-2xl font-light mt-14 w-[850px]">
        {content}
      </div>
    </div>
  );
};

export default DetailContent;
