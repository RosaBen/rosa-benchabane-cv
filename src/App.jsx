import cvData from "./assets/scripts/data"
import Header from "./components/Header"
import Experiences from "./components/Experiences"
import Formations from "./components/Formations"
import Techskills from "./components/Techskills"
import Softskills from "./components/Softskills"
import Hobbies from "./components/Hobbies"

import "./assets/styles/header.css"
import "./assets/styles/experiences.css"
import "./assets/styles/aside.css"

function App() {

const {title, name, contact, summary, experiences, formations, techSkills, softSkills, hobbies} = cvData

const handlePrint=()=> window.print()

  return (
    <>
    <button className="no-print" onClick={handlePrint}>🖨️ Imprimer / Exporter en PDF</button>
    <div className="cv-page">
    <Header 
    title={title} 
    name={name}
    tel={contact.phone}
    email={contact.email}
    portfolio={contact.portfolio}
    location={contact.city}
    />
<main>
    <section className="summary">
      <p><strong>Profil: </strong> {summary}</p>
    </section>
    <div className="main-column">
      <Experiences experiences = {experiences}/>
      <aside className="right-column">
        <section className="aside-list">
          <h2>Formation</h2>
          <Formations formations={formations}/>
        </section>
        <section className="aside-list">
          <h2>Compétences techniques</h2>
          <Techskills skills={techSkills}/>
        </section>
        <section className="aside-list">
          <h2>Savoir être</h2>
          <Softskills skills={softSkills}/>
        </section>
        <section className="aside-list">
          <h2>Centres d'intérêts</h2>
          <Hobbies hobbies={hobbies}/>
        </section>

      </aside>
    </div>
</main>
    </div>
    </>
  )
}

export default App
