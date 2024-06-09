/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sivaraj P",
  logo_name: "<Sivaraj P/>",
  nickname: "hrishi1999 / picleric",
  full_name: "Sivaraj Paldurai",
  subTitle: "Backend Developer, Full Stack Enthusiast.",
  resumeLink: "",
  mail: "mailto:sivarajpauldurai@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Sivaraj-P",
  linkedin: "https://www.linkedin.com/in/sivarajpaldurai/",
  gmail: "sivarajpauldurai@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/sivaraj._/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and UI libraries",
        "⚡ Building REST API's and Backend development using Django and FastApi",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3775A8",
          },
        },

        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Fast Api",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#059487",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const work_exp = {
  work_exp: [
    {
      title: "The Zigma Technologies India (P) Limited",
      subtitle: "Project Associate",
      logo_path: "zigma.jpg",
      alt_name: "zigma",
      duration: "July 2023 - Present",
      descriptions: [
        "⚡ Developed a RESTful API using Django Rest Framework, incorporating JWT sessions to ensure secure user authentication and authorization for API requests.",
        "⚡ Optimized API response times by streamlining loop structures, refining database queries, and implementedthreading for concurrent tasks, resulting in significantly reduced latency and enhanced overall system performance.",
        "⚡ Implemented advanced facial recognition capabilities through API by utilizing OpenCV and face recognition library to detect and recognize the faces.",
        "⚡ Developed a FastApi microservice application featuring an abstract database model to ensure compatibility with any cloud databases, and successfully deployed the solution using Docker, enhancing flexibility and scalability.",
        "⚡ Collaborated with frontend and QA teams to facilitate the seamless integration of backend services and maximizing product quality and performance.",
      ],
      website_link: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Masters in Applied Computer Science",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "SAL Engineering and Technical Institute",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sal.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "Experienced in diverse technologies, I excel in problem-solving, navigating complexities with ease. My enthusiasm for continuous learning and adaptability to evolving tech landscapes. Committed to innovation, I prioritize delivering high-quality solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "IT Developer",
          company: "Canada Revenue Agency",
          company_url: "https://www.canada.ca/en/revenue-agency.html",
          logo_path: "cra.png",
          duration: "May 2023 - Ongoing",
          location: "Halifax, Nova Scotia",
          description:
            "Canada Revenue Agency (CRA) administers tax laws for the Government of Canada and for most provinces and territories, and administers various social and economic benefit and incentive programs delivered through the tax system.",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Quicko",
          company_url: "https://quicko.com/",
          logo_path: "quicko.jpg",
          duration: "June 2021 - October 2021",
          location: "Ahmedabad",
          description:
            "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Google Summer of Code",
          company: "Sugar Labs",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Work From Home",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        {
          title: "Android App Developer Intern",
          company: "IAS4Sure",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "December 2019 - February 2020",
          location: "Work From Home",
          description:
            "Internship task was to make a native Android application. ",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "Wrighter Writing Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "August 2020",
          location: "",
          description: "Develop a website using PHP and jQuery.",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "VJ TechServe",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "September 2020",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Summer of Code Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Google Code-In Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Winter of 2017 / 18 / 19",
          location: " ",
          description:
            "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
          color: "#D83B01",
        },
        {
          title: "Board Member at Codeuino",
          company: " ",
          company_url: " ",
          logo_path: "codeuino.jpg",
          duration: "2018 - 2019",
          location: " ",
          description: "Previous Board during early days of Codeuino",
          color: "#D83B01",
        },
        {
          title: "BluWings Club",
          company: " ",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - On Going",
          location: " ",
          description:
            "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I am a proficient and skilled individual who has gained extensive knowledge and practical experience in developing projects. With a hands-on approach, I have successfully navigated through various technology stacks, showcasing my expertise in both frontend and backend development.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sivaraj.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Green City",
      url: "https://sivarajpaldurai.pythonanywhere.com/",
      description:
        "The webpage efficiently addresses the complaints registered by users It provides a quick and easy way for citizens to report their concerns and ensures timely resolution of the same.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "SQLite",
          iconifyClass: "devicon-sqlite",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },

    {
      name: "Sky Watch",
      url: "https://skywatch.pythonanywhere.com/",
      description:
        "Sky Watch is a sleek and user-friendly weather web app that utilizes the Open Weather API to provide real-time data. The user can also search their desired city and get its weather report.        ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      name: "Rathna Store",
      url: "https://rathna-store.vercel.app",
      description:
        " A full stack grocery web application featuring add-to-cart functionality, Razorpay payment integration and automated email system.",

      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "SQLite",
          iconifyClass: "devicon-sqlite",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://github.com/Sivaraj-P",
      description:
        "The highly customizable portfolio project. Where you have full control to showcase your skills and experience through  design elements and content. ",

      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  work_exp,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
