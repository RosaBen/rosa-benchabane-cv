export default function Softskills({skills}){
  const skillsList = skills.map((skill, i)=>(
    <li key={i}>{skill}</li>
  ))
  return(
    <ul>
      {skillsList}
    </ul>
  )
}