
// import React from "react";
// import './BlogPage.css';
// import BlogPageData from "../../../data/blog/blog-page/BlogPageData";
// import { useParams } from "react-router-dom";

// export default function BlogPage(){
//     const { id } = useParams();

//     const postData = BlogPageData.find(item => item.id === id);
  
//     if (!postData) {
//         return <div>Blog post not found</div>;
//     }

//     return (
//         <main>
//             <div className="blog-page">
//                 <div className="blog-page-container">

//                     <section className="blog-page-hero-section" style={{ backgroundColor: postData.bgcolor }}>
//                         <div className="blog-page-hero-section-container">
//                             <div className="blog-page-hero-section-category">
//                                 <p className="blog-page-hero-category">{postData.category}</p>
//                             </div>
//                             <div className="blog-page-hero-section-heading">
//                                 <h1>{postData.title}</h1>
//                             </div>
//                             <div className="blog-page-hero-section-author">
//                                 <p>{postData.author}</p>
//                                 <p>{postData.date}</p>
//                                 <p >{postData.read}</p>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="blog-page-article-section">
//                         <div className="blog-page-article-section-container">

//                             <div className="blog-page-table-of-contents">
//                                 <div className="blog-page-table-of-contents-container">
//                                     <h4>Table of contents</h4>
//                                     <p>Learn the Working Principles
//                                     of Artificial Intelligence.</p>
//                                     <p>Keep track of new AI tools</p>
//                                 </div>
//                             </div>

//                             <div className="blog-page-article-contents">
//                                 <div className="blog-page-article-image">
//                                     <img src={postData.image} alt="" />
//                                 </div>
//                                 <div className="blog-page-article-socials">
//                                     <img src={postData.linkedin} alt="" />
//                                     <img src={postData.facebook} alt="" />
//                                     <img src={postData.twitter} alt="" />
//                                 </div>

//                                 {Object.values(postData.description).map((desc, index) => (
//                                 <div className="blog-page-article-description" key={index}>
//                                      <p>{desc}</p>
//                                 </div>
//                                 ))}

//                                  {Object.values(postData.mainArticle).map((main, mainIndex) => (
//                                 <div className="blog-page-article-main-contents" key={mainIndex} >
//                                     <h1>{main.heading}</h1>
                                    
//                                      {Object.values(main.description).map((desc, descIndex) => (
//                                         <p key={descIndex}>{desc}</p>
//                                     ))}

//                                 </div>
//                                 ))}

//                             </div>
//                         </div>

//                     </section>
//                 </div>
//             </div>
//         </main>
//     );
// }


import React, { useRef } from "react";
import "./BlogPage.css";
import BlogPageData from "../../../data/blog/blog-page/BlogPageData";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { id } = useParams();
  const contentRef = useRef(null);

  const postData = BlogPageData.find((item) => item.id === id);

  if (!postData) {
    return <div>Blog post not found</div>;
  }

  const scrollToHeading = (headingId) => {
    const headingElement = document.getElementById(headingId);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="blog-page">
        <div className="blog-page-container">
          <section
            className="blog-page-hero-section"
            style={{ backgroundColor: postData.bgcolor }}
          >
            <div className="blog-page-hero-section-container">
              <div className="blog-page-hero-section-category">
                <p className="blog-page-hero-category">{postData.category}</p>
              </div>
              <div className="blog-page-hero-section-heading">
                <h1>{postData.title}</h1>
              </div>
              <div className="blog-page-hero-section-author">
                <p>{postData.author}</p>
                <p>{postData.date}</p>
                <p>{postData.read}</p>
              </div>
            </div>
          </section>

          <section className="blog-page-article-section" ref={contentRef}>
            <div className="blog-page-article-section-container">
              <div className="blog-page-table-of-contents">
                <div className="blog-page-table-of-contents-container">
                  <h4>Table of contents</h4>
                  {Object.keys(postData.mainArticle).map((key, index) => (
                    <p key={index} onClick={() => scrollToHeading(key)}>
                      {postData.mainArticle[key].heading}
                    </p>
                  ))}
                </div>
              </div>

              <div className="blog-page-article-contents">
                <div className="blog-page-article-image">
                  <img src={postData.image} alt="" />
                </div>
                <div className="blog-page-article-socials">
                  <img src={postData.linkedin} alt="" />
                  <img src={postData.facebook} alt="" />
                  <img src={postData.twitter} alt="" />
                </div>

                {Object.keys(postData.mainArticle).map((key, mainIndex) => (
                  <div className="blog-page-article-main-contents" key={mainIndex}>
                    <h1 id={key}>{postData.mainArticle[key].heading}</h1>
                    {Array.isArray(postData.mainArticle[key].description) ? (
                      postData.mainArticle[key].description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))
                    ) : (
                      <p>{postData.mainArticle[key].description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
