import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-xs">{post.title}</span>
      </NavLink>
      <p className="text-[10px]">
        By
        <span className="italic">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm'>Posted on {post.date}</p>
      <p className='text-md mt-[10px]'>{post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-500 underline font-bold text-xs">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
