import project1 from "../assets/projects/codeup.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `
  I am a software engineer passionate about building dynamic and scalable websites. I specialize in React.js, Node.js, and other modern web technologies. 
  As a US Army veteran, I've honed my problem-solving and soft skills against unique and varied challenges. 
  Check out my projects on GitHub and connect with me on Twitter to follow my journey in the tech world.
`;


export const ABOUT_TEXT = `
  I'm Ernest Pough, a passionate software engineer and problem solver with a keen interest in exploring the tech world and cloud infrastructure. 
  I specialize in web development, leveraging my expertise in JavaScript, React, and Python to build dynamic and scalable applications. 
  I'm always open to new opportunities and collaborations. Feel free to reach out!
`;



export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Software Engineer",
    company: "Wistia",
    description: `Key member of the Platform Engineering Team working on admin features, cypress migrations, Github Actions, and security fixes`,
    technologies: ["React", "Node.js", "Ruby on Rails", "Ruby", "Javascript", "TypeScript"],
  },
  {
    year: "2023 - Present",
    role: "Developer Relations (Volunteer)",
    company: "Resilient Coders",
    description: `Facilitate community engagement activieies such as events and online discussion for the 400+ engineering community, fostering a collaborative environment and enhancing peer learning`,
    technologies: ["React", "Node.js", "Python", "Javascript", "TypeScript"],
  },
];


export const PROJECTS = [
  {
    title: "Note-AI-App",
    image: project1,
    github: "https://github.com/Poughe/Note-AI-App",
    description:
      "Note-AI-App is a fully functional notes app with an addtional touch of AI",
    technologies: ["React", "Wasp", "Cypress", "ViTest", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    github: "https://github.com/Poughe/poughe.github.io",
    link: "https://ernestpough.dev/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion","Tailwind"],
  },
];

export const CONTACT = {
  email: "poughe@gmail.com",
  address: "Boston, MA"
};