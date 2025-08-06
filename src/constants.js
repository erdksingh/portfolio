import college from "./assets/images/college.png";
import telstra from "./assets/images/telstra1.jpg";
import infy from "./assets/images/infosys.png";
import nab from "./assets/images/nab1.jpg";
import tbm from "./assets/images/tbm.png";
import edulabs from "./assets/images/edulabs.png";
import userImg from "./assets/images/user.jpg";
import tpg from "./assets/images/tpg.jpg";
import EMOJI from "./common/Emoji";
import optus from "./assets/images/optus.jpeg";

const illustration = {
  animated: true, // set to false to use static SVG
};

//remove the short names
const greeting = {
  username: "Durgesh Singh",
  logo: userImg,
  title: "Hi, this is Durgesh",
  subTitle: EMOJI(
    "A Lead DevOps Engineer, with over 14 years of expertise in the Banking and Telecommunication sectors. Primarily coming from development background, focusing on designing and automating GitOps toolings by hosting in-house products offered to the wide devoloper community."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ZlpBbOU7WIuVTmxj4E1qq8gqcuv1HN8s?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/erdksingh/",
  github: "https://github.com/erdksingh/",
  instagram: "https://www.instagram.com/Durgesh.Singh07/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "My skills",
  subTitle:
    "✒️ A Lead DevOps Engineer, a Principle Engineer or DevOps Architect",
  skills: [
    EMOJI(
      "✒️  Senior DevOps/Platform Engineer, responsible for designing and automating the SDLC with a strong focus on DevSecOps. Hosted all required tools in-house on a VMware-based Kubernetes cluster 😊"
    ),
    EMOJI(
      "✒️ Worked as a Senior Software Engineer for one of the latest tech space using Auth0 which enable password-less login to the Vodafone customers."
    ),
    EMOJI(
      "✒️ Worked as a lead developer/mentor and design architect for a UI based Network visualization tool for the Network Engineers working in Telstra."
    ),
    EMOJI(
      "✒️ Worked on a 2G-3G-4G migration project for Telstra using technologies like SpringMVC, Spring Boot and React"
    ),
    EMOJI(
      "✒️ Worked as a full stack developer being involved in complete Software Development Life cycle including Requirement Specification, Functional and Business Specification, Design Specification, Development, Deployment and Releasing the product to customer for National Australi Bank/ MLC"
    ),
    EMOJI("✒️ For more details of NAB project, pls visit https://mlc.com.au"),
    EMOJI(
      "✒️ Worked on school management applications based on JAVA, JavaScript’s and Vaadin."
    ),
    EMOJI(
      "✒️ Apart from this, I have hands-on experience in following areas also."
    ),
    EMOJI(
      "➢ Source / Version Control Tools: GitHub, AE Bitbucket, SVN \n➢ CI/CD Tools: Jenkins, TeamCity, Launch Darkly, Swagger-2.0 and 3.0. \n➢ Programming Languages: Java, SOAP / REST Web services \n➢ Application Server: Apache Tomcat, Oracle WebLogic \n➢ Development Tools: Visual Studio, Eclipse, IntelliJ, PyCharm \n➢ Database: Oracle, SQL, MySQL, MongoDb \n➢ Operating Systems: Windows, Unix/Linux, iOS"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "DevSecOps|GitOps",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Ansible Tower | AAP",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Ansible Satellite",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "OpenShift",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "PaaS",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "SaaS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Harbor",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "ArgoCD",
      fontAwesomeClassname: "fas fa-auth0",
    },
    {
      skillName: "NoSQL and SQL DB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Nexus",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Elastic Stack",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "Vault",
      fontAwesomeClassname: "fas fa-sitemap",
    },
    {
      skillName: "Rancher",
      fontAwesomeClassname: "fa-solid fa-hat-cowboy-side",
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa-solid fa-gears",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PCCS Greater Noida aff GBTU Lucknow",
      logo: college,
      subHeader: "Bachelor of Technology",
      duration: "Jun 2008 - June 2012",
      desc: "",
      descBullets: ["Information Technology with Honours degree"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevSecOps",
      progressPercentage: "80%",
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "50%",
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
    {
      Stack: "Mentoring and LeaderShip",
      progressPercentage: "80%",
    },
    {
      Stack: "Architecture",
      progressPercentage: "40%",
    },
    {
      Stack: "Solutioning",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Chapter Lead DevOps",
      company: "Optus",
      companylogo: optus,
      date: "Jul 2022 – Present",
      desc: "Platform owner for a Kubernetes cluster running DevOps and GitOps tools. Responsible for designing future cloud solutions with a focus on redundancy and resiliency using public cloud such as AWS and GCP",
      descBullets: ["Perm"],
    },
    {
      role: "Senior Software Engineer | Principal Engineer",
      company: "TPG Telecom",
      companylogo: tpg,
      date: "Aug 2021 – Jun 2022",
      desc: "Identity Platform using Auth0 to enable password less login. Joined as a full stack engineer to implement Identity plarform using AWS and Node JS, Hold the platform engineering role at the very end to con-ordinate and deliver the password-less solution across mobile app and other area of the businesses.",
      // descBullets: ["Perm"],
    },
    {
      role: "Senior Software Developer - Contract",
      company: "Telstra",
      companylogo: telstra,
      date: "Mar 2020 – Aug 2021",
      desc: "Neuron is a multipurpose Network Visualization Tool designed for Radio Engineers to fix network problems, identify connectivity issues, upgrade it or can see the performance of cells specific to 3G,4G,5G Cells.",
      // descBullets: ["On Infosys contract"],
    },
    {
      role: "Full Stack Engineer - Contract",
      company: "National Australia Bank",
      companylogo: nab,
      date: "Feb 2019 – Feb 2020",
      desc: "This project is for NAB/MLC investors to manage their investments and aim was to build a brand-new website with all the latest technologies to remediate security risks in old websites. For more details pls download my CV",
      // descBullets: ["On Infosys contract"],
    },
    {
      role: "Technology Analyst | Technology Lead",
      company: "Infosys",
      companylogo: infy,
      date: "Dec 2014 – Jan 2019",
      desc: "Dibbler is a robust software application designed to help radio engineers to upgrade/downgrade/update information in the network. This was a monolithic architectural desktop-based application built in Angular JS, Java, and related technologies.",
    },
    {
      role: "Software Engineer",
      company: "TBM Technologies Pvt Ltd",
      companylogo: tbm,
      date: "Sep 2013 – Nov 2014",
      desc: "Java developer who worked on enhancement and responsible for testing on IVR, develop, test new features as per specifications.",
    },
    {
      role: "Associate Software Engineer",
      company: "Edulabs Learning Sol Pvt Ltd",
      companylogo: edulabs,
      date: "Jun 2011 – Jul 2013",
      desc: "Java and Vaadin developer who worked with team to build new components and get training on other technologies involved in the development process.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "",
  githubUserName: "erdksingh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: EMOJI("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters summary",

  achievementsCards: [
    EMOJI("✓ AWS Solution Architect Associate"),
    EMOJI("✓ Rancher and Kubernetes"),
    EMOJI("✓ Ansible"),
    EMOJI("✓ Insta Awards at various levels at offshore"),
    EMOJI(
      "✓ Build swagger API internally as a team, which enables Business Analysts to write swagger file easily with simple commands, as a part of client Hackathon."
    ),
    EMOJI("✓ Agile certified"),
  ],
  display: true, // Set false to hide this section, defaults to true
};

//adding workrights section too
const workRights = {
  title: EMOJI("Work Rights"),
  subtitle:
    "I'm a permanent resident of Australia and therefore have full work rights 😊😊😊",
  display: false,
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
  subtitle: EMOJI(""),
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
  title: EMOJI("Contact Me ☎️"),
  number: "+61 XXX XXX XXX",
  email_address: "er.dks2012@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "Durgesh_infy", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const youtubeLinks = {
  urls: [
    {
      title: "Fly without machine",
      url: "https://www.youtube.com/embed/_rJWbKBq1uk",
    },
    {
      title: "Nth sydney-suburbs",
      url: "https://www.youtube.com/embed/K-CGnatiE9I",
    },
    {
      title: "sydney harbour bridge walk",
      url: "https://www.youtube.com/embed/Y1l1MDKL_q0",
    },
  ],
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
  workRights,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  youtubeLinks,
};
