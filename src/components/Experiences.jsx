export default function Experiences({experiences}){

  const allexperiences = experiences.map((exp, i) => (
          <div key={i} className="exp-block">
      <div className="exp-header">
        <span>{exp.title}</span>
        <span>{exp.date}</span>
      </div>
      <div className="exp-sub">
        {exp.company} - {exp.location}
      </div>
      <ul className="tasks">
        {exp.tasks.map((task, j)=> (
          <li key={j}>{task}</li>
        ))}
      </ul>
      <span style={{backgroundColor: exp.kpi === ""? "white": "#dbeafe"}}>{exp.kpi}</span>
        <hr />
    </div>
  ))


  return(
    <section className="experiences">
      <h2>Expériences professionnelles</h2>
      {allexperiences}
    </section>
  )
}