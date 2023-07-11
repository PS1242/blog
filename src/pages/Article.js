import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFound from "./NotFound";

const Article = () => {
  const { articleId } = useParams();
  const article = articles.find((item) => item.name === articleId);

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{article.name}</h1>
      {article.content.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </>
  );
};

export default Article;
