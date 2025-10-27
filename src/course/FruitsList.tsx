import appleImg from '../assets/img/apple.jpg';
import bananaImg from '../assets/img/banana.webp';
import cherryImg from '../assets/img/cherry.jpg';
import grapesImg from '../assets/img/grapes.webp';
import mangoImg from '../assets/img/mango.jpeg';


type FruitProps = {
  name: string;
  image: string;
  description: string;
};

const FruitsList = ({ name, image, description }: FruitProps) => {
  return (
    <div className="w3-container" style={{ maxWidth: 500, margin: '0 auto' }}>
      <div className="w3-card-4 w3-center" style={{ marginBottom: '32px', padding: '16px' }}>
        <img src={image} alt={name} style={{ width: '100%', maxWidth: 200, borderRadius: '8px', margin: '0 auto' }} />
        <div className="w3-container w3-center">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitsList;

