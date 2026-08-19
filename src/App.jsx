import { useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, Send, X } from 'lucide-react';

const projects = [
  { title: 'Jio Mart Experience', type: 'Commerce platform', description: 'A polished e-commerce flow with product discovery, authentication, cart state, and checkout interactions.', stack: ['React', 'Redux', 'Chakra UI'], image: '/images/jio_mart_clone.png', live: 'https://jiomart-app.netlify.app/', code: 'https://github.com/RohitMBelure/prickly-partner_25' },
  { title: 'Tata 1mg Platform', type: 'Full-stack application', description: 'A healthcare commerce clone with searchable products, detail views, authentication, and a Node API.', stack: ['MongoDB', 'Express', 'React', 'Node'], image: '/images/tata_1mg_clone.png', live: 'https://tata-1mg-clone-sage.vercel.app/', code: 'https://github.com/sonuprasad66/omniscient-sheet-6598' },
  { title: 'S-SENSE Storefront', type: 'Frontend build', description: 'A responsive fashion storefront focused on clean browsing, product storytelling, and practical UI details.', stack: ['JavaScript', 'CSS', 'Responsive UI'], image: '/images/s_sense_clone.png', live: 'https://tangerine-bublanina-ddee4c.netlify.app/', code: 'https://github.com/RohitMBelure/Project-SSENSE' },
  { title: 'SUGAR Cosmetics', type: 'Commerce interface', description: 'A colorful cosmetics shopping experience with category browsing and a mobile-first layout.', stack: ['HTML', 'CSS', 'JavaScript'], image: '/images/sugar_cosmetic_clone.PNG', live: 'https://beautiful-nasturtium-8b89b4.netlify.app/', code: 'https://github.com/RohitMBelure/Project_Sugar_Cosmetics' }
];

const skills = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'React Query', 'Responsive UI', 'Accessibility', 'REST APIs', 'Jest', 'Storybook', 'Git', 'Figma', 'Node.js', 'Express', 'MongoDB'];

const resumePreview = 'https://drive.google.com/file/d/150saF0j1619BSD4q1EGijU96TW_Z3vo7/view?usp=share_link';
const resumeDownload = 'https://drive.google.com/uc?export=download&id=150saF0j1619BSD4q1EGijU96TW_Z3vo7';
const emailAddress = 'rohitbelure128@gmail.com';

function openGmail() {
  const subject = encodeURIComponent('Portfolio inquiry - Rohit Belure');
  const body = encodeURIComponent('Hi Rohit,\n\nI reviewed your portfolio and would like to discuss a potential opportunity. I am reaching out regarding [a job opportunity / a project].\n\nHere are the details:\n- Company: \n- Role or project: \n- Location / work setup: \n- Next steps: \n\nPlease let me know a convenient time to connect.\n\nRegards,\n[Your name]');
  const webCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `googlegmail://co?to=${emailAddress}&subject=${subject}&body=${body}`;
    window.setTimeout(() => { window.location.href = webCompose; }, 900);
    return;
  }

  window.open(webCompose, '_blank', 'noopener,noreferrer');
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const updateField = (event) => setFormState({ ...formState, [event.target.name]: event.target.value });
  const submitForm = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formState) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus(data.message);
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please email me directly.');
    }
  };

  return <>
    <header className="site-header">
      <a className="brand" href="#top">RB<span>.</span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['about', 'work', 'skills', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <button className="nav-cta" onClick={openGmail}>Let's talk <ArrowUpRight size={16} /></button>
      </nav>
    </header>

    <main id="top">
      <section className="hero page-width">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="pulse" /> Available for meaningful projects</p>
          <h1>I build useful <em>digital products</em> for the web.</h1>
          <p className="hero-description">I'm Rohit Belure, a frontend developer from Latur, India with full-stack range. I turn ambitious ideas into fast, clear, and resilient experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">See my work <ArrowUpRight size={18} /></a><div className="resume-actions"><a className="text-link" href={resumePreview} target="_blank" rel="noreferrer">Preview resume <ArrowUpRight size={16} /></a><a className="resume-download" href={resumeDownload} download="Rohit-Belure-Resume.pdf"><Download size={15} /> Download PDF</a></div></div>
        </div>
        <div className="hero-portrait reveal"><div className="portrait-frame"><img src="/images/rohit.jpg" alt="Rohit Belure" /></div><div className="portrait-note">Frontend craft<br /><strong>with full-stack range</strong></div></div>
      </section>

      <section id="about" className="about page-width section-grid"><div className="section-label">01 / About</div><div className="about-content"><h2>Curious by default.<br /><span>Precise by practice.</span></h2><p>I care about the space between a good idea and a good product. My work combines practical engineering with an eye for interfaces that feel obvious to use.</p><p>From responsive frontends to backend services, I enjoy owning the full journey and making each layer simpler, more dependable, and more human.</p><div className="facts"><div><strong>04+</strong><span>Years learning<br />and building</span></div><div><strong>10+</strong><span>Projects shipped<br />across the web</span></div></div></div></section>

      <section id="work" className="work page-width"><div className="section-heading"><div className="section-label">02 / Selected work</div><p>Recent experiments and builds <span>↘</span></p></div><div className="project-list">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} preview`} /><span>0{index + 1}</span></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">View live site <ArrowUpRight size={15} /></a><a href={project.code} target="_blank" rel="noreferrer"><Github size={15} /> View source</a></div></div></article>)}</div></section>

      <section id="skills" className="skills-section page-width section-grid"><div className="section-label">03 / Toolkit</div><div><h2>Tools for turning<br /><span>thought into thing.</span></h2><div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={index % 3 === 0 ? 'skill-featured' : ''}>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact page-width"><div className="contact-intro"><div className="section-label">04 / Contact</div><h2>Have a good idea?<br /><em>Let's make it real.</em></h2><p>Tell me a little about what you're building. I usually reply within a day.</p><div className="contact-details"><button className="contact-email" onClick={openGmail}><Mail size={17} /> {emailAddress}</button><span><MapPin size={17} /> Latur, Maharashtra, India</span><div className="socials"><a href="https://github.com/RohitMBelure" target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span></a><a href="https://www.linkedin.com/in/rohit-belure-8b8369167/" target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span></a></div></div></div><form className="contact-form" onSubmit={submitForm}><label>Name<input name="name" value={formState.name} onChange={updateField} required placeholder="Your name" /></label><label>Email<input type="email" name="email" value={formState.email} onChange={updateField} required placeholder="you@example.com" /></label><label>Message<textarea name="message" value={formState.message} onChange={updateField} required rows="5" placeholder="What are you working on?" /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button>{status && <p className="form-status">{status}</p>}</form></section>
    </main>
    <footer className="page-width footer"><span>© 2026 Rohit Belure</span><span>Built with care <span className="accent">✦</span></span></footer>
  </>;
}

export default App;
