import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function Overview() {
  return (
    <section>
      <h1>Vista general de la pagina</h1>
      <h3>Cantidad de comentarios: {posts.length}</h3>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>
            <Link to={`blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        })}
      </ul>
    </section>
  );
}

export default Overview;