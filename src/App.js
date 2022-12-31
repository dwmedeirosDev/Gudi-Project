import React from "react";
import {GlobalStyle} from "./global/global";
import HomePage from "./components/homepage/homepage";

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <HomePage/>
    </>
  )
}