import emoji from "react-easy-emoji";
import college from "./assets/images/college.png";
import telstra from "./assets/images/telstra1.jpg";
import infy from "./assets/images/infosys.png";
import nab from "./assets/images/nab1.jpg";
import tbm from "./assets/images/tbm.png";
import edulabs from "./assets/images/edulabs.png";
import userImg from "./assets/images/user.jpg";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Durgesh Singh <DK>",
  logo: userImg,
  title: "Hi, this is Durgesh",
  subTitle: emoji(
    "I am a MERN/Full stack developer, experience working in the Banking and Telecommunication domains. I've almost 9+ years of experience in the software industry building native, hybrid, and monolithic applications using front-end tech such as React/NodeJS and back-end experience in Java/Spring Boot and Rest API. I also have experience in AWS/AWS Lambdas."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ZlpBbOU7WIuVTmxj4E1qq8gqcuv1HN8s?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/erdksingh/",
  github: "https://github.com/erdksingh/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "My skills",
  subTitle: "✒️ A passionate developer, researcher, mentor and team player",
  skills: [
    emoji(
      "✒️ Working as a lead developer/mentor and design architect for a UI based Network visualization tool for the Network Engineers working in Telstra."
    ),
    emoji(
      "✒️ Worked on a 2G-3G-4G migration project for Telstra using technologies like SpringMVC, Spring Boot and React"
    ),
    emoji(
      "✒️ Worked as a full stack developer being involved in complete Software Development Life cycle including Requirement Specification, Functional and Business Specification, Design Specification, Development, Deployment and Releasing the product to customer for National Australi Bank/ MLC"
    ),
    emoji("✒️ For more details of NAB project, pls visit https://mlc.com.au"),
    emoji(
      "✒️ Works on school management applications based on JAVA, JavaScript’s and Vaadin."
    ),
    emoji(
      "✒️ Apart from this, I have hands-on experience in following areas also."
    ),
    emoji(
      "➢ Source / Version Control Tools: GitHub, AE Bitbucket, SVN \n➢ CI/CD Tools: Jenkins, TeamCity, Launch Darkly, Swagger-2.0 and 3.0. \n➢ Programming Languages: Java, SOAP / REST Web services \n➢ Application Server: Apache Tomcat, Oracle WebLogic \n➢ Development Tools: Visual Studio, Eclipse, IntelliJ, PyCharm \n➢ Database: Oracle, SQL, MySQL, MongoDb \n➢ Operating Systems: Windows, Unix/Linux, iOS"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Express Js",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "AE Bitbucket",
      fontAwesomeClassname: "fas fa-sitemap",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gautam Buddh Technical University, Lucknow",
      logo: college,
      subHeader: "Bachelor of Technology",
      duration: "Jun 2008 - June 2012",
      desc: "",
      descBullets: ['Information Technology with Hons'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "80%",
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
    {
      Stack: "Mentoring",
      progressPercentage: "30%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Developer - Contract",
      company: "Telstra",
      companylogo: telstra,
      date: "Mar 2020 – Present",
      desc:
        "Neuron is a multipurpose Network Visualization Tool designed for Radio Engineers to fix network problems, identify connectivity issues, upgrade it or can see the performance of cells specific to 3G,4G,5G Cells. It is being developed to tear down a few independent software which capability is in questions considering 3G technology is going to die like 2G. The purpose of this project is to decommission few older applications and fit into this. It’s an orchestration of at least ten smaller application running independently on very old platforms.",
      descBullets: ["On Infosys contract"],
    },
    {
      role: "Full Stack Engineer - Contract",
      company: "National Australia Bank",
      companylogo: nab,
      date: "Feb 2019 – Feb 2020",
      desc:
        "This project is for NAB/MLC investors to manage their investments and aim was to build a brand-new website with all the latest technologies to remediate security risks in old websites. For more details pls download my CV",
      descBullets: ["On Infosys contract"],
    },
    {
      role: "Technology Analyst",
      company: "Infosys",
      companylogo: infy,
      date: "Dec 2014 – Jan 2019",
      desc:
        "Dibbler is a robust software application designed to help radio engineers to upgrade/downgrade/update information in the network. This was a monolithic architectural desktop-based application built in Angular JS, Java, and related technologies.",
    },
    {
      role: "Java Developer",
      company: "TBM Technologies Pvt Ltd",
      companylogo: tbm,
      date: "Sep 2013 – Nov 2014",
      desc:
        "Java developer who worked on enhancement and responsible for testing on IVR, develop, test new features as per specifications.",
    },
    {
      role: "Associate Software Engineer",
      company: "Edulabs Learning Sol Pvt Ltd",
      companylogo: edulabs,
      date: "Jun 2012 – Jul 2013",
      desc:
        "Java and Vaadin developer who worked with team to build new components and get training on other technologies involved in the development process.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "",
  githubUserName: "erdksingh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters summary",

  achievementsCards: [
    emoji("✓ Pat on the back from client at onshore for living Brand value."),
    emoji("✓ Thumbs Up always for building defect free applications"),
    emoji("✓ Insta Awards at various levels at offshore"),
    emoji(
      "✓ Build swagger API internally as a team, which enables BA,’s to write swagger file easily with simple commands, as a part of client Hackathon."
    ),
    emoji(
      "✓ Training on various technologies like Python, AWS, Node, Express, Security, etc"
    ),
    emoji("✓ Agile certified"),
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",

  blogs: [
    {
      url: "",
      title: "",
      description: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("https://www.linkedin.com/in/erdksingh/"),
  number: "+61 XXX XXX XXX",
  email_address: "er.dks2012@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "Durgesh_infy", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
};
