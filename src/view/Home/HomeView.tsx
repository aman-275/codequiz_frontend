import React, { useEffect } from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import { HeroView, MainView, OpenSourceSection } from "./components";

export default function HomeView() {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <HeroView />
      <MainView />
      <OpenSourceSection />
      <Footer />
    </>
  );
}
