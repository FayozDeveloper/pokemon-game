import s from './App.module.css';
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import Footer from "./components/footer/footer";
import firstImg from '../src/image/wp4676574-4k-pc-wallpapers.jpg'
import secondImg from '../src/image/wp4676582-4k-pc-wallpapers.jpg'
import PokemonCard from "./components/PokemonCard/PokemonCard";
import POKEMONS from "./components/PokemonCard/PkInfo";


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
