
import ResourcesSection from "./ResourcesSection";
import CategoriesSection from "./CategoriesSection";
import NewsletterSection from "./NewsletterSection";

const MoreSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <ResourcesSection />
        <CategoriesSection />
      </div>
      <NewsletterSection />
    </div>
  );
};

export default MoreSection;
