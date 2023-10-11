import React from "react";
import ReactDOM from "react-dom/client";
import {
  Django,
  Image,
  Name,
  Information,
  ReactLogo,
  Skills,
  Contact,
  Phrase,
  Biography
} from "./Components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = ReactDOM.createRoot(document.getElementById("name"));
const information = ReactDOM.createRoot(document.getElementById("information"));
const django = ReactDOM.createRoot(document.getElementById("django"));
const react_div = ReactDOM.createRoot(document.getElementById("react_div"));
const skills = ReactDOM.createRoot(document.getElementById("skills"));
const contact = ReactDOM.createRoot(document.getElementById("contact"));
const phrase = ReactDOM.createRoot(document.getElementById('phrase'));
const biography = ReactDOM.createRoot(document.getElementById('biography'));

root.render(<Image />);

name.render(<Name />);

information.render(<Information />);
django.render(<Django />);
react_div.render(<ReactLogo />);
skills.render(<Skills />);
contact.render(<Contact />);
phrase.render(<Phrase />);
biography.render(<Biography />);