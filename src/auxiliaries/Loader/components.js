import styled from 'styled-components';

export const LoaderStyle = styled.div`
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border-top: 5px solid rgb(17, 77, 32);
    border-left: 3px solid rgb(236, 236, 236);
    border-bottom: 1px solid rgb(19, 18, 19);
    border-right: transparent;
    animation: spinner 1.8s linear infinite; 
    @keyframes spinner{
        0%{
            transform: rotate(0deg);
        }
        100%{
        transform: rotate(360deg);
        }
    }
`;