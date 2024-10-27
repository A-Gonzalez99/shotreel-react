import './cardsProyects.css'
import React from 'react';



function CardProyects() {

    const db = [
        {
            tittle: 'Terrifier 3',
            imag: 'https://image.tmdb.org/t/p/original/xlkclSE4aq7r3JsFIJRgs21zUew.jpg'
        },
        {
            tittle: 'Beetlejuice Beetlejuice',
            imag: 'https://image.tmdb.org/t/p/original/vchI0KSlYgCInkAdBlDaxL9xhq5.jpg'
        },
        {
            tittle: 'Show',
            imag: 'https://image.tmdb.org/t/p/original/4BYt1Spo6YYj0zWliCoZurLlO2P.jpg'
        },
        {
            tittle: 'The Witches',
            imag: 'https://image.tmdb.org/t/p/original/jG7lEkKSsszu1UEvvXccjOQFt0F.jpg'
        },
        {
            tittle: 'The Wild Robot',
            imag: 'https://image.tmdb.org/t/p/original/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg'
        },
        {
            tittle: 'Venom: Let There Be Carnage',
            imag: 'https://image.tmdb.org/t/p/original/cxlIj6EMsOyHdpBvGPdjAEdRT51.jpg'
        },
    ]

  return ( 
    <>
        {db.map((b) => cardProp(b))}
    </>
  )
}

function cardProp(props) {
    return (
        <>
            <button className="cardProyect">
                <div className='panelTitleCard'>
                    <p>{props.tittle}</p>
                </div>
                <img src={props.imag} />
        
            </button>
        </>
    )
}

export default CardProyects