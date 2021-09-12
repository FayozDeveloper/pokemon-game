import s from './App.module.css';
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import Footer from "./components/footer/footer";
import firstImg from '../src/image/wp4676574-4k-pc-wallpapers.jpg'
import secondImg from '../src/image/wp4676582-4k-pc-wallpapers.jpg'
import PokemonCard from "./components/PokemonCard/PokemonCard";


const POKEMONS = [
    {
        "abilities": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 71
        },
        "type": "flying",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "base_experience": 122,
        "height": 11,
        "id": 17,
        "values": {
            "top": "A",
            "right": 2,
            "bottom": 7,
            "left": 5
        }
    },
    {
        "abilities": [
            "intimidate",
            "shed-skin",
            "unnerve"
        ],
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "special-attack": 65,
            "special-defense": 79,
            "speed": 80
        },
        "type": "poison",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "name": "arbok",
        "base_experience": 157,
        "height": 35,
        "id": 24,
        "values": {
            "top": 5,
            "right": 9,
            "bottom": "A",
            "left": "A"
        }
    },
    {
        "abilities": [
            "static",
            "lightning-rod"
        ],
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 90
        },
        "type": "electric",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "name": "pikachu",
        "base_experience": 112,
        "height": 4,
        "id": 25,
        "values": {
            "top": 8,
            "right": "A",
            "bottom": 9,
            "left": 6
        }
    },
    {
        "abilities": [
            "overgrow",
            "chlorophyll"
        ],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special-attack": 65,
            "special-defense": 65,
            "speed": 45
        },
        "type": "grass",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "name": "bulbasaur",
        "base_experience": 64,
        "height": 7,
        "id": 1,
        "values": {
            "top": 8,
            "right": 4,
            "bottom": 2,
            "left": 7
        }
    },
    {
        "abilities": [
            "blaze",
            "solar-power"
        ],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special-attack": 60,
            "special-defense": 50,
            "speed": 65
        },
        "type": "fire",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "name": "charmander",
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "values": {
            "top": 7,
            "right": 6,
            "bottom": 1,
            "left": 4
        }
    }
]

const App =() => {

  return (
    <>
        <Header
            title={'Pokemon Game'}
            desc={'This is simple triple triad card game'}/>
        <Layout
            id={'rules'}
            title={"Rules"}
            desc={'First Layout Desc'}
            urlBg={firstImg} >

            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
            </p>

        </Layout>
        <Layout
            id={'cards'}
            title={'Cards'}
            colorBg='red'
            desc={'Second Layout Desc'}
        >
            <div className={s.flex}>
                {
                    POKEMONS.map((item,index) =>
                        <PokemonCard
                            key={index}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                        />)
                }
            </div>

        </Layout>
        <Layout
            id={'about'}
            urlBg={secondImg}
            title={'About'}
            desc={'Third Layout Desc'}>

            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
            </p>
        </Layout>
        <Footer/>
    </>
  );
}

export default App
