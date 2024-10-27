import AboutUs from "@/components/AboutUs";
import { Blogs } from "@/components/Blogs";
import { ContactUs } from "@/components/ContactUs";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import News from "@/components/News";
import { NewsLetter } from "@/components/NewsLetter";
import { OurWork } from "@/components/OurWork";
import StickyButton from "@/components/StickyButton";
import WeAreHiring from "@/components/WeAreHiring";

export default function Home() {
  return (
    <main className="relative max-w-screen overflow-hidden">
      <Hero/>
      <OurWork/>
      {/* <OurWorkGrid/> */}      
      <StickyButton/>
      <AboutUs/>
      <MeetTheTeam/>
      {/* <Blogs/> */}
      <News/>
      <WeAreHiring/>
      <NewsLetter/>
      <ContactUs/>
    </main>
  );
}
