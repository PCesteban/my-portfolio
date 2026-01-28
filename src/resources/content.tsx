import { About, Activities, Blog, Gallery, Home, Music, Newsletter, Person, Publications, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Esteban",
  lastName: "Payares",
  name: "Esteban Payares",
  role: "Quantum Learning Theory Researcher",
  avatar: "/images/esteban-profile.png",
  email: "estebandpc@outlook.com",
  location: "Europe/Paris",
  languages: ["Spanish (Native)", "English (C1)", "French (A2)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on quantum computing and machine learning research</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PCesteban",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/esteban-pc",
    essential: true,
  },
  {
    name: "Google Scholar",
    icon: "scholar",
    link: "https://scholar.google.com/citations?user=ugNHJsAAAAAJ&hl=es",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Quantum Learning Theory | Mathematical Physics`,
  description: `Portfolio of ${person.name}, ${person.role}`,
  headline: <>Quantum Learning Theory | Mathematical Physics</>,
  featured: {
    display: false,
    title: <>Featured</>,
    href: "/projects",
  },
  subline: (
    <>
      I'm Esteban, a Quantum Algorithm Engineer at <Text as="span" size="xl" weight="strong">IQM</Text> focused on quantum machine learning and its applications in real world and foundational Physics problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Esteban is a quantum algorithm engineer with a background in applying quantum computing
        techniques to cybersecurity and natural language processing. His earlier research focused on developing
        quantum algorithms for intrusion detection, DDoS attack classification, and NLP tasks. More recently,
        his interests have shifted toward deeper questions in quantum learning theory, foundational physics problems,
        and quantum neuromorphic computing.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IQM Quantum Computers",
        timeframe: "Feb 2025 – Present",
        role: "Quantum Machine Learning Intern",
        achievements: [
          <>Researching quantum kernel methods and projected quantum kernels in practical applications.</>,
          <>Developing a quantum kernel method framework.</>,
        ],
        images: [],
      },
      {
        company: "CNRS, Laboratoire de Physique des Solides",
        timeframe: "May 2024 – Aug 2024",
        role: "Research Intern",
        achievements: [
          <>Conducted research on spiking neural networks in solid state and neuromorphic computing.</>,
        ],
        images: [],
      },
      {
        company: "Ormuco Inc.",
        timeframe: "Feb 2022 – Aug 2024",
        role: "DevOps Engineer",
        achievements: [
          <>Implemented CI/CD pipelines and infrastructure automation.</>,
          <>Managed cloud infrastructure and deployment processes.</>,
        ],
        images: [],
      },
      {
        company: "Universidad Tecnológica de Bolívar",
        timeframe: "Jan 2021 – Aug 2023",
        role: "Research Assistant",
        achievements: [
          <>Published research on quantum machine learning for cybersecurity applications.</>,
          <>Contributed to research on blockchain and microgrid power distribution.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Université Paris-Saclay (2023 – 2025)",
        description: <>Master of Science (MSc.) in Quantum & Distributed Computer Science</>,
      },
      {
        name: "Universidad Tecnológica de Bolívar (2016 – 2021)",
        description: <>Bachelor of Engineering (BE) in Electronic Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Quantum Computing",
        description: (
          <>Experienced with quantum algorithms, variational circuits, and quantum machine learning frameworks.</>
        ),
        tags: [
          { name: "Qiskit" },
          { name: "Pennylane" },
          { name: "Cirq" },
        ],
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: (
          <>Building and deploying ML models for classification, NLP, and cybersecurity applications.</>
        ),
        tags: [
          { name: "Python" },
          { name: "TensorFlow" },
          { name: "PyTorch" },
          { name: "Scikit-learn" },
        ],
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: (
          <>Infrastructure automation, CI/CD, and cloud platform management.</>
        ),
        tags: [
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "AWS" },
          { name: "GitLab CI" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog – Esteban Payares",
  description: `Thoughts on quantum computing, machine learning, and research`,
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Research and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/photo-01.jpeg", alt: "Photo 1", orientation: "vertical" },
    { src: "/images/gallery/photo-02.jpeg", alt: "Photo 2", orientation: "vertical" },
    { src: "/images/gallery/photo-03.jpeg", alt: "Photo 3", orientation: "vertical" },
    { src: "/images/gallery/photo-04.jpeg", alt: "Photo 4", orientation: "vertical" },
    { src: "/images/gallery/photo-05.jpeg", alt: "Photo 5", orientation: "vertical" },
    { src: "/images/gallery/photo-06.jpeg", alt: "Photo 6", orientation: "vertical" },
    { src: "/images/gallery/photo-07.jpeg", alt: "Photo 7", orientation: "vertical" },
    { src: "/images/gallery/photo-08.jpeg", alt: "Photo 8", orientation: "vertical" },
    { src: "/images/gallery/photo-09.jpeg", alt: "Photo 9", orientation: "vertical" },
    { src: "/images/gallery/photo-10.jpeg", alt: "Photo 10", orientation: "vertical" },
  ],
};

const publications: Publications = {
  path: "/publications",
  label: "Publications",
  title: `Publications – ${person.name}`,
  description: `Academic publications by ${person.name}`,
  items: [
    {
      title: "Quantum machine learning for intrusion detection of distributed denial of service attacks: A comparative overview",
      type: "conference",
      venue: "Quantum Computing, Communication, and Simulation, SPIE",
      year: "2021",
      doi: "https://doi.org/10.1117/12.2593297",
      authors: ["E. Payares", "J. C. Martinez-Santos"],
    },
    {
      title: "Advancements in quantum machine learning for intrusion detection: A comprehensive overview",
      type: "book-chapter",
      venue: "Advances in Digital Crime, Forensics, and Cyber Terrorism, IGI Global",
      year: "2023",
      doi: "https://doi.org/10.4018/978-1-6684-8422-7.ch009",
      authors: ["E. Payares", "J. C. Martinez-Santos"],
    },
    {
      title: "Team QTB on Feature Selection Via Quantum Annealing and Hybrid Models",
      type: "conference",
      venue: "Working Notes of the Conference and Labs of the Evaluation Forum (CLEF 2024), Grenoble, France",
      year: "2024",
      authors: ["E. Payares", "E. Puertas", "J. C. Martinez-Santos"],
    },
    {
      title: "The enhancement of quantum machine learning models via quantum Fourier transform in near-term applications",
      type: "conference",
      venue: "AIP Conference Proceedings",
      year: "2023",
      doi: "https://doi.org/10.1063/5.0163355",
      authors: ["E. Payares", "J. C. Martínez"],
    },
    {
      title: "Quantum n-gram language models for tweet classification",
      type: "conference",
      venue: "2023 IEEE 5th International Conference on Cognitive Machine Intelligence (CogMI)",
      year: "2023",
      doi: "https://doi.org/10.1109/CogMI58952.2023.00019",
      authors: ["E. Payares", "E. Puertas", "J. C. Martinez-Santos"],
    },
    {
      title: "Parallel quantum computation approach for quantum deep learning and classical-quantum models",
      type: "conference",
      venue: "IOP Conference Series: Journal of Physics",
      year: "2021",
      doi: "https://doi.org/10.1088/1742-6596/2090/1/012171",
      authors: ["E. Payares", "J. Martinez-Santos"],
    },

  ],
};

const music: Music = {
  path: "/music",
  label: "Music",
  title: `Music – ${person.name}`,
  description: `Music projects by ${person.name}`,
};

const activities: Activities = {
  path: "/activities",
  label: "Activities",
  title: `Activities – ${person.name}`,
  description: `Competitions, certifications, and community involvement by ${person.name}`,
  openSource: {
    display: true,
    title: "Open Source Contributions",
    items: [
      {
        title: "Create a PyTorch simulator (Pull request #1360)",
        description: "Creation of a quantum simulator to allow all quantum operations and measurements to be performed within the PyTorch workflow.",
        year: "2021",
        link: "https://github.com/PennyLaneAI/pennylane/pull/1360",
      },
    ],
  },
  competitions: {
    display: true,
    title: "Quantum Programming Competitions",
    items: [
      { name: "iQuHACK", organizer: "Massachusetts Institute of Technology", year: "2023" },
      { name: "PennyLane Code Camp", organizer: "Xanadu Quantum Technologies", year: "2022" },
      { name: "HAQS", organizer: "qBraid", year: "2022" },
      { name: "iQuHACK", organizer: "Massachusetts Institute of Technology", year: "2022" },
      { name: "QC Hack", organizer: "Quantum Coalition", year: "2021" },
      { name: "UnitaryHack", organizer: "Unitary Fund", year: "2021" },
      { name: "Qhack", organizer: "Xanadu Quantum Technologies", year: "2021" },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      { name: "Quantum Excellence at Qiskit Global Summer School on Quantum Machine Learning", issuer: "IBM", year: "2021" },
      { name: "Introduction to Quantum Computing", issuer: "The Coding School", year: "2021" },
      { name: "Applied Data Science with Python (Specialization)", issuer: "Coursera", year: "2020" },
      { name: "Open Source Software Development, Linux and Git (Specialization)", issuer: "Coursera", year: "2020" },
    ],
  },
  extracurriculars: {
    display: false,
    title: "",
    items: [],
  },
};

export { person, social, newsletter, home, about, blog, work, gallery, publications, music, activities };
