import React from "react";
import MinimalTemplate from "./templates/MinimalTemplate";
import DarkTemplate from "./templates/DarkTemplate";
import TechTemplate from "./templates/TechTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import AestheticTemplate from "./templates/AestheticTemplate";

function PortfolioPreview({
  resume,
  photo,
  sections,
  template,
  theme,
}) {
  const props = {
    resume,
    photo,
    sections,
    theme,
  };

  switch (template) {
    case "minimal":
      return <MinimalTemplate {...props} />;

    case "dark":
      return <DarkTemplate {...props} />;

    case "tech":
      return <TechTemplate {...props} />;

    case "professional":
      return <ProfessionalTemplate {...props} />;

    case "aesthetic":
      return <AestheticTemplate {...props} />;

    default:
      return <MinimalTemplate {...props} />;
  }
}

export default PortfolioPreview;