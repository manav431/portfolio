export const portfolioData = {
  hero: {
    name: "Manav Bhut",
    title: "Vibe Coder & AI Prompt Engineer",
    statement: "I build modern, interactive web experiences with a focus on motion and typography.",
    primaryCta: { label: "View Work", href: "#work" },
    secondaryCta: { label: "Contact", href: "#contact" },
    status: "Available for freelance",
    socials: [
      { name: "GitHub", href: "https://github.com/manav431", icon: "github" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/manav-bhut-5b519b367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "linkedin" },
    ]
  },
  about: {
    bio: "I'm Manav Bhut, currently pursuing an Integrated Master of Computer Applications (IMCA) in Vadodara. With two years of academic experience, I am deeply passionate about experimenting with novel concepts and pushing technical boundaries. I thrive on the iterative process of engineering: continuously shipping, breaking, fixing, and repeating.",
    focus: "Currently focused on full-stack development, modern web architectures, and transforming innovative ideas into functional digital products.",
    facts: [
      "Pursuing an IMCA in Vadodara",
      "Driven by rapid prototyping and iterative development",
      "Embracing the Ship > Break > Fix > Repeat methodology"
    ]
  },
  skills: [
    {
      category: "AI",
      items: ["Large Language Models", "Generative AI", "Claude", "Gemini", "OpenAI"]
    },
    {
      category: "Prompt Writing",
      items: ["Few-Shot Prompting", "Chain of Thought", "System Prompts", "Context Optimization", "Prompt Engineering"]
    },
    {
      category: "Vibe Coding",
      items: ["Rapid Prototyping", "Cursor", "Copilot", "Iterative Shipping", "AI-Assisted Dev"]
    }
  ],
  projects: [
    {
      id: "aampatra",
      title: "Aampatra",
      description: "A premium platform empowering modern luxury restaurants with bespoke contactless QR menus, real-time order management, and dynamic digital menu curation.",
      year: "2026",
      category: "SaaS Platform",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      image: "/aampatra-logo.png",
      links: [
        { label: "Live Site", href: "https://aampatra.vercel.app/" }
      ]
    },
    {
      id: "centify",
      title: "Centify",
      description: "A comprehensive budget management portal designed to help users track expenses, set financial goals, and gain real-time insights into their personal finances.",
      year: "2026",
      category: "Web Application",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      image: "/centify-logo.png",
      links: [
        { label: "Live Site", href: "https://centify-frontend.onrender.com/#login" }
      ]
    }
  ],
  experience: [
    {
      company: "Vadodara",
      role: "Integrated MCA Student",
      duration: "Present",
      description: "Pursuing my Integrated Master of Computer Applications. Building a strong foundation in computer science while actively experimenting with new ideas, AI prompt engineering, and modern web frameworks.",
      technologies: ["Computer Science", "Algorithms", "AI Tools"]
    },
    {
      company: "Academic & Personal Projects",
      role: "Vibe Coder & Experimenter",
      duration: "2 Years Experience",
      description: "Passionate about the iterative development cycle. I constantly experiment with new concepts by shipping quickly, breaking things, fixing them, and repeating the process to build robust solutions.",
      technologies: ["Rapid Prototyping", "Prompt Engineering", "Full-stack Dev"]
    }
  ],
  contact: {
    email: "manavbhut2@gmail.com",
    message: "Feel free to reach out for collaborations or just a friendly hello."
  }
};
