import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map((beanie, i) => <BeanieBaby key={beanie.title + i} {...beanie} />)
      }
      {/* render out the beanie babies as a list */}
    </div>);
}
