export const siteConfig = {
  name: "Benjamin Thomas",
  title: "Undergradute Senior @ University of Maryland - College Park",
  description: "Portfolio website of Benjamin Thomas",
  accentColor: "#1d4ed8",
  social: {
    email: "benluthomas@gmail.com",
    linkedin: "https://linkedin.com/in/bthomas04",
    github: "https://github.com/bthomas279",
  },
  aboutMe:
    "I'm an Information Science major with a focus in AI/ML and software development. I learn by building - turning ideas into tools others can use. I gravitate toward personal projects because they allow me to solve problems I care about while pushing me beyond my current knowledge level. Whether it's fine-tuning a transformer model, developing full stack applications, or architecting a browser extension from scratch, I approach every challenge with perseverance and resilience. I'm actively seeking internship opportunities and entry level positions where I can learn from experienced professionals and keep building things that matter.",
  skills: ["Python", "JavaScript/TypeScript", "SQL", "PyTorch", "Transformers", "Scikit-learn", "NumPy", "Tensorflow", "Trainer API", "Transformers.js", "Hugging Face", "FastAPI", "Gemini API", "Node.js", "React.js", "MV3", "Vite"],
  projects: [
    {
      name: "Investi-gator Extension (in development)",
      description:
        "An Edge/Chrome extension that helps users take back control of their social media experiences. Will passively detect if posts on social media platforms contain AI images/text, were posted by bots or is a likely scam when users scroll.",
      link: "https://bthomas279.github.io/investi-gator-doc/",
      skills: ["PyTorch", "TypeScript", "React.js", "Transformers", "Trainer API", "Scikit-learn", "Hugging Face", "Gemini API", "Pandas", "NumPy", "MV3", "Vite"],
    },
    {
      name: "Student Mental Health Scoring System",
      description:
        "A full-stack mental health rating system that helps users keep track of their mental health and habits. Generates mental health ratings based on user-submitted habit data, and provides user-tailored visualizations.",
      link: "https://github.com/bthomas279/health-rating-app",
      skills: ["Node.js", "Python", "JavaScript", "Scikit-learn", "SQL", "Pandas", "NumPy", "REST APIs", "Normalization", "Matplotlib"],
    },
    {
      name: "GroupMe Scam Bot Detector",
      description:
        "A scam detector bot that flags high-risk messages with 98% accuracy, and sends automated alerts to admins and chat members.",
      link: "",
      skills: ["Python", "Flask", "Scikit-learn", "Matplotlib", "Supervised Learning"],
    },
  ],
  experience: [
    {
      company: "Terp Welcome Crew",
      title: "Student Volunteer",
      dateRange: "August 2025",
      bullets: [
        "Assisted new students and families with moving into their dorms.",
        "Answered general knowledge questions about the move-in process.",
      ],
    },
    {
      company: "Howard County Recreation & Parks",
      title: "Inclusion Companion",
      dateRange: "June 2024 - Aug 2025",
      bullets: [
        "Actively supervised campers with disabilities to foster inclusive environments in summer camps.",
        "Coordinated with leadership to enhance participation through activity modifications tailored to camper needs.",
        "Maintained safety and adherence to duties: set-up, managing activities, and enforcing protocols.",
      ],
    },
    {
      company: "Merriweather Post Pavillion",
      title: "Seasonal Event Staff",
      dateRange: "June 2023 - August 2024",
      bullets: [
        "Scanned tickets, checked bags, and screened patrons at venue points of entry.",
      ],
    },
  ],
  education: [
    {
      school: "University of Maryland - College Park",
      degree: "Bachelor of Science in Information Science",
      dateRange: "2023 - 2027",
      achievements: [
        "GPA: 3.235",
        "Dean's List: Spring 2025, Spring 2026",
        "Student Orgs: Campus Coder Crew, Code: Black",
      ],
    },
    {
      school: "Coursera | DeepLearning.AI | Standford Online",
      degree: "Machine Learning Specialization",
      dateRange: "2025",
      achievements: [
        "Completed 95+ hours of coursework",
        "Topics: Supervised Learning, Unsupervised Learning, Recommender Systems, Reinforcement Learning, Neural Networks, Decision Trees",
      ],
    },
  ],
};
