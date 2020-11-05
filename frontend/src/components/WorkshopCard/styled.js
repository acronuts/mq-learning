import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';
import cardBg from '../../assets/images/card_bg.jpg'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 50rem;
    margin: 1rem;
    background: ${colors.white};
    border-radius: 1.5rem;
    padding: 1rem 1rem;
    cursor: pointer;
`;

export const ContentWrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    height: auto;
    color: ${colors.black};
  
`;

export const ReserveBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

`;

