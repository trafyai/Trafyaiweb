import LandingHero from "../../components/landing-page/LandingHero";
import LandingLearning from "../../components/landing-page/LandingLearning";
import LandingExplore from "../../components/landing-page/LandingExplore";
import LandingOptimised from "../../components/landing-page/LandingOptimised";
import LandingReview from "../../components/landing-page/LandingReview";
import LandingNewsletter from "../../components/landing-page/LandingNewsletter";
import LandingBetterTogether from "../../components/landing-page/LandingBetterTogether";
import { Helmet } from 'react-helmet';

export default function landingPage(){
    const currentPageUrl = 'https://www.trafyai.com';
    return(
        <>
         <Helmet>
        <title>Trafy | Interactive Learning, Next Generation Courses.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={currentPageUrl} />
        <meta name="description" content="Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance" />
      </Helmet>
        <LandingHero/>
        <LandingLearning/>
        <LandingExplore/>
        <LandingOptimised/>
        <LandingBetterTogether/>
        <LandingReview/>
        <LandingNewsletter/>
        </>
    )
}