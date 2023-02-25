import Header from './modules/Header/'
import Hero from './modules/Hero'
import Video from './modules/Video'
import Services from './modules/Services'
import Portfolio from './modules/Portfolio'
import Contact from './modules/Contact'
import Footer from './modules/Footer'
function App() {
  return (
    <>
      <Header/>
    <div className="mx-[1.5rem] md:mx-[3rem] lg:mx-[6rem] xxl:mx-auto font-mono lg:max-w-[1280px] font-nunito">
      <Hero/>
      <Video/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
