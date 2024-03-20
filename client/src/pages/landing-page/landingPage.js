import LandingHero from "../../components/landing-page/LandingHero";
import LandingLearning from "../../components/landing-page/LandingLearning";
import LandingExplore from "../../components/landing-page/LandingExplore";
import LandingOptimised from "../../components/landing-page/LandingOptimised";
import LandingReview from "../../components/landing-page/LandingReview";
import LandingNewsletter from "../../components/landing-page/LandingNewsletter";
import LandingBetterTogether from "../../components/landing-page/LandingBetterTogether";
import { Helmet } from 'react-helmet';

export default function landingPage(){
    return(
        <>
         <Helmet>
        <title>Trafy</title>
        <meta name="description" content="Gain knowledge of advanced concepts with our unique Interactive, Immersive, and Adaptive learning modules and accelerate your career." />
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