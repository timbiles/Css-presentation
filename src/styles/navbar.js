import styled, { css } from 'styled-components';

export const Nav = styled.div`
    margin-bottom: 4%;
    padding: 1% 0;
    background: #05ff01;
    display: flex;
    flex-direction: column;  
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavImg = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    width: auto;
    height: 60px;
`

export const Paragraph = styled.p`
    font-size: 1em;

    ${props => props.primary && css`
        background: #015900;
        color: #05ff01;
    `}
`