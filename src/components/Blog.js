import React from "react";
import "../styles/Blog.css"; // Import your Blog CSS

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog-title">Welcome to Our Blog!</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <h2 className="post-title">Post Title 1</h2>
          <p className="post-date">January 21, 2025</p>
          <p className="post-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non
            lorem blandit fermentum...
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="blog-post">
          <h2 className="post-title">Post Title 2</h2>
          <p className="post-date">January 20, 2025</p>
          <p className="post-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non
            lorem blandit fermentum...
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="blog-post">
          <h2 className="post-title">Post Title 3</h2>
          <p className="post-date">January 19, 2025</p>
          <p className="post-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim volutpat augue, non faucibus mi. Vivamus vel nisi non
            lorem blandit fermentum...
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
