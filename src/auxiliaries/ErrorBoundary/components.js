import styled from 'styled-components';

export const Style = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.h2`
    display: none;
`;

export const Text = styled.p`
    font-size: 32px;
    padding-bottom: 20px;
`;
export const Button = styled.button`
    background-color: gray;
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;    
    letter-spacing: 1px;
`;