import React from 'react';
import * as S from './Form.styles.js';

export const Form = () => {
    return (
        <S.Form action="">
            <h2>Hello World</h2>
            <S.Flex>
                <div>
                    <label htmlFor="name">First Name</label>
                    <S.Input required name="name" type="text" placeholder="First Name" />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <S.Input required name="dob" placeholder="MM/DD/YYYY" />
                </div>
            </S.Flex>
            <S.Flex>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <S.Input required name="phone" placeholder="000-000-0000" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <S.Input required name="email" type="email" placeholder="email@domain.com" />
                </div>
            </S.Flex>
            <S.Button initial="initial" whileHover="hover" whileTap="tap" variants={S.buttonVariants}>
                SAVE NOW
            </S.Button>
        </S.Form>
    );
};

export default Form;
