import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    border-radius: 5px;
    padding: ${props => props.primary ? "1px 3px" : "30px"};
    width: max-content;
    color: #015900;
    border: 1px solid #015900;
` 