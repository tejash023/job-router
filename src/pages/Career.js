import { useLoaderData, Link } from "react-router-dom";


export default function Career() {
  const careers = useLoaderData();

  return (
    <div className='careers'>
      {careers!=null ? careers.map(career => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      )) : <h4>Oops! There is some issue displaying the careers. Please try after sometime.</h4>}
      
    </div>
  )
}


//loader function
export const careersLoader = async () => {
  try{
    const res = await fetch('http://localhost:4000/careers')
    return res.json();
  }catch{
    return null;
  }
}