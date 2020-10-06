import React from "react";
import styles from "./Header.module.scss";

import { FaLinkedin, FaGithubSquare, FaPhoneSquare} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <h1>TIME SAVED IN LOCKDOWN</h1>
        <div>
          <a href=""><FaLinkedin/></a>
          <a href=""><FaGithubSquare/></a>
          <a href=""><FaPhoneSquare/></a>
        </div>
      </header>
  );
};

export default Header;
