import TeamBox from "./TeamBox";
import testData from "@/assets/db/data.json";

const SectionSecond = () => {
  return (
    <div>
      <div>
        {testData.data.map((data) => (
          <>
            <TeamBox
              title={data.title}
              content_1={data.content_1}
              content_2={data.content_2}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionSecond;
