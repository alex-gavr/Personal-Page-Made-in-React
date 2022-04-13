import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import '../css/index.css';

import Home from './Home';
import Game from './Game/Game';
import Quiz from './Quiz/Quiz';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Hobbies from './Hobbies';

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return(  
      <AnimatePresence exitBeforeEnter >
        <Routes key={location.pathname} location={location}>        
          <Route exact path="/" element= {<Home />} />
          <Route path="/game" element= {<Game />} />
          <Route path="/quiz" element= {<Quiz />} />
          <Route path="/education" element= {<Education />} />    
          <Route path="/work-experience" element= {<WorkExperience />} />  
          <Route path="/skills" element= {<Skills />} />
          <Route path="/hobbies" element= {<Hobbies />} />
        </Routes>
      </AnimatePresence>
  );
};

export default App;
