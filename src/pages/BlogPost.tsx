
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostContent from "@/components/BlogPostContent";
import RelatedArticles from "@/components/RelatedArticles";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogPostContent postId={id} />
      <RelatedArticles currentPostId={id} />
      <Footer />
    </div>
  );
};

export default BlogPost;
