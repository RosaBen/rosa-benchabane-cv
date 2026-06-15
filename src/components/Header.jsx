export default function Header({title, name, tel, email, portfolio, location}){
return (
    <header>
    <h1>{title}</h1>
    <p>{name}</p>
    <div>
      <span><a href="tel:+33642228582">📞 {tel}</a></span>
      <span><a href="mailto:benchabane.rosa@outlook.com">✉ {email}</a></span>
      <span><a href={portfolio}>🌐 Portfolio</a></span>
      <span>📍 {location}</span>
    </div>
  </header>
)
}