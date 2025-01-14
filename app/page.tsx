"use client";
import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import Projects from "./components/ourprojects/projects";
import Services from "./components/services/services";
import Blogs from "./components/blogs/blogs";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Projects />
      <Services />
      <Blogs />
      <About />
      <Contact />
    </div>
  );
}
