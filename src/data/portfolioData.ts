import { Project, Experience, Leadership, ResearchPaper, SkillCategory, Service, Achievement, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ajitesh Sinha",
  title: "Flutter Developer & Full-Stack Engineer",
  roles: [
    "Flutter Developer",
    "Mobile Application Developer",
    "Backend Developer",
    "AI Enthusiast",
    "Computer Science Engineering Student"
  ],
  contact: {
    email: "ajiteshsinha2004@gmail.com",
    phone: "+91 6387643564",
    location: "Greater Noida, Uttar Pradesh, India",
    coordinates: "28.6139°N 77.2090°E",
    linkedin: "https://www.linkedin.com/in/ajitesh-sinha-501124295/",
    github: "https://github.com/AjiteshSinha17",
    portfolio: "https://ajitesh-sinha.vercel.app/"
  },
  education: {
    college: "Greater Noida College",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science Engineering",
    location: "Greater Noida, Uttar Pradesh",
    graduation: "Expected May 2027"
  },
  hero: {
    headline: "Flutter Developer & Systems Engineer",
    tagline: "Architecting high-performance cross-platform mobile apps, scalable backends, and AI integrations.",
    shortIntro: "I am a Computer Science Engineering student specializing in building production-ready Flutter applications, robust REST APIs, and AI-driven solutions.",
    summary: "As a dedicated Flutter Developer with experience across 3 software development internships, I bridge the gap between clean, responsive mobile frontends and low-latency backend architectures. My technical stack spans Flutter, Dart, Node.js, Go, Python, and Firebase. Having published research in ISCJ and led technical teams as Club President, I focus on building maintainable, high-impact software that solves real-world problems.",
    currentStatus: "OPERATIONAL // Available for Flutter & Software Engineering Internships / Roles",
    careerObjective: "To contribute to engineering teams by architecting responsive Flutter mobile apps, high-throughput API services, and intelligent AI features while continuously advancing my backend and systems knowledge."
  }
};

export const ABOUT_ME = {
  journey: "My journey into software engineering began with a curiosity about how mobile applications seamless deliver complex data across devices. Studying Computer Science Engineering at Greater Noida College provided me with strong core fundamentals in Data Structures, Object-Oriented Programming, and Database Systems, which I immediately applied to hands-on software development.",
  whyFlutter: "I chose Flutter because of its expressive UI engine, reactive architecture, single-codebase efficiency across iOS and Android, and compile-to-native performance. It allows me to transform complex ideas into fluid user experiences without compromising speed or system efficiency.",
  scalableMobile: "Building mobile apps isn't just about crafting visually appealing screens; it's about optimizing widget rebuilds, managing complex application states reliably, ensuring smooth offline caching, and orchestrating low-latency API handshakes.",
  backendAndAI: "My passion extends beyond the client side. I actively design RESTful APIs, manage databases (Firestore, PostgreSQL, SQLite), and integrate Artificial Intelligence models (Gemini API, OpenAI SDK, OpenCV, Computer Vision). Combining Flutter with intelligent backends allows me to build complete, end-to-end digital solutions.",
  corePhilosophy: [
    "Clean Architecture & SOLID principles to ensure code bases stay maintainable as teams grow.",
    "Data-driven state management (Provider, Riverpod, Bloc) for deterministic app states.",
    "Empathetic team collaboration through Git, rigorous code reviews, and technical mentorship.",
    "Continuous learning mindset—regularly exploring Go backend frameworks, cloud architectures, and machine learning."
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "GreenCreon LLP",
    role: "Flutter Developer Intern",
    period: "Internship Engagement",
    location: "Remote / Greater Noida",
    overview: "GreenCreon LLP is an innovative technology venture focusing on digital workflow management and enterprise solution delivery.",
    responsibilities: [
      "Engineered cross-platform mobile interface components using Flutter and Dart, ensuring smooth 60fps animations.",
      "Integrated RESTful APIs and optimized JSON payload serialization for low-latency network responses.",
      "Implemented Firebase Authentication, Firestore real-time listeners, and Cloud Storage protocols.",
      "Refactored monolithic widgets into reusable modular components following Clean Architecture guidelines.",
      "Diagnosed and resolved memory leaks, layout overflows, and state synchronization bugs during QA testing.",
      "Collaborated with cross-functional teams via Git branching, pull requests, and daily standups."
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase", "Firestore", "Git", "State Management"],
    contributions: [
      "Reduced screen render latencies through targeted widget rebuilding strategies.",
      "Delivered robust authentication and data syncing modules for production builds."
    ],
    skillsGained: ["Production Flutter Architecture", "REST API Integration", "Firebase Ecosystem", "Git Collaboration"]
  },
  {
    id: "exp-2",
    company: "SOS42",
    role: "Flutter Developer Intern",
    period: "Internship Engagement",
    location: "Remote",
    overview: "SOS42 is a modern technology startup building client-facing mobile platforms with real-time tracking and response mechanisms.",
    responsibilities: [
      "Developed core client-facing features adhering strictly to Clean Architecture and SOLID design principles.",
      "Implemented structured state management patterns to maintain predictable application behavior across app flows.",
      "Connected client screens with backend REST endpoints for dynamic data fetching, caching, and error handling.",
      "Executed unit testing and bug fixing to improve crash-free user session ratios.",
      "Optimized app launch time and asset bundle sizing for smooth performance on low-end hardware.",
      "Engaged in technical sprint planning, code reviews, and task estimation with engineering leads."
    ],
    technologies: ["Flutter", "Dart", "Clean Architecture", "State Management", "REST APIs", "Debugging"],
    contributions: [
      "Refactored complex UI flows into deterministic state machines.",
      "Improved overall UI responsiveness and reduced network failure rates with offline retry handlers."
    ],
    skillsGained: ["Clean Architecture Pattern", "Deterministic State Handling", "Performance Optimization"]
  },
  {
    id: "exp-3",
    company: "Talking Crooks",
    role: "Flutter Developer Intern",
    period: "Internship Engagement",
    location: "Remote",
    overview: "Talking Crooks is a digital media and mobile product studio creating interactive content-driven applications.",
    responsibilities: [
      "Engineered responsive user interfaces from Figma design wireframes using Flutter material and custom canvas components.",
      "Integrated RESTful HTTP protocols for fetching audio/visual media feeds and user activity streams.",
      "Managed local storage state using shared preferences and SQLite for fast offline access.",
      "Participated in peer code reviews to ensure code cleanlines and standard naming conventions.",
      "Identified and patched UI layout defects across various screen sizes and device pixel densities.",
      "Maintained version control workflows using GitHub for seamless release candidate testing."
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Figma to Code", "Git", "Code Review"],
    contributions: [
      "Delivered pixel-perfect mobile layouts aligned with designer spec sheets.",
      "Maintained documentation for state flows and backend API contract integrations."
    ],
    skillsGained: ["Figma UI Implementation", "Offline Caching", "Peer Code Review Workflows"]
  }
];

export const LEADERSHIP: Leadership[] = [
  {
    id: "lead-1",
    title: "Technical Club President",
    organization: "Greater Noida College Technical Society",
    period: "2024 - Present",
    responsibilities: [
      "Led the college technical society, managing a core committee of 25+ student organizers and 100+ active student members.",
      "Conceptualized, organized, and executed campus-wide Hackathons and Ideathons with 300+ total student participants.",
      "Spearheaded technical workshops on Flutter Development, Git/GitHub fundamentals, and Artificial Intelligence introduction.",
      "Managed event budgets, logistics, industry sponsor outreach, and mentorship panel scheduling.",
      "Fostered an inclusive developer community encouraging junior students to build real-world software projects."
    ],
    highlights: [
      "Organized 2 flagship hackathons with industry mentors.",
      "Mentored over 50+ students in mobile app development and Git version control."
    ]
  },
  {
    id: "lead-2",
    title: "PTEMS Conference Coordinator",
    organization: "National Conference on Progress in Technology, Engineering & Management Science",
    period: "Coordinator Role",
    responsibilities: [
      "Coordinated technical sessions, research paper review tracks, and delegate hospitality for the PTEMS conference.",
      "Managed student volunteer teams handling registration desk operations, presentation hardware, and live broadcasting.",
      "Communicated with guest speakers, academic faculty, and research paper authors to ensure seamless schedule execution.",
      "Facilitated technical QA sessions and publication certificate distribution."
    ],
    highlights: [
      "Successfully managed conference logistics for 150+ academic paper presenters and keynote delegates."
    ]
  }
];

export const RESEARCH_DATA: ResearchPaper = {
  title: "ClgZone: A Unified Digital Ecosystem for Campus Community Networking & Academic Synchronization",
  publication: "International Study of Computer Science Journals (ISCJ)",
  publicationDate: "Academic Research Track",
  researchObjective: "To design, develop, and evaluate a centralized, mobile-first academic and community ecosystem that resolves campus communication fragmentation, resource sharing bottlenecks, and peer discovery in higher education institutions.",
  problemStatement: "Higher education campuses frequently suffer from fragmented communication channels (disjointed group chats, unverified notices), inefficient academic material distribution, and disconnected roommate/peer discovery platforms, leading to information loss and poor student engagement.",
  technologies: ["Flutter", "Dart", "Firebase Firestore", "Firebase Authentication", "Cloudinary", "REST APIs"],
  methodology: "The project adopted an Agile architectural framework with Flutter cross-platform mobile frontend and Firebase reactive cloud backend. User authentication ensures institutional email verification. Cloudinary stores academic documents securely while Firestore provides real-time chat and post synchronization.",
  results: "The ClgZone architecture successfully demonstrated real-time message latency under 100ms, seamless PDF resource previews, and secure peer discovery algorithms. Tested among campus focus groups, it showed a 75% reduction in information lookup time compared to traditional message boards.",
  learningOutcomes: [
    "Deep understanding of real-time database indexing and query optimization in Firestore.",
    "Cross-platform state handling and media streaming optimization in Flutter.",
    "Structuring academic research documentation according to international journal peer-review standards."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    modNumber: "MOD-01",
    title: "ClgZone",
    subtitle: "Student Networking & Academic Synchronization Platform",
    status: "DEPLOYED // PRODUCTION",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Auth", "Cloudinary", "REST APIs"],
    description: "A comprehensive student networking and academic platform connecting college students through community features, academic resource sharing, verified authentication, roommate discovery, and real-time chat.",
    overview: "ClgZone is a production-grade campus platform engineered to unite academic resources, student discussions, event announcements, and peer networking into a single unified mobile application.",
    problemStatement: "Students struggle with fragmented college communication, lost assignment notes, untrusted roommate listings, and disconnected social groups spread across multiple unorganized chat apps.",
    solution: "ClgZone solves campus fragmentation by offering verified student accounts, categorized resource repositories (notes, question banks), verified roommate search filters, and instant real-time community channels.",
    features: [
      "Institutional Email & Firebase Authentication with passwordless verification.",
      "Academic Repository: Upload, search, and download study notes, PDFs, and PYQs.",
      "Roommate & Flatmate Discovery with custom preference tags (location, budget, habits).",
      "Real-time One-on-One and Group Messaging powered by Firestore streams.",
      "Media and document handling integrated with Cloudinary CDN for fast delivery.",
      "Dark and Light visual themes with smooth Flutter micro-interactions."
    ],
    architecture: "MVVM with Provider state management. Clean separation between Data Layer (Firebase SDK / REST HTTP clients), Repository Layer, and UI Presentation Widgets.",
    challenges: "Handling large PDF/image uploads on slow mobile connections while keeping the UI responsive and avoiding memory overload on budget smartphones.",
    keyLearnings: "Mastered background isolate processing in Dart, optimized Firestore rule security, and implemented local SQLite caching for offline document viewing.",
    futureImprovements: [
      "AI-driven note summarization using Gemini API.",
      "In-app event ticketing and attendance QR scanner."
    ],
    githubUrl: "https://github.com/AjiteshSinha17/clg",
    metricsLabel: "BUILD_VER",
    metricsValue: "2.0.4",
    iconName: "Cpu"
  },
  {
    id: "proj-2",
    modNumber: "MOD-02",
    title: "Lucid AI",
    subtitle: "AI-Powered Learning Roadmap & Curriculum Chatbot",
    status: "ACTIVE_PROCESSING // AI",
    tech: ["Flutter", "Dart", "Gemini API", "OpenAI SDK", "Node.js", "Vector DB"],
    description: "An intelligent AI assistant that generates personalized learning roadmaps, curates study materials, tests user comprehension, and provides step-by-step guidance for complex tech topics.",
    overview: "Lucid AI acts as a 24/7 personalized tutor for computer science and engineering topics. Users enter a target skill (e.g., 'Master Go Fiber in 4 weeks') and receive structured milestones, interactive quizzes, and resource links.",
    problemStatement: "Self-learners waste hours sifting through disorganized YouTube playlists, outdated blog posts, and conflicting advice when trying to learn new programming frameworks.",
    solution: "Lucid AI leverages Large Language Models to generate structured, step-by-step learning roadmaps with interactive progress checkpoints, curated documentation, and automated quiz evaluation.",
    features: [
      "Dynamic Learning Roadmap Generation with customized difficulty levels.",
      "Interactive AI Chat interface with code syntax highlighting and markdown rendering.",
      "Knowledge Checkpoint Quizzes auto-generated from user roadmap milestones.",
      "Bookmarkable study paths and progress tracking with completion percentage metrics.",
      "Custom system prompts ensuring pedagogically sound and hallucination-free guidance."
    ],
    architecture: "Client-side Flutter interface connecting to a Node.js Express backend proxying Gemini API requests securely to safeguard secret credentials.",
    challenges: "Handling streaming model responses gracefully in Flutter text controls while preserving Markdown formatting and code block formatting in real-time.",
    keyLearnings: "Implemented Server-Sent Events (SSE) parsing in Dart, optimized prompt engineering for structured JSON schemas, and enforced server-side key security.",
    futureImprovements: [
      "Voice-guided AI interaction using Gemini Live API.",
      "PDF textbook upload for RAG-based AI Q&A."
    ],
    githubUrl: "https://github.com/AjiteshSinha17/Lucid_AI_Roadmap",
    metricsLabel: "LLM_LATENCY",
    metricsValue: "180MS",
    iconName: "Bot"
  },
  {
    id: "proj-3",
    modNumber: "MOD-03",
    title: "Shopping App",
    subtitle: "Cross-Platform E-Commerce Mobile Engine",
    status: "DEPLOYED // E-COMMERCE",
    tech: ["Flutter", "Dart", "REST API", "State Management", "SQLite", "Payment Gateway"],
    description: "A feature-rich cross-platform e-commerce application featuring secure user authentication, interactive product catalog, real-time cart state, order tracking, and payment gateway integration.",
    overview: "Built to demonstrate full e-commerce lifecycle capabilities in Flutter, including smooth product grid virtualization, instant filter application, persistent shopping carts, and simulated checkout flows.",
    problemStatement: "Many mobile e-commerce apps suffer from sluggish scroll performance, cart state loss during network drops, and clunky checkout steps that lead to abandoned purchases.",
    solution: "Designed a lightweight, highly responsive client with localized cart state caching, optimistic UI updates, multi-currency display, and streamlined checkout UX.",
    features: [
      "Product Catalog with search, category filters, price sorting, and instant search feedback.",
      "Interactive Product Detail views with image carousels, size/color selectors, and stock counters.",
      "Persistent Shopping Cart with instant price calculations and local SQLite sync.",
      "Order Management dashboard tracking current and historical purchases with status timelines.",
      "Secure payment checkout integration supporting mock cards and UPI callbacks."
    ],
    architecture: "Bloc / Riverpod state management with Repository pattern separating REST API network calls, local storage persistence, and UI events.",
    challenges: "Maintaining perfect cart item synchronization between local device cache and server database during poor connectivity.",
    keyLearnings: "Gained deep experience in complex state management, custom painting for badges, and optimizing image memory caching in Flutter.",
    futureImprovements: [
      "AR product preview module.",
      "Push notifications for flash sales and order updates."
    ],
    githubUrl: "https://github.com/AjiteshSinha17/Shopping_App_Flutter",
    metricsLabel: "FPS_RATE",
    metricsValue: "60.0 FPS",
    iconName: "Layers"
  },
  {
    id: "proj-4",
    modNumber: "MOD-04",
    title: "OrderSync",
    subtitle: "Order Management & Inventory Synchronization System",
    status: "ACTIVE_SYNC // BACKEND",
    tech: ["Flutter", "Go Fiber", "PostgreSQL", "REST APIs", "Docker"],
    description: "An enterprise order management and inventory synchronization platform built using Flutter mobile client and high-throughput Go Fiber backend for real-time stock updates.",
    overview: "OrderSync bridges warehouse staff and store managers by automating stock adjustments, incoming order processing, low-stock alerts, and multi-store inventory reconciliation.",
    problemStatement: "Manual inventory entry leads to stockouts, overselling across channels, and slow order fulfillment in retail and distribution businesses.",
    solution: "OrderSync provides a high-concurrency Go backend pairing with a quick-scan Flutter mobile app that updates stock levels atomically across all devices within 12 milliseconds.",
    features: [
      "Barcode & QR Code inventory scanner using camera hardware integration.",
      "Real-time Inventory Dashboard tracking stock levels, low-stock thresholds, and reorder alerts.",
      "Order Processing Pipeline: Pending -> Processing -> Shipped -> Delivered transitions.",
      "High-throughput REST API written in Go Fiber backed by relational PostgreSQL transactions.",
      "Role-based access control (Admin, Warehouse Staff, Store Manager)."
    ],
    architecture: "Full-Stack Micro-architecture. Flutter client communicates via REST with a Go Fiber microservice connected to PostgreSQL database.",
    challenges: "Ensuring ACID database transactions in Go when multiple warehouse staff scan and fulfill the same product items simultaneously.",
    keyLearnings: "Mastered Go concurrency primitives (goroutines, channels), database row locking in PostgreSQL, and building responsive Flutter desktop/mobile views.",
    futureImprovements: [
      "Predictive stock forecasting using machine learning regression models.",
      "Offline sync queue using Hive local database."
    ],
    githubUrl: "https://github.com/AjiteshSinha17/OrdrerSync",
    metricsLabel: "SYNC_LATENCY",
    metricsValue: "12MS",
    iconName: "Zap"
  },
  {
    id: "proj-5",
    modNumber: "MOD-05",
    title: "Face Recognition Attendance",
    subtitle: "AI-Powered Biometric Attendance Verification System",
    status: "AUTHENTICATING // AI",
    tech: ["Flutter", "Python", "OpenCV", "Flask", "Firebase", "TensorFlow"],
    description: "An AI-powered biometric attendance application combining a Flutter mobile client with a Python Flask computer vision backend for automated face detection, embedding matching, and real-time attendance logging.",
    overview: "Eliminates manual roll calls and proxy attendance by using facial recognition algorithms that verify student identities in real time against stored feature vector embeddings.",
    problemStatement: "Traditional manual paper attendance is time-consuming, prone to proxy attendance cheating, and inefficient for large university classrooms.",
    solution: "An automated facial recognition pipeline: Flutter captures camera frames, posts them to a Python OpenCV endpoint that extracts face embeddings and logs verified attendance into Firebase.",
    features: [
      "Live Camera Feed integration with face bounding box overlay in Flutter.",
      "Face Embedding Extraction using OpenCV and Haar Cascades / Deep Neural Networks.",
      "99.2% Accuracy Verification matching against student face vector databases.",
      "Automated Attendance Reports generation with CSV export and date filters.",
      "Admin Dashboard for registering new student faces and overriding attendance logs."
    ],
    architecture: "Hybrid System: Flutter frontend for photo capture & reporting, Python Flask backend for computer vision inference, and Firebase Firestore for record storage.",
    challenges: "Optimizing face detection frame rates so attendance verification completes in under 1 second without overheating mobile devices.",
    keyLearnings: "Hands-on experience with Computer Vision algorithms, image pre-processing (grayscale, histogram equalization), RESTful image payload streaming, and Flask API deployment.",
    futureImprovements: [
      "Liveness detection to prevent anti-spoofing with printed photos.",
      "On-device edge inference using TensorFlow Lite in Flutter."
    ],
    githubUrl: "https://github.com/AjiteshSinha17/Face_Recognition_Attendance",
    metricsLabel: "ACCURACY",
    metricsValue: "99.2%",
    iconName: "ShieldCheck"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Dart", level: 92, tag: "Primary" },
      { name: "C++", level: 85, tag: "Core CS" },
      { name: "Java", level: 80, tag: "OOP" },
      { name: "Python", level: 82, tag: "AI/ML" },
      { name: "JavaScript / TypeScript", level: 80, tag: "Web & Node" },
      { name: "Go (Golang)", level: 75, tag: "Backend" }
    ]
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter Framework", level: 94, tag: "Expert" },
      { name: "Android (Kotlin / Java)", level: 78, tag: "Native" },
      { name: "Cross-Platform Architecture", level: 90, tag: "Core" },
      { name: "Custom Widgets & Canvas", level: 88, tag: "UI/UX" },
      { name: "Platform Channels & Native Plugins", level: 80, tag: "Integration" }
    ]
  },
  {
    category: "State Management",
    skills: [
      { name: "Provider", level: 92, tag: "Preferred" },
      { name: "Riverpod", level: 88, tag: "Reactive" },
      { name: "Bloc / Cubit", level: 85, tag: "Enterprise" },
      { name: "GetX", level: 82, tag: "Utility" }
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js & Express", level: 84, tag: "REST APIs" },
      { name: "Go Fiber Framework", level: 76, tag: "Low-Latency" },
      { name: "Firebase (Auth, Firestore, RTD)", level: 92, tag: "Cloud DB" },
      { name: "RESTful API Architecture", level: 90, tag: "Protocols" },
      { name: "PostgreSQL & SQLite", level: 82, tag: "SQL" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Gemini API Integration", level: 90, tag: "LLMs" },
      { name: "OpenAI SDK", level: 85, tag: "Generative AI" },
      { name: "OpenCV & Computer Vision", level: 78, tag: "Face Rec" },
      { name: "TensorFlow Basics", level: 72, tag: "ML Models" }
    ]
  },
  {
    category: "Dev Tools & CS Fundamentals",
    skills: [
      { name: "Git & GitHub Workflows", level: 90, tag: "Version Control" },
      { name: "Data Structures & Algorithms", level: 85, tag: "CS Core" },
      { name: "Clean Architecture & SOLID", level: 88, tag: "Design Patterns" },
      { name: "VS Code & Android Studio", level: 92, tag: "IDEs" },
      { name: "Postman & API Testing", level: 88, tag: "Tooling" },
      { name: "Docker Container Basics", level: 74, tag: "DevOps" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "Flutter Mobile Application Development",
    description: "End-to-end development of sleek, responsive cross-platform mobile apps for iOS and Android using Flutter and Dart.",
    deliverables: ["Pixel-perfect responsive UI", "Clean State Management", "Smooth 60fps animations", "Cross-device testing"],
    icon: "Smartphone"
  },
  {
    id: "serv-2",
    title: "Firebase Cloud & Database Integration",
    description: "Architecture and setup of Firebase backends including Firestore, Authentication, Cloud Storage, and real-time synchronization.",
    deliverables: ["Secure Firestore rules", "OAuth & Email auth", "Real-time sync channels", "Cloud function triggers"],
    icon: "Database"
  },
  {
    id: "serv-3",
    title: "REST API & Backend Integration",
    description: "Connecting Flutter frontends to REST APIs written in Node.js, Express, Go Fiber, or Python Flask with robust error handling.",
    deliverables: ["JSON payload parsing", "Offline HTTP caching", "Auth header management", "API contract documentation"],
    icon: "Server"
  },
  {
    id: "serv-4",
    title: "AI Model & Chatbot Integration",
    description: "Incorporating Large Language Models (Gemini API, OpenAI SDK) and Computer Vision pipelines into mobile and web apps.",
    deliverables: ["Streaming chat interfaces", "Facial recognition integration", "Custom prompt pipelines", "Secure server proxy"],
    icon: "Bot"
  },
  {
    id: "serv-5",
    title: "Mobile App Performance Optimization",
    description: "Diagnosing and fixing memory leaks, widget rebuild bottlenecks, slow startup times, and heavy asset sizes.",
    deliverables: ["Memory leak audits", "Widget tree refactoring", "Bundle size reduction", "60fps frame profiling"],
    icon: "Zap"
  },
  {
    id: "serv-6",
    title: "Bug Fixing & Application Maintenance",
    description: "Systematic debugging, code refactoring, upgrading legacy dependencies, and fixing platform-specific UI crashes.",
    deliverables: ["Crash logs resolution", "Dependency upgrades", "Clean Architecture migration", "Comprehensive QA test"],
    icon: "ShieldCheck"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Multiple Production Internships",
    category: "Career Milestone",
    description: "Successfully completed 3 Flutter Developer Internships at GreenCreon LLP, SOS42, and Talking Crooks, delivering real production code.",
    date: "2023 - Present",
    badgeCode: "BADGE_INTERN_03"
  },
  {
    id: "ach-2",
    title: "Research Paper Published in ISCJ",
    category: "Academic Excellence",
    description: "Authored and published research paper on 'ClgZone' in the International Study of Computer Science Journals.",
    date: "2024",
    badgeCode: "BADGE_RESEARCH_ISCJ"
  },
  {
    id: "ach-3",
    title: "Technical Club President",
    category: "Leadership",
    description: "Elected President of college Technical Club, successfully organizing hackathons and technical mentorship for 300+ students.",
    date: "2024 - Present",
    badgeCode: "BADGE_LEADERSHIP_PRES"
  },
  {
    id: "ach-4",
    title: "PTEMS Conference Coordinator",
    category: "Event Management",
    description: "Coordinated logistics and student committees for the National Conference on Progress in Technology, Engineering & Management Science.",
    date: "2024",
    badgeCode: "BADGE_CONF_PTEMS"
  },
  {
    id: "ach-5",
    title: "5+ Major Full-Stack & AI Projects",
    category: "Engineering",
    description: "Designed and built production-ready apps including ClgZone, Lucid AI, OrderSync, Shopping App, and Face Recognition Attendance.",
    date: "2023 - 2026",
    badgeCode: "BADGE_PROJECT_STACK"
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "time-1",
    stage: "High School & Foundations",
    year: "2021",
    title: "Secondary Education & Programming Spark",
    description: "Built initial problem-solving foundations with C++ and basic Object-Oriented Concepts.",
    type: "education"
  },
  {
    id: "time-2",
    stage: "College Enrollment",
    year: "2023",
    title: "B.Tech Computer Science Engineering",
    description: "Admitted to Greater Noida College (Dr. A.P.J. Abdul Kalam Technical University). Deep dive into DSA and DBMS.",
    type: "education"
  },
  {
    id: "time-3",
    stage: "Flutter Specialization",
    year: "2023",
    title: "Adopting Flutter & Mobile Ecosystems",
    description: "Chose Flutter as primary mobile framework. Mastered Dart, Provider/Riverpod state management, and Firebase integration.",
    type: "milestone"
  },
  {
    id: "time-4",
    stage: "Leadership & Club President",
    year: "2024",
    title: "Appointed Technical Club President",
    description: "Led college technical society, organized major hackathons, workshops, and mentored junior developers.",
    type: "leadership"
  },
  {
    id: "time-5",
    stage: "Research & Publication",
    year: "2024",
    title: "Published ClgZone Paper in ISCJ",
    description: "Published academic paper on student community networking and academic synchronization in ISCJ journal.",
    type: "research"
  },
  {
    id: "time-6",
    stage: "Industry Experience",
    year: "2024 - 2025",
    title: "Triple Flutter Developer Internships",
    description: "Completed internships at GreenCreon LLP, SOS42, and Talking Crooks, building real-world Flutter apps and REST APIs.",
    type: "career"
  },
  {
    id: "time-7",
    stage: "Backend & AI Expansion",
    year: "2025 - 2026",
    title: "Go Fiber, PostgreSQL & LLM Integration",
    description: "Expanded engineering toolkit to high-performance Go Fiber backends, OpenCV computer vision, and Gemini AI integration.",
    type: "milestone"
  },
  {
    id: "time-8",
    stage: "Future Software Engineer",
    year: "May 2027",
    title: "B.Tech Graduation & Industry Impact",
    description: "Graduating with B.Tech CSE, ready to make high-impact contributions in Flutter, Mobile Architecture, and Full-Stack Engineering.",
    type: "career"
  }
];

export const FUTURE_GOALS = {
  shortTerm: [
    "Secure a high-impact Flutter or Mobile Software Engineering position upon B.Tech graduation.",
    "Contribute to open-source Flutter packages and community plugins.",
    "Master advanced Go backend patterns for ultra-low latency microservices."
  ],
  longTerm: [
    "Grow into a Mobile Tech Lead or Principal Systems Architect designing large-scale mobile platforms.",
    "Architect AI-native mobile applications that seamlessly blend edge inference with cloud LLMs.",
    "Publish further research papers in mobile computing, state synchronization, and human-computer interaction."
  ],
  learningGoals: [
    "Deepen knowledge in TensorFlow Lite for on-device Flutter edge ML.",
    "Master Kubernetes & Docker orchestration for containerized microservices.",
    "Explore Swift (iOS Native) and Jetpack Compose (Android Native) for platform bridge mastery."
  ]
};

export const SEO_DATA = {
  metaTitle: "Ajitesh Sinha // Flutter Developer & Full-Stack Systems Engineer Portfolio",
  metaDescription: "Official portfolio of Ajitesh Sinha - Flutter Developer, Mobile & Backend Engineer, AI Enthusiast. B.Tech CSE student at Greater Noida College (AKTU), 3 internships, published research in ISCJ.",
  openGraphDescription: "Explore the projects, technical research, and production apps built by Ajitesh Sinha, specializing in Flutter, Dart, Firebase, Node.js, Go Fiber, and AI integration.",
  keywords: [
    "Ajitesh Sinha",
    "Flutter Developer",
    "Mobile Developer India",
    "Greater Noida College",
    "AKTU B.Tech CSE",
    "Dart Developer",
    "Firebase Flutter Developer",
    "ClgZone ISCJ",
    "Lucid AI",
    "OrderSync Go Fiber",
    "Software Engineer Portfolio"
  ],
  shortBio: "Ajitesh Sinha is a Flutter Developer, Mobile & Backend Systems Engineer, and B.Tech CSE student at Greater Noida College (AKTU) with experience across 3 development internships and published research in ISCJ.",
  longBio: "Ajitesh Sinha is a high-performing Flutter Developer and Computer Science Engineering student graduating in May 2027 from Greater Noida College (Dr. A.P.J. Abdul Kalam Technical University). With 3 software development internships (GreenCreon LLP, SOS42, Talking Crooks), a published research paper in the International Study of Computer Science Journals (ISCJ) on campus community networking ('ClgZone'), and experience as college Technical Club President, Ajitesh specializes in cross-platform mobile apps, Go Fiber backends, Firebase cloud platforms, and AI integrations."
};
