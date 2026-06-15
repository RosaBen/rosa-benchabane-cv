export default function Formations({formations}){
  const formationsList = formations.map((formation, i)=>(
            <div key={i} className="formation">
              <h6>{formation.formation}</h6>
              <p>{formation.date}</p>
              <p>{formation.school}</p>
            </div>
  ))
  return(
    <>
    {formationsList}
    </>
  )
}