import React, { useContext } from "react";
import BlogItem from "../../Components/Blog/BlogItem";
import { ProductContext } from "../../ProductContext/ProdductContext";
import Container from "../../Components/Container/Container";

const Blog = () => {
  const blogData = useContext(ProductContext);
  return (
    <Container>
      <div className="blog">
        <h1>Fragrance Insights, Tips, Trends, and More :</h1>
        <div className="product-grid">
          {blogData.blog.map((item, index) => (
            <BlogItem
              id={item.id}
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              paragraph={item.paragragh}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
