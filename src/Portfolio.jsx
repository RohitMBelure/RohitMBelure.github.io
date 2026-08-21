import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";

const projects = [
  {
    title: "JioMart Experience",
    category: "Commerce experience",
    year: "2025",
    description:
      "A polished e-commerce flow with discovery, authentication, cart state, and checkout interactions.",
    outcomes: ["Product discovery", "Cart and auth flows", "Responsive commerce UI"],
    stack: ["React", "Redux", "Chakra UI"],
    image: "/images/jio_mart_clone.png",
    live: "https://jiomart-app.netlify.app/",
    code: "https://github.com/RohitMBelure/prickly-partner_25",
  },
  {
    title: "Tata 1mg Platform",
    category: "Healthcare platform",
    year: "2025",
    description:
      "A full-stack healthcare commerce build with searchable products, detail views, and a Node API.",
    outcomes: ["Searchable catalogue", "Product detail flows", "Node API integration"],
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/images/tata_1mg_clone.png",
    live: "https://tata-1mg-clone-sage.vercel.app/",
    code: "https://github.com/sonuprasad66/omniscient-sheet-6598",
  },
  {
    title: "S-SENSE Storefront",
    category: "Fashion storefront",
    year: "2024",
    description:
      "A responsive fashion experience with clean browsing, product storytelling, and practical UI detail.",
    outcomes: ["Responsive storefront", "Product storytelling", "Clear browsing hierarchy"],
    stack: ["JavaScript", "CSS", "Responsive UI"],
    image: "/images/s_sense_clone.png",
    live: "https://tangerine-bublanina-ddee4c.netlify.app/",
    code: "https://github.com/RohitMBelure/Project-SSENSE",
  },
  {
    title: "SUGAR Cosmetics",
    category: "Beauty commerce",
    year: "2024",
    description:
      "A colourful cosmetics shopping experience with category browsing and a mobile-first layout.",
    outcomes: ["Category browsing", "Mobile-first layout", "Visual commerce UI"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/sugar_cosmetic_clone.PNG",
    live: "https://beautiful-nasturtium-8b89b4.netlify.app/",
    code: "https://github.com/RohitMBelure/Project_Sugar_Cosmetics",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "UI engineering", items: ["Tailwind CSS", "Chakra UI", "Responsive UI", "Accessibility", "Design systems"] },
  { title: "State & data", items: ["Redux", "React Query", "REST APIs", "Jest", "Storybook"] },
  { title: "Backend range", items: ["Node.js", "Express", "MongoDB", "Authentication", "API integration"] },
  { title: "Engineering tools", items: ["Git", "GitHub", "Figma", "VS Code", "Postman"] },
];

const expertise = [
  { number: "01", title: "Frontend architecture", text: "Clear structures and reusable patterns for interfaces that stay understandable as they grow." },
  { number: "02", title: "Component systems", text: "Practical UI foundations that turn repeated product needs into consistent experiences." },
  { number: "03", title: "Responsive product UI", text: "Interfaces shaped around real screens, touch targets, content hierarchy, and accessible interaction." },
  { number: "04", title: "Full-stack range", text: "Comfort moving from polished frontend flows to APIs, data models, and integration details." },
];

const resumePreview = "https://drive.google.com/file/d/150saF0j1619BSD4q1EGijU96TW_Z3vo7/view?usp=share_link";
const resumeDownload = "https://drive.google.com/uc?export=download&id=150saF0j1619BSD4q1EGijU96TW_Z3vo7";
const emailAddress = "rohitbelure128@gmail.com";

function openGmail() {
  const subject = encodeURIComponent("Portfolio inquiry - Rohit Belure");
  const body = encodeURIComponent("Hi Rohit,\n\nI reviewed your portfolio and would like to discuss a potential opportunity.\n\nRegards,\n[Your name]");
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
}

function CountUp({ value, suffix = "+" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 900, 1);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return <>{count}{suffix}</>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("theme") === "light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const sections = [...document.querySelectorAll("main, section[id]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id || "top");
    }, { rootMargin: "-18% 0px -65%", threshold: [0.1, 0.35, 0.7] });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    const moveGlow = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Rohit,\n\n${formState.message}\n\nRegards,\n${formState.name}\n${formState.email}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
    setStatus("A prefilled Gmail draft opened in a new tab.");
  };

  return (
    <div className={lightMode ? "portfolio-shell light-mode" : "portfolio-shell"}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="hero-surface">
        <header className={scrolled ? "site-header page-width scrolled" : "site-header page-width"}>
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Rohit Belure, home"><span className="brand-mark">RB<i>.</i></span><span>Rohit Belure</span></a>
          <button className="theme-button" onClick={() => setLightMode(!lightMode)} aria-label="Toggle color theme" title="Toggle color theme">{lightMode ? <Moon size={18} /> : <Sun size={19} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[["About", "about"], ["Work", "work"], ["Experience", "journey"], ["Impact", "achievements"], ["Expertise", "skills"], ["Contact", "contact"]].map(([label, id]) => <a className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={closeMenu} key={id}>{label}</a>)}
            <button className="nav-cta" onClick={openGmail}>Let&apos;s talk <ArrowUpRight size={15} /></button>
          </nav>
        </header>
        <main id="top">
          <section className="hero page-width">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="pulse" /> Available for work</p>
              <h1>Digital products,<br />built with <em>purpose.</em></h1>
              <p className="hero-description">I&apos;m Rohit Belure — a frontend developer from Latur, India, crafting high-performing web experiences with full-stack range.</p>
              <div className="hero-actions">
                <a className="button button-accent" href="#work">View selected work <ArrowUpRight size={18} /></a>
                <a className="resume-link" href={resumePreview} target="_blank" rel="noreferrer">Preview resume <ArrowUpRight size={16} /></a>
                <a className="resume-download" href={resumeDownload} download="Rohit-Belure-Resume.pdf" aria-label="Download resume"><Download size={16} /></a>
              </div>
            </div>
            <div className="hero-portrait reveal">
              <div className="portrait-orbit" />
              <div className="portrait-frame"><img src="/images/rohit.jpg" alt="Rohit Belure" /></div>
              <div className="portrait-note"><strong>Design-led engineering</strong><br />Frontend / Full-stack</div>
            </div>
          </section>
          <section className="hero-proof page-width">
            <div><strong><CountUp value={4} /></strong><span>Years learning<br />and building</span></div>
            <div><strong><CountUp value={10} /></strong><span>Projects shipped<br />across the web</span></div>
            <div><strong><CountUp value={19} suffix="" /></strong><span>Technologies in<br />the working toolkit</span></div>
            <div className="proof-note"><span className="pulse" /> Open to meaningful product conversations</div>
          </section>
        </main>
      </div>

      <section id="about" className="about page-width section-grid">
        <div className="section-label">01 / About</div>
        <div className="about-content">
          <h2>Clarity in the interface.<br />Confidence in the <span>code.</span></h2>
          <p>I translate product ideas into responsive, accessible experiences that feel simple — because the hard work happens behind the scenes.</p>
          <p>My work brings practical engineering and thoughtful design together, making each interaction useful, resilient, and easy to understand.</p>
          <a className="text-link" href="#contact">More about working together <ArrowDown size={15} /></a>
        </div>
      </section>

      <section id="work" className="work page-width">
        <div className="section-heading"><div><div className="section-label">02 / Selected work</div><h2>Systems built for <em>real intent.</em></h2></div><p>Live builds <ArrowUpRight size={16} /></p></div>
        <div className="project-list">{projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <a className="project-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><img src={project.image} alt={`${project.title} preview`} /><span>0{index + 1}</span></a>
            <div className="project-info"><p className="project-type">{project.category} <i /> {project.year}</p><h3>{project.title}</h3><p>{project.description}</p><ul className="outcomes">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">View live <ArrowUpRight size={14} /></a><a href={project.code} target="_blank" rel="noreferrer"><Github size={14} /> Source</a></div></div>
          </article>
        ))}</div>
      </section>

      <section id="achievements" className="impact-section"><div className="page-width impact-layout"><div><div className="section-label">03 / Selected impact</div><h2>Outcomes that matter<br /><em>beyond the code.</em></h2></div><div className="impact-grid"><div><strong>10+</strong><h3>Projects shipped</h3><p>Commerce, healthcare, fashion, and beauty experiences built for the web.</p></div><div><strong>04+</strong><h3>Years learning</h3><p>Consistent practice across frontend systems, APIs, and full-stack fundamentals.</p></div><div><strong>19</strong><h3>Core technologies</h3><p>A flexible toolkit for shaping complete product experiences from idea to interface.</p></div></div></div></section>

      <section className="expertise page-width"><div className="section-heading"><div><div className="section-label">04 / Engineering expertise</div><h2>Strong foundations.<br /><em>Thoughtful execution.</em></h2></div></div><div className="expertise-grid">{expertise.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section id="skills" className="skills-section"><div className="page-width skills-layout"><div><div className="section-label">05 / Technical skills</div><h2>A focused toolkit,<br />built for <em>real products.</em></h2><p>From visual detail to scalable code, every choice serves the product.</p></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="journey" className="journey page-width"><div className="section-label">06 / Journey</div><div className="journey-content"><h2>Learning by building,<br /><em>growing through practice.</em></h2><div className="timeline"><article><span>01</span><div><p className="timeline-meta">Frontend foundations</p><h3>Responsive interfaces</h3><p>Building clear layouts, reusable components, and thoughtful interactions across different screens.</p></div></article><article><span>02</span><div><p className="timeline-meta">Full-stack range</p><h3>Products beyond the surface</h3><p>Connecting frontend experiences to APIs, data, authentication, and the practical details behind the interface.</p></div></article><article><span>03</span><div><p className="timeline-meta">Now exploring</p><h3>More useful, more intentional</h3><p>Continuing to sharpen product thinking, accessibility, performance, and the craft of shipping complete experiences.</p></div></article></div></div></section>

      <section className="education-section"><div className="page-width education-layout"><div><div className="section-label">07 / Education</div><h2>Foundations for<br /><em>the work ahead.</em></h2></div><div className="education-list"><article><span>LEARNING PATH</span><h3>Frontend & full-stack development</h3><p>React, JavaScript, responsive design, APIs, state management, and database fundamentals.</p></article><article><span>CONTINUOUS PRACTICE</span><h3>Project-based learning</h3><p>Hands-on builds that turn concepts into complete, deployed product experiences.</p></article></div></div></section>

      <section id="contact" className="contact page-width"><div className="contact-intro"><div className="section-label">08 / Contact</div><h2>Have an interesting<br /><em>engineering problem?</em></h2><p>Tell me about the role, product, or problem you&apos;re solving. I&apos;ll get back to you within a day.</p><div className="contact-details"><button className="contact-email" onClick={openGmail}><Mail size={17} /> {emailAddress}</button><span><MapPin size={17} /> Latur, Maharashtra, India</span><div className="socials"><a href="https://github.com/RohitMBelure" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/rohit-belure-8b8369167/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div></div><form className="contact-form" onSubmit={submitForm}><label>Name<input name="name" value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} required placeholder="Your name" /></label><label>Email<input type="email" name="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} required placeholder="you@example.com" /></label><label>Message<textarea name="message" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} required rows="5" placeholder="Tell me a little about your project" /></label><button className="button button-dark" type="submit">Start a conversation <Send size={16} /></button>{status && <p className="form-status">{status}</p>}</form></section>
      <footer className="page-width footer"><span>© 2026 Rohit Belure · Built with care</span><span><a href="https://github.com/RohitMBelure" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/rohit-belure-8b8369167/" target="_blank" rel="noreferrer">LinkedIn</a></span><a className="back-to-top" href="#top" aria-label="Back to the top">Back to top ↑</a></footer>
    </div>
  );
}

export default Portfolio;
