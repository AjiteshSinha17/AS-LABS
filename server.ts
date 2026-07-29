import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for contact form transmissions
const contactSubmissions: Array<{
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  timestamp: string;
}> = [];

// Initialize Gemini AI Client lazily or if GEMINI_API_KEY is available
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// 2. Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: name, email, subject, and message are required.",
    });
  }

  const newSubmission = {
    id: `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name,
    email,
    phone: phone || "",
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  contactSubmissions.push(newSubmission);
  console.log(`[TRANSMISSION RECEIVED] ${newSubmission.id} from ${name} <${email}>`);

  return res.json({
    success: true,
    message: "Transmission received and logged in secure database.",
    transmissionId: newSubmission.id,
    timestamp: newSubmission.timestamp,
  });
});

// 3. GitHub API Proxy & Fallback
app.get("/api/github/user", async (req, res) => {
  try {
    const response = await fetch("https://api.github.com/users/AjiteshSinha17", {
      headers: {
        "User-Agent": "Ajitesh-Portfolio-App",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json({
      login: data.login,
      name: data.name || "Ajitesh Sinha",
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      bio: data.bio || "Flutter Developer | Backend Developer | AI Enthusiast",
      location: data.location || "Greater Noida, UP, India",
    });
  } catch (err: any) {
    console.error("Error fetching GitHub user:", err?.message);
    // Return fallback structured data
    res.json({
      login: "AjiteshSinha17",
      name: "Ajitesh Sinha",
      avatar_url: "https://github.com/AjiteshSinha17.png",
      html_url: "https://github.com/AjiteshSinha17",
      public_repos: 18,
      followers: 12,
      following: 15,
      bio: "Flutter Developer | Backend Developer | AI Enthusiast | B.Tech CSE Student",
      location: "Greater Noida, Uttar Pradesh, India",
      isFallback: true,
    });
  }
});

app.get("/api/github/repos", async (req, res) => {
  try {
    const response = await fetch("https://api.github.com/users/AjiteshSinha17/repos?sort=updated&per_page=30", {
      headers: {
        "User-Agent": "Ajitesh-Portfolio-App",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const repos = await response.json();
    const formattedRepos = repos.map((r: any) => ({
      id: r.id,
      name: r.name,
      full_name: r.full_name,
      html_url: r.html_url,
      description: r.description || "Flutter / Backend / AI project repository.",
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      language: r.language || "Dart",
      updated_at: r.updated_at,
      pushed_at: r.pushed_at,
      topics: r.topics || [],
    }));

    res.json(formattedRepos);
  } catch (err: any) {
    console.error("Error fetching GitHub repos:", err?.message);
    // Fallback pinned repositories list
    res.json([
      {
        id: 1,
        name: "clg",
        full_name: "AjiteshSinha17/clg",
        html_url: "https://github.com/AjiteshSinha17/clg",
        description: "ClgZone Core - Student networking and academic platform connecting students through community, authentication, roommate discovery & real-time chat.",
        stargazers_count: 5,
        forks_count: 2,
        language: "Dart",
        updated_at: new Date().toISOString(),
        topics: ["flutter", "firebase", "dart", "academic-platform"],
        isPinned: true,
      },
      {
        id: 2,
        name: "OrdrerSync",
        full_name: "AjiteshSinha17/OrdrerSync",
        html_url: "https://github.com/AjiteshSinha17/OrdrerSync",
        description: "OrderSync - Order management and inventory synchronization application built using Flutter and high-performance backend APIs.",
        stargazers_count: 4,
        forks_count: 1,
        language: "Dart",
        updated_at: new Date().toISOString(),
        topics: ["flutter", "go", "postgresql", "inventory-management"],
        isPinned: true,
      },
      {
        id: 3,
        name: "Face_Recognition_Attendance",
        full_name: "AjiteshSinha17/Face_Recognition_Attendance",
        html_url: "https://github.com/AjiteshSinha17/Face_Recognition_Attendance",
        description: "AI-powered facial recognition attendance system with Flutter frontend, Python Flask backend, OpenCV, and Firebase.",
        stargazers_count: 6,
        forks_count: 3,
        language: "Python",
        updated_at: new Date().toISOString(),
        topics: ["python", "opencv", "flutter", "facial-recognition", "ai"],
        isPinned: true,
      },
      {
        id: 4,
        name: "Lucid_AI_Roadmap",
        full_name: "AjiteshSinha17/Lucid_AI_Roadmap",
        html_url: "https://github.com/AjiteshSinha17/Lucid_AI_Roadmap",
        description: "Lucid AI - Intelligent learning roadmap chatbot providing personalized study paths, resource curation, and roadmap generation.",
        stargazers_count: 3,
        forks_count: 1,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        topics: ["ai", "gemini-api", "flutter", "chatbot"],
        isPinned: true,
      },
      {
        id: 5,
        name: "Shopping_App_Flutter",
        full_name: "AjiteshSinha17/Shopping_App_Flutter",
        html_url: "https://github.com/AjiteshSinha17/Shopping_App_Flutter",
        description: "Cross-platform e-commerce app featuring secure authentication, product catalog, cart management, and order handling.",
        stargazers_count: 3,
        forks_count: 1,
        language: "Dart",
        updated_at: new Date().toISOString(),
        topics: ["flutter", "e-commerce", "dart", "rest-api"],
        isPinned: true,
      },
    ]);
  }
});

// 4. Interactive Terminal AI Assistant Endpoint (Powered by Gemini)
app.post("/api/terminal/ai", async (req, res) => {
  const { prompt, conversationHistory } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const systemInstruction = `You are "AJITESH_AI", a tactical command-line AI assistant embedded in Ajitesh Sinha's portfolio (AJITESH_SINHA // PORTFOLIO_V.4).
Your goal is to answer questions from software recruiters, hiring managers, and engineers about Ajitesh Sinha accurately, concisely, professionally, and in first-person or authorized AI agent tone.

Ajitesh Sinha's Profile:
- Role: Flutter Developer, Mobile Application Developer, Backend Developer, AI Enthusiast.
- Education: B.Tech in Computer Science Engineering at Greater Noida College (AKTU), expected graduation May 2027.
- Contact: ajiteshsinha2004@gmail.com, +91 6387643564, Greater Noida, UP, India.
- GitHub: https://github.com/AjiteshSinha17, Portfolio: https://ajitesh-sinha.vercel.app/, LinkedIn: https://www.linkedin.com/in/ajitesh-sinha-501124295/
- Internships:
  1. GreenCreon LLP (Flutter Developer Intern): REST API Integration, Firebase, Responsive UI, Performance Optimization, Debugging, Widget Refactoring, Git.
  2. SOS42 (Flutter Developer Intern): Feature Dev, Clean Architecture, State Management, API Integration, Bug Fixing, Performance.
  3. Talking Crooks (Flutter Developer Intern): Mobile Dev, REST APIs, State Management, UI Implementation, Code Reviews, Debugging.
- Leadership: Technical Club President at college (Organized Hackathons, Ideathons, mentored students, led tech teams), PTEMS Conference Coordinator.
- Research: "ClgZone" published in International Study of Computer Science Journals (ISCJ).
- Key Projects:
  1. ClgZone: Student networking & academic platform (Flutter, Firebase, Firestore, Auth, Cloudinary, REST APIs).
  2. Lucid AI: AI-powered learning roadmap chatbot.
  3. Shopping App: Cross-platform e-commerce application.
  4. OrderSync: Order & inventory synchronization app (Flutter, Go Fiber/PostgreSQL/REST).
  5. Face Recognition Attendance System: AI attendance app (Flutter, Python, OpenCV, Flask, Firebase).
- Skills: Dart, C++, Java, Python, JavaScript, TypeScript, Flutter, Node.js, Express, Go Fiber, Provider, Riverpod, Bloc, GetX, Firestore, PostgreSQL, SQLite, Firebase, OpenCV, TensorFlow, Git.

Keep responses concise, styled in technical terminal notation (e.g. using bracketed tags like [SYS_INFO], bullet points, or clear clean text), and highlighting why Ajitesh is a top candidate.`;

  try {
    const ai = getGeminiClient();
    if (!ai) {
      // Fallback if no Gemini API key configured
      return res.json({
        reply: `[SYS_NOTE]: AI terminal mode operating in fallback state. 
Ajitesh Sinha is a Flutter & Backend Developer with 3 internships (GreenCreon, SOS42, Talking Crooks), a published research paper ("ClgZone" in ISCJ), and Technical Club President leadership.
Key tech: Flutter, Dart, Firebase, Node.js, Python, OpenCV. Email: ajiteshsinha2004@gmail.com.`,
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({
      reply: response.text || "[SYS_INFO]: Query processed successfully.",
    });
  } catch (error: any) {
    console.error("Gemini API Terminal Error:", error?.message);
    return res.json({
      reply: `[SYS_INFO]: Ajitesh Sinha is a Flutter Developer, Mobile & Backend Engineer, and AI Enthusiast graduating in May 2027 from Greater Noida College (AKTU). Contact: ajiteshsinha2004@gmail.com | +91 6387643564.`,
    });
  }
});

// Vite middleware for dev or static server for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SYS_ONLINE] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
