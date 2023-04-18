import React from "react";
import github from "../../assets/github.png";
import api from "../../assets/api.png";
import linkedin from "../../assets/linkedin.png";
import pokeball from "../../assets/pokeball.png";

const Footer = () => {
  return (
    <div className="container-footer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/davide-panetta/">Linkedin</a>
          <img src={linkedin} alt="linkedin" />
        </li>
        <li>
          <a href="https://github.com/David92p">GitHub</a>
          <img src={github} alt="mygithub" />
        </li>
        <li>
          <a href="https://pokeapi.co/about">Api</a>
          <img src={api} alt="api" />
        </li>
      </ul>
      <div class="my-text-footer">
        Designed and built with all the love in the world{" "}
        <img src={pokeball} alt="pokeballicon" />
      </div>
    </div>
  );
};

export default Footer;
