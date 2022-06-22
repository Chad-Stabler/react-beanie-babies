import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  // you'll need to get the route param using the appropriate react router hook
  const params = useParams();
  const [beanie, setBeanie] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await getSingleBeanie(params.id);

      setBeanie(data);
    }
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    fetch();
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}
      
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{beanie.animal}</p>
          <p>{beanie.title}</p>
          <p>Zodiac: {beanie.astroSign}</p>
          <p> Born on {beanie.birthday}</p>
          <img className='beanie-img' src={beanie.image}/>
          <p>Color: {beanie.color}</p>
          <p>Release Date: {beanie.releaseDate}</p>
          <p>Retirement Date: {beanie.retirementDate}</p>

          <p>Size: {beanie.size}</p>
          <p>Theme: {beanie.theme}</p>
          <p>Sub-Theme: {beanie.subtheme}</p>
          <p>Style Number: {beanie.styleNumber}</p>
          <p>Swing Tag Generation: {beanie.swingTagGeneration}</p>
          <p>Tush Tag Generation: {beanie.tushTagGeneration}</p>
        </div>
      </div>  
    </>
  );
}
