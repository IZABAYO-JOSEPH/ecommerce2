import React from "react";
import Anouncement from "../components/anouncements";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
const Home = () => {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
