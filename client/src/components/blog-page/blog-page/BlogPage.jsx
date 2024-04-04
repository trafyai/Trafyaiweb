
import React, { useRef, useState } from "react";
import "./BlogPage.css";
import BlogPageData from "../../../data/blog/blog-page/BlogPageData";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';


export default function BlogPage() {
  const { id } = useParams();
  const contentRef = useRef(null);

  const [userData, setUserData] = useState({
    email: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false); // State to track if the user has subscribed

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = userData;

    if (!email) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    // Validation of email format can be added here if needed

    try {
      const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubscribed(true); // Set subscribed state to true
        setErrorMessage(""); // Clear error message
        setUserData({ email: "" }); // Clear the input field
      } else {
        setErrorMessage("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Error submitting the form. Please try again later.");
    }
  };

  // Function to render the form or the thank you message
  const renderFormOrMessage = () => {
    if (subscribed) {
      return (
        <div className="blog-newsletter-heading">
          <h1>Thank you for subscribing to our newsletter!</h1>
        </div>
      );
    } else {
      return (
        <div className="blog-newsletter-container-inner">
          <div className="blog-newsletter-heading">
            <h1>Subscribe to our newsletter</h1>
          </div>
          <div className="blog-newsletter-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                name="email"
                className="blog-newsletter-email"
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              
            </form>
          </div>
          <button type="submit">Submit</button>
         
        </div>
      );
    }
  };

  return (
    <main>
      <Helmet>
        <title>{postData.title}</title>
        {/* Add any other meta tags as needed */}
        <meta name="description" content={postData.description} />
        <meta property="og:image" content={postData.metaImage} />
        <meta property="og:image:height" content="600"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:type" content="article"/>
    <meta property="og:title" content={postData.description}/>
    <meta property="og:description" content={postData.metaImage}/> 
    
      </Helmet>


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
                {/* <div className="blog-page-article-image">
                  <img src={postData.image} alt="" />
                </div> */}
                
                {/* ////////////////////////////////description//////////////////// */}
                {Array.isArray(postData.description) ? (
                  postData.description.map((desc, descIndex) => (
                    <div className="blog-page-article-socials-description" key={descIndex}>
                      <p>{desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="blog-page-article-socials-description">
                    <p>{postData.description}</p>
                  </div>
                )}

              
                {postData.mainArticle.map((article, mainIndex) => (
                  <div className="blog-page-article-main-contents" key={mainIndex}>
                    <h1 id={mainIndex}>{article.heading}</h1>
                    {Array.isArray(article.description) ? (
                      article.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))
                    ) : (
                      <p>{article.description}</p>
                    )}
                  </div>
                ))}
                 <div className="blog-page-article-socials">
                  Share:
                  <img src={postData.linkedin} alt="" />
                  <img src={postData.facebook} alt="" />
                  <img src={postData.twitter} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="blog-newsletter">
            <div className="blog-newsletter-container">
              {renderFormOrMessage()} {/* Render form or thank you message */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
