import cvData from "./assets/scripts/data"
import Header from "./components/Header"
import Experiences from "./components/Experiences"

function App() {

const {title, name, contact, summary, experiences} = cvData

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
    <div className="main">
      <Experiences experiences = {experiences}/>
    </div>
</main>
    </div>
    </>
  )
}

export default App
