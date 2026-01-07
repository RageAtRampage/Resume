import { Profile, Experience, Project, SkillCategory, Education, Publication, Award } from './types';

export const PROFILE: Profile = {
  name: "Mihul Singh Solanki",
  title: "Senior Software Developer",
  location: "Bangalore, Karnataka, India",
  email: "mihulsolanki1998@gmail.com",
  phone: "",
  summary: "I’m a backend engineer with 5+ years of experience building scalable, reliable, and sometimes surprisingly smart systems. I enjoy turning complex business problems into clean microservices—and occasionally teaching machines how to talk back.",
  resumeUrl: "/Mihul_Singh_Solanki_Resume.pdf",
  social: {
    linkedin: "https://in.linkedin.com/in/mihul-singh-solanki-a74594178/",
    github: "https://github.com/RageAtRampage",
    website: "https://rageatrampage.github.io/Resume/"
  }
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Kapture CRM",
    role: "Senior Software Developer",
    location: "Bangalore, India",
    period: "June 2022 - Present",
    achievements: [
      "Designed and implemented a drag-and-drop flow designer for task automation, empowering non-technical users and reducing development complexity.",
      "Launched an advanced chatbot service automating ticket resolution, achieving a 35% reduction in average response time.",
      "Implemented an advanced scheduling system for automatic task execution, minimizing human error and streamlining processing.",
      "Developed a novel indexing system enhancing search efficiency, resulting in a 40% reduction in search time.",
      "Optimized ticketing system bot for Facebook Messenger and WhatsApp, handling up to 200 inquiries per minute.",
      "Engineered seamless integrations with Shopify and Magento, enhancing after-sales processes.",
      "Spearheaded development of action, configuration, and search microservices, improving uptime to 99.95%."
    ]
  },
  {
    company: "Kapture CRM",
    role: "Software Developer",
    location: "Bangalore, India",
    period: "May 2021 - June 2022",
    achievements: [
      "Initiated design processes for comprehensive APIs within shared libraries, enhancing software performance.",
      "Integrated ticketing infrastructure with email reading microservice, curtailing 20% of support requests through automation.",
      "Designed an automated system for generating tickets from 18+ different sources including social media.",
      "Orchestrated scalable system notification architecture with Firebase, increasing delivery success rate by 9%.",
      "Executed comprehensive manual testing protocols on over twenty microservices during deployments."
    ]
  },
  {
    company: "SenSen Networks",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "August 2020 - April 2021",
    achievements: [
      "Fortified the SenDISA platform through aggressive debugging and integrating modern features, bolstering test coverage by 5%.",
      "Spearheaded story grooming sessions with business and research teams, leading to a 20% decrease in scope creep."
    ]
  },
  {
    company: "Opentext",
    role: "Software Engineering Intern",
    location: "Bangalore, India",
    period: "January 2020 - August 2020",
    achievements: [
      "Fabricated 5+ REST API connectors utilizing Python, resulting in a 20% decrease in manual data entry.",
      "Authored OpenAPI specifications for 7+ REST API endpoints, enhancing API discoverability.",
      "Developed efficient automation protocols streamlining testing workflows."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IOT HUB",
    description: "Implemented a server to store data from IOT Devices and show the relevant data in a dashboard for analysis.",
    tech: ["Java", "Spring", "Hibernate", "PostgreSQL"],
    period: "July 2020 - August 2020"
  },
  {
    title: "Generative Chatbot System",
    description: "Implemented a hierarchical encoder-decoder approach for generating natural language on the basis of user input.",
    tech: ["Python", "Keras", "Tensorflow"],
    period: "Dec 2019 - Mar 2020"
  },
  {
    title: "Discussion Forum",
    description: "A website where users can post questions, answer, and comment on other people's questions.",
    tech: ["HTML", "CSS", "MySQL", "PHP"],
    period: "Feb 2019 - Mar 2019"
  },
  {
    title: "Genetic Algorithm Path Finder",
    description: "Simulation of finding a shortest path in unknown environments (source to target) using Genetic Algorithm.",
    tech: ["Python"],
    period: "July 2018 - Sep 2018"
  },
  {
    title: "IOT Washing Machine",
    description: "Customized a washing machine with a bad logic board using an ESP32 to implement functionality + mobile notifications.",
    tech: ["C", "ESP32", "IOT"],
    period: "Feb 2018"
  },
  {
    title: "IOT Farming Center",
    description: "Data collection and farm maintenance system using Thingspeak/Twilio APIs. Raspberry Pi master and Arduino slave.",
    tech: ["Python", "C++", "Raspberry Pi", "Arduino"],
    period: "Jan 2018"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core",
    items: ["Java", "Python", "SQL", "NoSQL", "Bash", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate ORM", "Spring Cloud"]
  },
  {
    category: "Distributed Systems & Data",
    items: ["Microservices", "Apache Kafka", "Redis", "Elasticsearch", "ActiveMQ", "REST APIs"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "GCP", "Git", "SVN", "Zuul", "Eureka"]
  }
];

export const EDUCATION: Education = {
  institution: "SRM Institute of Science and Technology",
  location: "Chennai, India",
  degree: "Bachelor of Technology",
  major: "Computer Science and Engineering",
  period: "July 2016 - May 2020",
  percentage: "80%"
};

export const PUBLICATION: Publication = {
  title: "Emotion Driven Chatbot Using Natural Language Generation Techniques",
  authors: "M. S. Solanki, L. Singh Panwar, S. Saminathan and C. Malathy",
  conference: "2022 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)",
  year: "2022",
  doi: "10.1109/ICSES55317.2022.9914235",
  abstract: "Proposed a divide and conquer approach in chatbot architecture to make it emotionally and contextually aware using a sequence-to-sequence model.",
  link: "https://ieeexplore.ieee.org/document/9914235"
};

export const AWARDS: Award[] = [
  { title: "Machine Learning and Science Application", issuer: "NPTEL" },
  { title: "Artificial Intelligence: Search methods", issuer: "NPTEL" },
  { title: "Certified RHCSA", issuer: "Redhat" },
  { title: "Internet of Things", issuer: "HP" },
  { title: "Web Development", issuer: "Internshala" },
  { title: "Kaizen Robotics Program", issuer: "IIT Madras" }
];