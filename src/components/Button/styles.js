import styled from "styled-components";

export const Button = styled.button`
        border: ${ props => 
            props.theme === 'primary' 
            ? 'none' 
            : '1px solid (linear-gradient(180deg, #8f8f8fff 0%, #050001ff 100%)))'};
        background: ${ props => 
            props.theme  === 'primary' 
            ? 'linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)'
            : 'transparent'};
        font-size: 16px;
        color: #fff;
        padding: 16px 32px;
        width: fit-content;
        cursor: pointer;
        border-radius: 30px;

        &:hover{ 
            background: ${ props => 
                props.theme === 'primary'
                ? 'opacity: 0.8'
                : 'linear-gradient(180deg, #050001ff 0%, #8f8f8fff 100%)'};
            transform: scale(1.30);
            transition: 0.9s;
            
        }

        &:active{
            background: ${ props => 
                props.theme === 'primary'
                ? 'opacity: 0.3'
                : 'linear-gradient(180deg, #050001ff 0%, #8f8f8fff 100%)'};
            transform: scale(1.30);
            transition: 0.5s;
        }

`