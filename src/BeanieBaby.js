import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, image, title, astroSign }) {
  return (<div>
    {
      <Link to={`/beanie/${id}`}>
        <div className='beanie'>
          <h3>{title}</h3>
          <p>{astroSign}</p>
          <img src={image}/>
        </div>
      </Link>
    }
  </div>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
