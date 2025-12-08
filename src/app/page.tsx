import Image from "next/image";
import Banner from "./components/banner";
import About from "./components/about";
import Introduce from "./components/introduce";
import WorkExperience from "./components/workexperience";
import MySkill from "./components/myskill";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="mx-auto">
      <Header/>
      <Banner />
      <About/>
      <Introduce/>
      <WorkExperience />
      <MySkill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
