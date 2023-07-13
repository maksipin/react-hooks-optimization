import React, { useEffect } from "react";
import TitleSection from "../../component/TitleSection/TitleSection";
import DescriptionSection from "../../component/DescriptionSection/DescriptionSection";
import ContentSection from "../../component/ContentSection/ContentSection";

const CommonPage = ({ config }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      {config.map((section, i) => {
        if (section.type === "title") {
          return <TitleSection key={i} {...section} />;
        }
        if (section.type === "describe") {
          return <DescriptionSection key={i} {...section} />;
        }

        if (section.type === "content") {
          const invert = i % 2 !== 0;
          return <ContentSection key={i} invert={invert} {...section} />;
        }
      })}
    </>
  );
};

export default CommonPage;
