import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Skills.css";

const mainSkills = [
  { name: "Python", abbr: "Py", color: "#9bcdf6" },
  { name: "HTML5", abbr: "HT", color: "#e34c26" },
  { name: "CSS3", abbr: "CS", color: "#8fe426" },
  { name: "React", abbr: "Re", color: "#5ad4f6" },
  { name: "Bootstrap", abbr: "Bs", color: "#f7b500" },
  { name: "JavaScript(ES6+)", abbr: "JS", color: "#f7df1e" },
  { name: "Tailwind CSS", abbr: "Tw", color: "#da60ff" },
  { name: "Django", abbr: "Dj", color: "#078d5a" },
  { name: "PostgreSQL", abbr: "PS", color: "#a48bfe" },
  { name: "MYSQL", abbr: "SQ", color: "#00758f" },
  { name: "Git", abbr: "Gi", color: "#32f081" },
  { name: "GitHub", abbr: "Gh", color: "#9a9696" },
  { name: "Rest APIs", abbr: "RA", color: "#f7b500" },
  { name: "Figma", abbr: "Fg", color: "#f7f700" },
];

const categories = [
  {
    title: "Frontend",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Redux",
      "Responsive Design",
      "Bootstrap",
      "React Router",
    ],
  },
  {
    title: "Backend",
    tags: [
      "Python",
      "Rest APIs",
      "PostgreSQL",
      "MYSQL",
      "Django",
      "Django Framework",
    ],
  },
  { title: "Tools", tags: ["Git", "GitHub", "VS Code", "Figma"] },
];

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [catRef, catVisible] = useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <div
          ref={headerRef}
          className={`skills__header reveal${headerVisible ? " visible" : ""}`}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div ref={gridRef} className="skills__grid">
          {mainSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card reveal${gridVisible ? " visible" : ""}`}
              style={{ transitionDelay: gridVisible ? `${i * 0.07}s` : "0s" }}
            >
              <div
                className="skill-card__bar"
                style={{ "--skill-color": skill.color }}
              />
              <div
                className="skill-card__badge"
                style={{ "--skill-color": skill.color }}
              >
                {skill.abbr}
              </div>

              <div className="skill-card__name">{skill.name}</div>

              <div
                className="skill-card__glow"
                style={{ "--skill-color": skill.color }}
              />
            </div>
          ))}
        </div>

        <div
          ref={catRef}
          className={`skills__categories reveal${catVisible ? " visible" : ""}`}
        >
          {categories.map((cat, ci) => (
            <div key={cat.title} className="skills__cat">
              <div className="skills__cat-title">{cat.title}</div>
              <div className="skills__cat-grid">
                {cat.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`skill-tag reveal${catVisible ? " visible" : ""}`}
                    style={{
                      transitionDelay: catVisible
                        ? `${(ci * cat.tags.length + i) * 0.04}s`
                        : "0s",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
