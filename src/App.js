import { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import UseCourses from "./UseCourses/UseCourses";

export const coursesContext = createContext([]);

const App = () => {

  const [courses] = UseCourses();
  return (
    <>
       <coursesContext.Provider value={[...courses]}>
       <Router>
         <Header />
         <Switch>
           <Route exact path='/'>
             <Home/>
           </Route>
           <Route path='/home'>
             <Home />
           </Route>
           <Route path='/about'>
             <About />
           </Route>
           <Route path='/courses'>
            <Courses />
           </Route>
           <Route path='/contact'>
             <Contact />
           </Route>
           <Route path='/details/:id'>
            <CourseDetails />
           </Route>
           <Route path="/sign-in">
             <SignIn />
           </Route>
           <Route path="*">
             <NotFound />
           </Route>
         </Switch>
         <Footer />
       </Router>
       </coursesContext.Provider>
    </>

  );
}

export default App;
