import articles from "./article-content";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map((item) => (
        <Link
          key={item.name}
          to={`/articles/${item.name}`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;
