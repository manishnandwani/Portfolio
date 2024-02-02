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
    textToSpeech,
    sketchbook,
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
      company_name: "Infoobjects -  Jaipur, Rajasthan",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - March 2020",
      points: [
        "Developed and maintained a web application using Angular and Node js.",
        "Engaged with websockets, integrated REST APIs, incorporated Facebook and Google authentication, deployed the application on Firebase, and leveraged AWS services such as S3 and EC2..",
        "Continuous learning and improvement through self-driven exploration of new tools and technologies."
      ],
    },
    {
      title: "SDE-I",
      company_name: "Ongraph Technologies -  Remote",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "March 2020 - Oct 2021",
      points: [
        "Implemented tree shaking concept for importing modules which results in reducing approx 10% of overall size of application bundle.",
        "Maintained version control using Git, ensuring collaboration and codebase integrity.",
        "Developed a loan algorithm for a fintech product, smoothly integrated third-party APIs, and utilized Redux for effective state management.",
        "Worked on a react-konva canvas app with advanced undo/redo using a custom memoization algorithm. Implemented a robust feature for precise coordination maintenance on the canvas.",
        "Troubleshooting and debugging issues to improve the overall performance of the applications."
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Publicis Sapient - Remote",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
      points: [
        "Optimized application performance with code splitting and lazy loading in Next.js, leveraging the Intersection Observer API, resulting in an approximate 200ms reduction in load time.",
        "Improved the caching mechanism of data fetching by incorporating GraphQL as a query language. Worked on ATOMIC design pattern to improve code modularity in a monolithic application.",
        "Enhanced accessibility, authored tests for the app using Jest and React Testing Library, and increased its speed by resolving code smells.",
        "Developed the login with OTP module in React.js utilizing input refs, refactored the primary component logic of the application to incorporate debounced search functionality.",
        "Conducted a POC for list virtualization to efficiently display content lists and explored different ways to optimize images with lazy loading, using webp format."
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
      name: "Sketchbook",
      description:
      "An online drawing tool where you can create art using various tools and download your work. It also lets you share your drawings with others using WebSocket.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: sketchbook,
      hosted_link: 'https://sketchbook-omega.vercel.app/',
      source_code_link: "https://github.com/manishnandwani/sketchbook",
    },
    {
      name: "Text to speech",
      description:
      "A web application that accepts either your spoken input or text input and then offers the option to read it out loud using various voices, pitch, and speed settings.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: textToSpeech,
      hosted_link: 'https://manishnandwani.github.io/Voice-text-to-speach/',
      source_code_link: "https://github.com/manishnandwani/Voice-text-to-speach",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };