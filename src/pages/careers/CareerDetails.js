import { useLoaderData, useParams } from "react-router-dom"


export default function CareerDetails() {
  const { id } = useParams();
  const careerDetails = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {careerDetails.title}</h2>
      <p>Starting Salary {careerDetails.salary}</p>
      <p>Location: {careerDetails.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet. Ab similique vero in quia eligendi eum quas saepe. Qui cumque reiciendis id provident perspiciatis sit repudiandae tempore quo enim rerum vel accusamus dolores. Ut ullam deserunt non ullam facere qui labore animi aut ducimus omnis.</p>
      </div>
    </div>
  )
}


export const careerDetailsLoader = async ( { params }) => {
 const { id } = params;
 const res = await fetch ('http://localhost:4000/careers/' + id);
 return res.json();
}