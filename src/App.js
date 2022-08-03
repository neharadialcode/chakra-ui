import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import About from "./component/About";
import WhatAre from "./component/WhatAre";

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <Hero /> */}
        <About />
        <WhatAre />
      </ChakraProvider>
    </>
  );
}

export default App;
