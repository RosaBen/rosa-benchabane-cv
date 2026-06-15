import cvData from "./assets/scripts/data"
import Header from "./components/Header"
import Experiences from "./components/Experiences"
import Formations from "./components/Formations"

function App() {

const {title, name, contact, summary, experiences, formations} = cvData

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
        <div>
          <h2>Formation</h2>
          <Formations formations={formations}/>
        </div>
      </aside>
    </div>
</main>
    </div>
    </>
  )
}

export default App
