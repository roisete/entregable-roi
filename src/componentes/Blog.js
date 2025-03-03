import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, titulo: "Articulo 1" },
    { id: 2, titulo: "Articulo 2" },
    { id: 3, titulo: "Articulo 3" },
  ];

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;