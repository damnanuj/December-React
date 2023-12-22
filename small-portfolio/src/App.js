import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Section from "./components/section";
import Footer from "./components/Footer";

const sectionData = [
  {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae obcaecati tenetur et maiores eos odio veniam cupiditate distinctio tempore aut veritatis nemo quis, consectetur debitis ullam ipsam ipsum quaerat voluptatum fugiat officiis cumque? Quod, soluta excepturi saepe ratione totam beatae, vel mollitia temporibus, quam minima facere voluptates numquam enim.",
  },
  {
  title: "Qualifications",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae obcaecati tenetur et maiores eos odio veniam cupiditate distinctio tempore aut veritatis nemo quis, consectetur debitis ullam ipsam ipsum quaerat voluptatum fugiat officiis cumque? Quod, soluta excepturi saepe ratione totam beatae, vel mollitia temporibus, quam minima facere voluptates numquam enim.",
  },
  {
  title: "Projects",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae obcaecati tenetur et maiores eos odio veniam cupiditate distinctio tempore aut veritatis nemo quis, consectetur debitis ullam ipsam ipsum quaerat voluptatum fugiat officiis cumque? Quod, soluta excepturi saepe ratione totam beatae, vel mollitia temporibus, quam minima facere voluptates numquam enim.",
  }
];

const App = () => {
  return (
    <div>
      <Navbar />
      <About />

      {
        sectionData.map(item =>{
          return (
            <Section
              title={item.title}
              description={item.description}
            />
          )
        })
      }

      <Footer/>


    </div>
  );
};

export default App;


//in jsx only ternory conditions
//loops = map, filter, reduce and (hof that returns something)