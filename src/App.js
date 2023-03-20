import Header from "./modules/Header/Header";
import Hero from "./modules/Hero/Hero";
import Video from "./modules/Video/Video";
import Services from "./modules/Services/Services";
import Portfolio from "./modules/Portfolio/Portfolio";
import Contact from "./modules/Contact/Contact";
import Footer from "./modules/Footer/Footer";
function App() {
  return (
    <div>
      <Header className="relative" />
      <div className="w-[100vw] xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px] !overflow-x-hidden font-nunito">
        <Hero />
        <Video />
        <Services />
        <Portfolio />
      </div>
      <Contact />
      <div className="mx-[1.5rem] md:mx-[3rem] lg:mx-[6rem] xxl:mx-auto max-w-[1280px] font-nunito">
        <Footer />
      </div>
    </div>
  );
}

export default App;
