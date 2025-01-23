import React from "react";
import Header from "./Header"; // Import the Header component
import "../styles/Blog.css";

const BlogPost = ({ title, date, summary }) => {
  return (
    <div className="blog-post">
      <h2 className="post-title">{title}</h2>
      <p className="post-date">{date}</p>
      <p className="post-summary">{summary}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blog">
      <Header /> {/* Add the Header component here */}
      <h1 className="blog-title">Welcome to Our Blog!</h1>
      <div className="blog-posts">
        <BlogPost
          title="Post Title 1"
          date="January 21, 2025"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non lorem blandit fermentum..."
        />
        <BlogPost
          title="Post Title 2"
          date="January 20, 2025"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non lorem blandit fermentum..."
        />
        <BlogPost
          title="Post Title 3"
          date="January 19, 2025"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non lorem blandit fermentum..."
        />
      </div>
    </div>
  );
};

export default Blog;