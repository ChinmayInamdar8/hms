import ContentWrapper from "@/components/home/ContentWrapper";
import Features from "@/components/home/Features";
import HomeHeader from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
   <div className="text-slate-700">
    <HomeHeader/>
    <ContentWrapper>
        <HeroSection/>
        <Features/>
    </ContentWrapper>
   </div> 
  );
}
