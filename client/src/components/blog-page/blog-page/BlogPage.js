import React, { useRef, useState, useEffect } from "react";
import "./BlogPage.css";
import BlogPageData from "../../../data/blog/blog-page/BlogPageData";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function BlogPage() {
  const { id } = useParams();
  const contentRef = useRef(null);

   const [userData, setUserData] = useState({
    email: ""
  });

  
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);


  const [postData, setPostData] = useState(null); // State to store blog post data
  const location = useLocation();
  const currentPageUrl = `https://trafyai.com${location.pathname}`;

  useEffect(() => {
    // Find postData from BlogPageData based on id
    const postData = BlogPageData.find(item => item.id === id);
  
    if (postData) {
      setPostData(postData);
    } else { 
      console.error("Blog post not found");
    }
  }, [id]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  const scrollToHeading = (headingId) => {
    const headingElement = document.getElementById(headingId);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // State to track if the user has subscribed

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
          console.log(response)
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
        <div className="blog-newsletter-form-thankyou">
          <h3>Thank you for subscribing to our newsletter!</h3>
        </div>
      );
    } else {
      return (
        <div className="blog-newsletter-container-inner">
          <div className="blog-newsletter-heading">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <div className="blog-newsletter-form">
            <form onSubmit={handleSubmit} >
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
              <button type="submit">Submit</button>
              
            </form>
          </div>
         
        </div>
      );
    }
  };

  // Functions to share the current page to LinkedIn, Twitter, and Facebook
  const shareToLinkedIn = () => {
    const postTitle = encodeURIComponent(postData.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  };
  
  const shareToTwitter = () => {
    const postTitle = encodeURIComponent(postData.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
  };
  
  const shareToFacebook = () => {
    const postTitle = encodeURIComponent(postData.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  };
 
  const mTitle= postData.title;
  const mDesc=postData.metaDescription;


  return (
    <main>
      <Helmet>
        <title>{mTitle}</title>
        <link rel="canonical" href={currentPageUrl}/>
        <meta name="description" content={mDesc} />

        <meta property="og:site_name" content="Trafy" />
        <meta property="og:image" content={postData.metaImage} />
        <meta property="og:image:height" content="600"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={mTitle}/>
        <meta property="og:url" content={currentPageUrl}/>
        <meta property="og:description" content={mDesc}/> 
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
                  <img src={postData.linkedin} alt="" onClick={shareToLinkedIn}/>
                  <img src={postData.facebook} alt="" onClick={shareToFacebook}/>
                  <img src={postData.twitter} alt="" onClick={shareToTwitter}/>
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