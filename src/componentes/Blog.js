import React from "react";

const Blog = () => {
  const posts = [
    { id: 1, titulo: "Articulo 1" },
    { id: 2, titulo: "Articulo 2" },
    { id: 3, titulo: "Articulo 3" },
  ];

  return (
    <div>
      <h2>Blog</h2>
      <p>En esta sección, se incluirán más adelante artículos sobre mí.</p>
    </div>
  );
};

export default Blog;