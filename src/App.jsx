import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  X,
} from "lucide-react";

const projects = [
  {
    title: "JioMart Experience",
    type: "Commerce experience",
    year: "2025",
    description:
      "A polished e-commerce flow with discovery, authentication, cart state, and checkout interactions.",
    stack: ["React", "Redux", "Chakra UI"],
    image: "/images/jio_mart_clone.png",
    live: "https://jiomart-app.netlify.app/",
    code: "https://github.com/RohitMBelure/prickly-partner_25",
  },
  {
    title: "Tata 1mg Platform",
    type: "Healthcare platform",
    year: "2025",
    description:
      "A full-stack healthcare commerce build with searchable products, detail views, and a Node API.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/images/tata_1mg_clone.png",
    live: "https://tata-1mg-clone-sage.vercel.app/",
    code: "https://github.com/sonuprasad66/omniscient-sheet-6598",
  },
  {
    title: "S-SENSE Storefront",
    type: "Fashion storefront",
    year: "2024",
    description:
      "A responsive fashion experience with clean browsing, product storytelling, and practical UI detail.",
    stack: ["JavaScript", "CSS", "Responsive UI"],
    image: "/images/s_sense_clone.png",
    live: "https://tangerine-bublanina-ddee4c.netlify.app/",
    code: "https://github.com/RohitMBelure/Project-SSENSE",
  },
  {
    title: "SUGAR Cosmetics",
    type: "Beauty commerce",
    year: "2024",
    description:
      "A colourful cosmetics shopping experience with category browsing and a mobile-first layout.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/sugar_cosmetic_clone.PNG",
    live: "https://beautiful-nasturtium-8b89b4.netlify.app/",
    code: "https://github.com/RohitMBelure/Project_Sugar_Cosmetics",
  },
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux",
  "React Query",
  "Responsive UI",
  "Accessibility",
  "REST APIs",
  "Jest",
  "Storybook",
  "Git",
  "Figma",
  "Node.js",
  "Express",
  "MongoDB",
];
const featuredSkills = new Set(["React", "TypeScript", "Node.js", "REST APIs"]);
const resumePreview =
  "https://drive.google.com/file/d/150saF0j1619BSD4q1EGijU96TW_Z3vo7/view?usp=share_link";
const resumeDownload =
  "https://drive.google.com/uc?export=download&id=150saF0j1619BSD4q1EGijU96TW_Z3vo7";
const emailAddress = "rohitbelure128@gmail.com";

function openGmail() {
  const subject = encodeURIComponent("Portfolio inquiry - Rohit Belure");
  const body = encodeURIComponent(
    "Hi Rohit,\n\nI reviewed your portfolio and would like to discuss a potential opportunity.\n\nRegards,\n[Your name]",
  );
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const updateField = (event) =>
    setFormState({ ...formState, [event.target.name]: event.target.value });

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus(data.message);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        error.message || "Something went wrong. Please email me directly.",
      );
    }
  };

  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="hero-surface">
        <header className="site-header page-width">
          <a className="brand" href="#top" onClick={closeMenu}>
            RB<span>.</span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["about", "work", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>
                {item === "skills" ? "expertise" : item}
              </a>
            ))}
            <button className="nav-cta" onClick={openGmail}>
              Let&apos;s talk <ArrowUpRight size={15} />
            </button>
          </nav>
        </header>
        <main id="top">
          <section className="hero page-width">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span className="pulse" /> Available for work
              </p>
              <h1>
                Digital products,
                <br />
                built with <em>purpose.</em>
              </h1>
              <p className="hero-description">
                I&apos;m Rohit Belure — a frontend developer from Latur, India,
                crafting high-performing web experiences with full-stack range.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#work">
                  View selected work <ArrowUpRight size={18} />
                </a>
                <a
                  className="resume-link"
                  href={resumePreview}
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview resume <ArrowUpRight size={16} />
                </a>
                <a
                  className="resume-download"
                  href={resumeDownload}
                  download="Rohit-Belure-Resume.pdf"
                  aria-label="Download resume"
                >
                  <Download size={16} />
                </a>
              </div>
            </div>
            <div className="hero-portrait reveal">
              <div className="portrait-orbit" />
              <div className="portrait-frame">
                <img src="/images/rohit.jpg" alt="Rohit Belure" />
              </div>
              <div className="portrait-note">
                <strong>Design-led engineering</strong>
                <br />
                Frontend / Full-stack
              </div>
            </div>
          </section>
        </main>
      </div>

      <section id="about" className="about page-width section-grid">
        <div className="section-label">01 / Introduction</div>
        <div className="about-content">
          <h2>
            Clarity in the interface.
            <br />
            Confidence in the <span>code.</span>
          </h2>
          <p>
            I translate product ideas into responsive, accessible experiences
            that feel simple — because the hard work happens behind the scenes.
          </p>
          <p>
            My work brings practical engineering and thoughtful design together,
            making each interaction useful, resilient, and easy to understand.
          </p>
          <div className="facts">
            <div>
              <strong>04+</strong>
              <span>
                Years learning
                <br />
                and building
              </span>
            </div>
            <div>
              <strong>10+</strong>
              <span>
                Projects shipped
                <br />
                across the web
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work page-width">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / Featured work</div>
            <h2>
              Selected projects <em>with real intent.</em>
            </h2>
          </div>
          <p>
            Explore live builds <ArrowUpRight size={16} />
          </p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <a
                className="project-image"
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <img src={project.image} alt={`${project.title} preview`} />
                <span>0{index + 1}</span>
              </a>
              <div className="project-info">
                <p className="project-type">
                  {project.type} <i /> {project.year}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    View live <ArrowUpRight size={14} />
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="page-width skills-layout">
          <div>
            <div className="section-label">03 / Expertise</div>
            <h2>
              A focused toolkit,
              <br />
              built for <em>real products.</em>
            </h2>
            <p>
              From visual detail to scalable code, every choice serves the
              product.
            </p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span
                key={skill}
                className={featuredSkills.has(skill) ? "skill-featured" : ""}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact page-width">
        <div className="contact-intro">
          <div className="section-label">04 / Let&apos;s work together</div>
          <h2>
            Have a good idea?
            <br />
            <em>Let&apos;s make it real.</em>
          </h2>
          <p>
            Tell me about the role, product, or problem you&apos;re solving.
            I&apos;ll get back to you within a day.
          </p>
          <div className="contact-details">
            <button className="contact-email" onClick={openGmail}>
              <Mail size={17} /> {emailAddress}
            </button>
            <span>
              <MapPin size={17} /> Latur, Maharashtra, India
            </span>
            <div className="socials">
              <a
                href="https://github.com/RohitMBelure"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-belure-8b8369167/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submitForm}>
          <label>
            Name
            <input
              name="name"
              value={formState.name}
              onChange={updateField}
              required
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={updateField}
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={updateField}
              required
              rows="5"
              placeholder="Tell me a little about your project"
            />
          </label>
          <button className="button button-dark" type="submit">
            Start a conversation <Send size={16} />
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
      <footer className="page-width footer">
        <span>© 2026 Rohit Belure · Built with care</span>
        <span>
          <a
            href="https://github.com/RohitMBelure"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/rohit-belure-8b8369167/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
