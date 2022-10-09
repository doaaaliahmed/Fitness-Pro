import BookSection from "./Components/BookSection/BookSection";
import HowToUse from "./Components/HowToUseSection/HowToUse";
import NewExperince from "./Components/NewExperience/NewExperince";
import SlideSection from "./Components/SlideSection/SlideSection";
import StartFreeSection from "./Components/SrartFreeSection/StartFreeSection";
import TrainersSection from "./Components/TrainersSection/TrainersSection";
import UsersSection from "./Components/UsersSection/UsersSection";
import WorksSection from "./Components/WorksSection/WorksSection";
import Counter from "./Components/Counter/Counter";
import Adventure from "./Components/AdventurgesSection/Adventure";
import WorkoutApp from "./Components/WorkoutApp/WorkoutApp";
import FinalSection from "./Components/FinalSection/FinalSection";
import NavBar from "./Components/NavBar/NavBar";
import HeadingSection from "./Components/HeadingSection/HeadingSection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar/>
    <HeadingSection/>
      <UsersSection/>
     <WorksSection/>
       <StartFreeSection/>
      <BookSection/>
     <NewExperince/>
       <HowToUse/>
     <TrainersSection/>
      <SlideSection/>
      <Counter/>
     <Adventure/>
       <WorkoutApp/>
      <FinalSection/>
      <Footer/> 
  
    </>
  );
};

export default App;
