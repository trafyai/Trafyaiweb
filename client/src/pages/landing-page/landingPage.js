import LandingHero from "../../components/landing-page/LandingHero";
import LandingLearning from "../../components/landing-page/LandingLearning";
import LandingExplore from "../../components/landing-page/LandingExplore";
import LandingOptimised from "../../components/landing-page/LandingOptimised";
import LandingReview from "../../components/landing-page/LandingReview";
import LandingNewsletter from "../../components/landing-page/LandingNewsletter";

export default function landingPage(){
    return(
        <>
        <LandingHero/>
        <LandingLearning/>
        <LandingExplore/>
        <LandingOptimised/>
        <LandingReview/>
        <LandingNewsletter/>
        </>
    )
}