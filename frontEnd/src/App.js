/* =================================================================The App Component======================================================= */
//import statement to create App component
import React from "react";
//import main component
import Collections from "./components/Collections";

/* importing css */
import "./App.css";

/*link addded for bootstrap  */
export default function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <Collections />
    </>
  );
}
