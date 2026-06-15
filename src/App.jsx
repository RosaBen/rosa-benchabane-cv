import cvData from "./assets/scripts/data"
import Header from "./components/Header"
import Experiences from "./components/Experiences"
import Formations from "./components/Formations"
import TechSkills from "./components/Techskills"

import "./assets/styles/header.css"
import "./assets/styles/experiences.css"
import "./assets/styles/aside.css"

function App() {

const {title, name, contact, summary, experiences, formations, techSkills} = cvData

  return (
    <>
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
        <div className="aside-list">
          <h2>Formation</h2>
          <Formations formations={formations}/>
        </div>
        <div className="aside-list">
          <h2>Compétences techniques</h2>
          <TechSkills skills={techSkills}/>
        </div>
      </aside>
    </div>
</main>
    </div>
    </>
  )
}

export default App
