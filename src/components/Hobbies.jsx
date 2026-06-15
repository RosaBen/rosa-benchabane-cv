export default function Hobbies({hobbies}){

  const hobbiesList = hobbies.map((hobby, i)=>(
    <li key={i}>
      {hobby}
    </li>
  ))
  return(
    <ul>
      {hobbiesList}
    </ul>
  )
}