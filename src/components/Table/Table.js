import React, {Fragment} from 'react';
import * as S from './Table.styles';
import * as GS from '../../global/styled';

import car from '../../assets/car.png';
import allstate from '../../assets/allstate.svg'

const contents = [
    {
        copy: 'Auto Insurance',
        allstate: '$99/Month',
        geico: '$GAI/Month',
        statefarm: '$SAI/Month',
    },
    {
        copy: 'Auto + Home Bundle',
        allstate: '$159/Month',
        geico: '$GAI2/Month',
        statefarm: '$SAI2/Month',
    },
    {
        copy: 'Auto + Home + Life',
        allstate: '$199/Month',
        geico: '$GAI3/Month',
        statefarm: '$SAI3/Month',
    },
]

const Table = () => {
    return (
        <S.Container>
        <GS.Copy><h2>The competition can’t beat our numbers.</h2></GS.Copy>
        <div className="table-container">
            <S.MainTable className="table is-bordered is-hoverable is-striped">
            <thead>
                <tr>
                    <S.CarHeader><img src={car} alt=""/></S.CarHeader>
                    <S.LogoHeader><img src={allstate} /></S.LogoHeader>
                    <S.LogoHeader>Geico</S.LogoHeader>
                    <S.LogoHeader>State Farm</S.LogoHeader>
                </tr>
            </thead>
            <tbody>
                {contents.map(content => (
                    <tr key={content.copy}>
                        <th>{content.copy}</th>
                        <S.Td>{content.allstate}</S.Td>
                        <td>{content.geico}</td>
                        <td>{content.statefarm}</td>
                    </tr>
                ))}
            </tbody>
            </S.MainTable>
        </div>
        </S.Container>
    )
}

export default Table;
