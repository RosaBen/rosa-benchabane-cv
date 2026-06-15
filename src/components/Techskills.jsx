export default function TechSkills({skills}){
  const skillsList =skills.map((skill, i)=>(
    <div className="tech" key={i}>
      <p><strong>{skill.cat}: </strong>{skill.items}</p>
    </div>
  ))
  return (
    <>{skillsList}</>
  )
}