export interface TeamBoxProps {
  title: string;
  content_1: string;
  content_2: string;
}

const TeamBox = ({ title, content_1, content_2 }: TeamBoxProps) => {
  return (
    <div className="mt-[70px] text-start">
      <div className="text-[#3D4653] font-medium text-[50px]">{title}</div>
      <div>{content_1}</div>
      <div>{content_2}</div>
    </div>
  );
};

export default TeamBox;
