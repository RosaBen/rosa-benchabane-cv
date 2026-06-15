export default function Header({title, name, tel, email, portfolio, location}){
return (
    <header>
    <h1>{title}</h1>
    <p>{name}</p>
    <div className="contact">
      <span><a href="tel:+33642228582">📞 {tel}</a></span>
      <span><a href="mailto:benchabane.rosa@outlook.com">✉ {email}</a></span>
      <span><a href={portfolio} target="_blank">🌐 Portfolio</a></span>
      <span><a href="https://maps.app.goo.gl/vGa6jdgRD7Qc1hsx5" target="_blank">📍 {location}</a></span>
    </div>
  </header>
)
}