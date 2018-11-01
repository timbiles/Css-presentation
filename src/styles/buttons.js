import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    border-radius: 5px;
    padding: ${props => props.primary ? "5px" : "2px 3px"};
    width: max-content;
    color: #015900;
    border: 1px solid #015900;
` 