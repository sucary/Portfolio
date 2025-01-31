import React from 'react';
import Description from "./Description";
import Header from "./Header";
import Projects from "./Projects";

import { descriptions } from "../data/descriptions";
import Contacts from "./Contacts";



const Home = () => {


  return (
    <div>
      <Header />
      <Description description = {descriptions.en.description}/>
      <Projects />
      <Contacts />
    </div>
  )
};

export default Home;