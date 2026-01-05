import SuccessfulStories from "@/components/homepage/SuccessfulStories";
import Innovating from "@/components/homepage/innovating";
import Experience from "@/components/homepage/experience";
import Recruitment from "@/components/homepage/recruitment";
import LatestJob from "@/components/homepage/latestjob";
import Rightplan from "@/components/homepage/rightplan";
import Clinetsay from "@/components/homepage/clientsay";
import Dedicated from "@/components/homepage/dedicated";
import Question from "@/components/homepage/question";
import Hiriing from "@/components/homepage/hiring";

export default function HomePage() {
  return (
    <>
      <SuccessfulStories />
      <Innovating />
      <Experience />
      <Recruitment />
      <LatestJob />
      <Rightplan />
      <Clinetsay />
      <Dedicated />
      <Question />
      <Hiriing />
    </>
  );
}
