import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.css";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import StartupProject from "./StartupProjects/StartupProject";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import WorkExperience from "./workExperience/WorkExperience";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <StartupProject />
          <Achievement />
          <Contact />
          <Blogs />
          <Talks />
          <Twitter />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
