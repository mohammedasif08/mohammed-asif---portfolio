import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Projects.css";

const projects = [
  {
    id: 1,
    icon: "🚆",
    title: "Train Booking Web Application",
    desc: [
      "• Developed a railway reservation system with real-time seat availability and ticket booking functionality.",
      "• Built secure authentication and role-based access control for Admin and Users.",
      "• Designed RESTful APIs for booking, cancellation, and user management.",
      "• Improved backend performance by 20% through optimized database queries.",
    ],
    tags: ["Python", "Django", "Django REST Framework", "React.js", "MySQL"],
    badge: "Featured",
    github: {
      href: "https://github.com/mohammedasif08",
    },
  },

  {
    id: 2,
    icon: "🎦",
    title: "Multi-Category Media Platform",
    desc: [
      "• Built a platform supporting Movies, Music, and Sports content management.",
      "• Designed normalized PostgreSQL schemas handling 5000+ media records.",
      "• Implemented Redux-based state management for dynamic content updates.",
    ],
    tags: ["React.js", "Django", "PostgreSQL"],
    badge: "Live",
    github: {
      href: "https://github.com/mohammedasif08/Multi-Category-Media-Platform.git",
    },
  },

  {
    id: 3,
    icon: "🧑‍💼",
    title: "Professional Portfolio Website",
    desc: [
      "• Developed a responsive personal portfolio website.",
      "• Achieved 95+ Lighthouse performance and SEO score.",
      "• Reduced CSS size by 40% using utility-first Tailwind CSS approach.",
    ],
    tags: ["React.js", "Tailwind CSS"],
    badge: null,
    github: {
      href: "https://github.com/mohammedasif08/mohammed-asif---portfolio.git",
    },
  },

  {
    id: 4,
    icon: "🛒",
    title: "Mini SaaS Template Store",
    desc: [
      "• Built a full-stack template marketplace with authentication and protected routes.",
      "• Developed REST APIs using Express.js and Node.js.",
      "• Integrated PostgreSQL database for secure data handling.",
      "• Created responsive frontend using React.js and Vite.",
      "• Implemented JWT authentication system.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Vite"],
    badge: "New",
    github: {
      href: "https://github.com/mohammedasif08/fullstack-intern-task.git",
    },
  },

  {
    id: 5,
    icon: "🧮",
    title: "Modern AI Calculator Application",
    desc: [
      "• Developed a responsive calculator application.",
      "• Implemented real-time mathematical operations.",
      "• Built reusable React.js components.",
      "• Added mobile and desktop responsive layout.",
      "• Styled the application using Tailwind CSS.",
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    badge: "New",
    github: {
      href: "https://github.com/mohammedasif08/ai-calculator.git",
    },
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div
          ref={headerRef}
          className={`projects__header reveal${
            headerVisible ? " visible" : ""
          }`}
        >
          <div>
            <span className="section-label">Projects</span>
            <h2 className="section-title">Things I've built</h2>
          </div>
        </div>

        <div ref={gridRef} className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card reveal d${Math.min(i + 1, 6)}${
                gridVisible ? " visible" : ""
              }`}
              style={{
                transitionDelay: gridVisible ? `${i * 0.08}s` : "0s",
              }}
            >
              <div className="project-card__thumb">
                <span className="project-card__emoji">{p.icon}</span>

                {p.badge && (
                  <span className="project-card__badge">{p.badge}</span>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>

                <div className="project-card__desc">
                  {p.desc.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>

                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span className="project-card__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={p.github.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    <GithubIcon /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
