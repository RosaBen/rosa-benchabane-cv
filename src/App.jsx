import cvData from "./assets/scripts/data"
import Header from "./components/Header"

function App() {

const {title, name, contact} = cvData

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
    </div>
    </>
  )
}

export default App
