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
          const { title, secondary, icon, linkButton } = section;
          return (
            <TitleSection
              key={i}
              title={title}
              secondary={secondary}
              icon={icon}
              linkButton={linkButton}
            />
          );
        }
        if (section.type === "describe") {
          const { title, secondary } = section;
          return (
            <DescriptionSection key={i} title={title} secondary={secondary} />
          );
        }
        if (section.type === "content") {
          const { title, secondary, img } = section;
          const invert = i % 2 !== 0;
          return (
            <ContentSection
              key={i}
              invert={invert}
              img={img}
              title={title}
              secondary={secondary}
            />
          );
        }
      })}
    </>
  );
};

export default CommonPage;
