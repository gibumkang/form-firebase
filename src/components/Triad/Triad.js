import React from 'react';
import * as S from './Triad.styles';
import eye from '../../assets/eyeball.svg';
import piggybank from '../../assets/piggybank.svg';
import car from '../../assets/car.svg';

const contents = [
    {
        image: eye,
        alt: 'alt 1',
        header: 'Stop Looking.',
        body: 'Our local representatives are here to help you obtain the <strong>lowest possible rates.</strong>',
    },
    {
        image: piggybank,
        alt: 'alt 2',
        header: 'Start Saving.',
        body: 'Allstate offers the lowest insurance rates when you <strong>bundle</strong> your home/renters insurance.',
    },
    {
        image: car,
        alt: 'alt 3',
        header: 'Safety First.',
        body: 'Enjoy more savings by being a <strong>safe driver</strong>. It’s our way of saying thanks for being responsible.',
    }
]

const Triad = () => {
    return (
        <S.Container>
            {contents.map(content => (
                <S.Ad key={content.header}>
                    <img src={content.image} alt={content.alt} />
                    <h2>{content.header}</h2>
                    {/* safe to use if the data is originating from a trused API or locally protected source */}
                    <p dangerouslySetInnerHTML={{__html: content.body}} />
                </S.Ad>
            ))}
        </S.Container>
    )
}

export default Triad;