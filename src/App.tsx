



import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, User } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [ongletActif, setOngletActif] = useState('accueil');
  const [formulaire, setFormulaire] = useState({ nom: '', email: '', message: '' });

  const projets = [
    {
      titre: "Application E-commerce",
      description: "Site de vente en ligne avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      couleur: "#3B82F6"
    },
    {
      titre: "Réseau Social",
      description: "Plateforme de partage de photos et messages",
      technologies: ["React", "Firebase", "Tailwind"],
      couleur: "#A855F7"
    },
    {
      titre: "Gestion de Tâches",
      description: "Application de productivité et organisation",
      technologies: ["React", "TypeScript", "API REST"],
      couleur: "#10B981"
    }
  ];

  const competences = [
    { nom: "HTML/CSS", niveau: 90 },
    { nom: "JavaScript", niveau: 85 },
    { nom: "React", niveau: 80 },
    { nom: "Node.js", niveau: 75 },
    { nom: "Git/GitHub", niveau: 70 }
  ];

  const handleInputChange = (e) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé!\nNom: ${formulaire.nom}\nEmail: ${formulaire.email}`);
    setFormulaire({ nom: '', email: '', message: '' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">MonPortfolio</div>
          
          {/* Menu Desktop */}
          <div className="nav-menu-desktop">
            <button 
              onClick={() => setOngletActif('accueil')} 
              className={ongletActif === 'accueil' ? 'active' : ''}
            >
              Accueil
            </button>
            <button 
              onClick={() => setOngletActif('projets')}
              className={ongletActif === 'projets' ? 'active' : ''}
            >
              Projets
            </button>
            <button 
              onClick={() => setOngletActif('competences')}
              className={ongletActif === 'competences' ? 'active' : ''}
            >
              Compétences
            </button>
            <button 
              onClick={() => setOngletActif('contact')}
              className={ongletActif === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </div>

          {/* Bouton Menu Mobile */}
          <button className="menu-toggle" onClick={() => setMenuOuvert(!menuOuvert)}>
            {menuOuvert ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOuvert && (
          <div className="nav-menu-mobile">
            <button onClick={() => { setOngletActif('accueil'); setMenuOuvert(false); }}>
              Accueil
            </button>
            <button onClick={() => { setOngletActif('projets'); setMenuOuvert(false); }}>
              Projets
            </button>
            <button onClick={() => { setOngletActif('competences'); setMenuOuvert(false); }}>
              Compétences
            </button>
            <button onClick={() => { setOngletActif('contact'); setMenuOuvert(false); }}>
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Contenu */}
      <div className="content">
        {/* Section Accueil */}
        {ongletActif === 'accueil' && (
          <section className="section-accueil">
            <div className="accueil-content">
              <div className="icon-container">
                <User size={80} />
              </div>
              <h1 className="titre-principal">Développeur Web</h1>
              <p className="sous-titre">Créateur d'expériences web modernes et interactives</p>
              <div className="boutons">
                <button className="btn btn-primary" onClick={() => setOngletActif('projets')}>
                  Voir mes projets
                </button>
                <button className="btn btn-secondary" onClick={() => setOngletActif('contact')}>
                  Me contacter
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Section Projets */}
        {ongletActif === 'projets' && (
          <section className="section-projets">
            <div className="section-header">
              <Briefcase size={40} />
              <h2>Mes Projets</h2>
            </div>
            <div className="projets-grid">
              {projets.map((projet, index) => (
                <div key={index} className="projet-card">
                  <div className="projet-image" style={{ backgroundColor: projet.couleur }}>
                    <Code size={64} />
                  </div>
                  <div className="projet-content">
                    <h3>{projet.titre}</h3>
                    <p>{projet.description}</p>
                    <div className="technologies">
                      {projet.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section Compétences */}
        {ongletActif === 'competences' && (
          <section className="section-competences">
            <div className="section-header">
              <Code size={40} />
              <h2>Compétences</h2>
            </div>
            <div className="competences-container">
              {competences.map((comp, index) => (
                <div key={index} className="competence-card">
                  <div className="competence-header">
                    <span className="competence-nom">{comp.nom}</span>
                    <span className="competence-niveau">{comp.niveau}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${comp.niveau}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section Contact */}
        {ongletActif === 'contact' && (
          <section className="section-contact">
            <div className="contact-container">
              <div className="section-header">
                <Mail size={40} />
                <h2>Contact</h2>
              </div>
              
              <div className="contact-form">
                <div className="form-group">
                  <label>Nom</label>
                  <input 
                    type="text"
                    name="nom"
                    value={formulaire.nom}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formulaire.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    value={formulaire.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button className="btn btn-submit" onClick={handleSubmit}>
                  Envoyer le message
                </button>
              </div>

              <div className="social-links">
                <a href="#" className="social-icon">
                  <Github size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}