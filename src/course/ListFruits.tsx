import appleImg from '../assets/img/apple.jpg';
import bananaImg from '../assets/img/banana.webp';
import cherryImg from '../assets/img/cherry.jpg';
import grapesImg from '../assets/img/grapes.webp';
import mangoImg from '../assets/img/mango.jpeg';

type Fruit = {
    name: string;
    image: string;
    description: string;
};

const fruits: Fruit[] = [
    {
        name: 'Apple',
        image: appleImg,
        description: 'Apel adalah buah yang kaya akan serat dan vitamin C, rasanya manis dan sedikit asam.'
    },
    {
        name: 'Banana',
        image: bananaImg,
        description: 'Pisang adalah buah tropis yang kaya potasium, teksturnya lembut dan rasanya manis.'
    },
    {
        name: 'Cherry',
        image: cherryImg,
        description: 'Ceri adalah buah kecil berwarna merah, rasanya manis atau asam dan kaya antioksidan.'
    },
    {
        name: 'Grapes',
        image: grapesImg,
        description: 'Anggur adalah buah bulat kecil yang tumbuh bergerombol, rasanya manis dan segar.'
    },
    {
        name: 'Mango',
        image: mangoImg,
        description: 'Mangga adalah buah tropis berdaging kuning, rasanya manis dan sangat populer di Indonesia.'
    }
];

const ListFruits = () => {
    return (
        <div>
            <h2>List of Fruits</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {fruits.map((fruit) => (
                    <li key={fruit.name} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                        <img src={fruit.image} alt={fruit.name} width={60} style={{ marginRight: '16px', borderRadius: '8px' }} />
                        <div>
                            <strong>{fruit.name}</strong>
                            <p style={{ margin: 0, fontSize: '0.95em', color: '#555' }}>{fruit.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListFruits;
