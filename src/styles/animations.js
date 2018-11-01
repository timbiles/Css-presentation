import styled, { keyframes } from 'styled-components';

export const Rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
    height: 40px;
    width: 40px;
    background: blue;
    animation: ${Rotate} 2s linear infinite;
`