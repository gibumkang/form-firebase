import React from 'react';
import styled from 'styled-components';
import Form from '../Form'
import * as S from './CTA.styles.js';
import * as GS from '../../global/styled'

const CTA = () => {
    return (
        <S.Container>
            <div>
                <GS.Copy>
                    <h1>It takes less than 5 minutes to get a quote.</h1>
                    <GS.Block />
                    <p>If you already have insurance, there’s very little work required to check for a lower rate.</p>
                </GS.Copy>
            </div>
            <div><Form /></div>
        </S.Container>
    )
}

export default CTA;