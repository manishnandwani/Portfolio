import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jsLogo,
  } from "../assets";

  export const overview = "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
  
  export const projectsDescription = 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: jsLogo,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Infoobjects",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2019 - March 2020",
      points: [
        "Developing and maintaining web applications using Angular and Node js.",
        "Collaborating with the user experience (UX) team to create intuitive and user-friendly interfaces.",
        "Adapting to changing project requirements and priorities while meeting deadlines effectively.",
        "Continuous learning and improvement through self-driven exploration of new tools and technologies."
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Ongraph Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2020 - Oct 2021",
      points: [
        "Developing and maintaining web applications using React.js, Nodejs, redux and other related technologies.",
        "Worked as a full stack developer to develop a MERN stack application for a Fintech startup client which provides loan to students online.",
        "Writing clean and efficient code that's easy to understand and maintain.",
        "Integrating third-party APIs and services to add more functionality to the applications.",
        "Troubleshooting and debugging issues to improve the overall performance of the applications."
      ],
    },
    {
      title: "Senior Experience Engineer",
      company_name: "Publicis Sapient",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js, typescript, Next js, graphql, context api.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Also a member of hiring panel for Experience core XT community specializes in react",
        "Elements are designed and structured in a way that allows people with disabilities to easily perceive, navigate, and interact with the web page."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Thank you, Manish, for your commitment and always staying on the top of the work assigned to you. Manish is our front-end team member from engineering. At a time, he is usually working on multiple unrelated items.He's always one of the first one to join the calls, comes prepared and makes sure that he gets answers to all his questions. He is always straight to the point which shows that he has thought through every possible scenario before and has come prepared.  His utmost dedication helps us in achieving the sprint goals on time. Also, all the work he does comes out with great quality that over the time he has gained everyone's trust. He knows what he is doing that even when you ask him about something specific related to his work even after weeks or months, he would put everything as if he is working on it now!. Want to express my gratitude to everything you do Manish and hoping that you will keep the same passion and zeal towards your work and deliver your best!",
      name: "Dimple Agarwal",
      designation: "Director Product Management",
      company: "Publicis Sapient",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Manish has been one team member who has scaled up pretty well and earned good trust from his peers. He has been involved in some of the key deliverables in Albertsons project, which he delivered with quality. He has shown utmost dedication and accountability towards the work assigned to him. Be it calling out dependencies in early stage or having discussion with business team for requirements, Manish does a thorough job of understanding the task in hand and then executing it with great dedication. And whenever the track lead is not present Manish has also stepped up and tried to full-fill the role, which is a great quality and will take him to the road of success. Thank you for your contribution. Keep doing the great work!",
      name: "Gautam Chadha",
      designation: "Senior Manager",
      company: "Publicis Sapient",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Manish Nandwani helped us to refactor the FE logic of Rx status which had direct impact on application, and he was able to deliver the change on time with pro-active participation to understand the requirements behind it, reducing the margin of errors before our major release. Thank you Manish for you dedication and hard work.",
      name: "Ghanshyam Verma",
      designation: "Lead Experience Engineer",
      company: "Publicis Sapient",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };