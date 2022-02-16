import React from 'react';
import Banner from "./Banner/Banner";
import Classic from "./Classic";
import Release from "./Release/Release";
import Footer from "./Banner/Footer";
import {BearsVideo} from "./BearsVideo";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";

export default function Home() {

  return (
    <>
      <Banner/>
      <BearsVideo/>
      <Classic/>
      <Roadmap/>
      <Release/>
      <Team/>
      <Footer/>
    </>
  )
}
