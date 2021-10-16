import React from "react";
import Anouncement from "../components/anouncements";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NewsLetter from "../components/newsletter";
import Products from "../components/products";
import Slider from "../components/slider";
const Home = () => {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
