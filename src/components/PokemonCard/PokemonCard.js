import {useState} from 'react'
import s from './PokemonCard.module.css'

import cardBackSide from './img/card-back-side.jpg'

const PokemonCard = ({name,img,id, type,values}) => {

    const [isActive, setActive] = useState(false)

    const HandlerClick = () =>{
        setActive(!isActive);
    }

    const NAMES = [
        'Mark',
        'Robert',
        'Watt',
        'Jacob',
        'Mikel',
        'David',
        'Jim',
        'Kim'
    ]

    function getRandomName(){
        const index = Math.floor(Math.random() * NAMES.length)
        return NAMES[index]
    }
    return(
        <div className={s.root} onClick={HandlerClick}>
            <div className={`${s.pokemonCard} ${isActive ? s.active : ''}`}>
                <div className={s.cardFront}>
                    <div className={`${s.pokemon} ${s[type]}`}>
                        <div className={s.values}>
                            <div className={`${s.count} ${s.top}`}>{values.top}</div>
                            <div className={`${s.count} ${s.right}`}>{values.right}</div>
                            <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                            <div className={`${s.count} ${s.left}`}>{values.left}</div>
                        </div>

                        <div className={s.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>

                        <div className={s.imgContainer}>
                            <span className={s.number}>
                                #{id}
                            </span>

                            <h3 className={s.name}>
                                {getRandomName()}
                            </h3>

                            <small className={s.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={cardBackSide} alt={name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokemonCard;



