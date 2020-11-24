import React from 'react';
import * as S from './Table.styles';
import * as GS from '../../global/styled';

import car from '../../assets/car.png';
import allstate from '../../assets/allstate-blue.png';
import geico from '../../assets/geico.png';
import progressive from '../../assets/progressive.png';

import useWindowSize from '../../hooks/useWindowSize';

const contents = [
	{
		copy: 'Auto Insurance',
		allstate: '$99/Month',
		geico: '$110/Month',
		statefarm: '$120/Month',
	},
	{
		copy: 'Auto & Home Bundle',
		allstate: '$150/Month',
		geico: '$192/Month',
		statefarm: '$198/Month',
	},
	{
		copy: 'Auto, Home & Life',
		allstate: '$175/Month',
		geico: '$275/Month',
		statefarm: '$255/Month',
	},
];

const INITIAL_STATE = {
	width: undefined,
	height: undefined,
};

const Table = () => {
	const size = useWindowSize(INITIAL_STATE);
	return (
		<S.Container>
			<GS.Copy>
				<h2>The competition can’t beat our numbers.</h2>
			</GS.Copy>
			<S.TableContainer className={size.width <= 1100 ? 'table-container' : undefined}>
				<S.MainTable className='table is-bordered is-hoverable'>
					<thead>
						<tr>
							<S.CarHeader>
								<img src={car} alt='Save on your auto insurance' />
							</S.CarHeader>
							<S.LogoHeader>
								<img src={allstate} alt='All State' />
							</S.LogoHeader>
							<S.LogoHeader>
								<img src={geico} alt='Geico' />
							</S.LogoHeader>
							<S.LogoHeader>
								<img src={progressive} alt='Progressive' />
							</S.LogoHeader>
						</tr>
					</thead>
					<tbody>
						{contents.map((content) => (
							<tr key={content.copy}>
								<th>{content.copy}</th>
								<S.Td>{content.allstate}</S.Td>
								<td>{content.geico}</td>
								<td>{content.statefarm}</td>
							</tr>
						))}
					</tbody>
				</S.MainTable>
			</S.TableContainer>
			<S.TableFooter>
				<h2>Drivers who switch saves an average of $360 a year.</h2>
				<p>Average monthly premium. Prices may vary based on age, driving history, and more.</p>
			</S.TableFooter>
		</S.Container>
	);
};

export default Table;
