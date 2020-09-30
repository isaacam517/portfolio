import styled from 'styled-components'

export const SobreMimContainer = styled.div`
    color: #ffffff;
    width:100%;
    height:60vh;
    background-color: #063447;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8%;    

`
export const TextoSobreMim = styled.div`
    margin-left:15%;
    justify-content: center;    
    display: flex;
    flex-direction: column;
    width: 30%;
    h2 {
        font-family: Montserrat;
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;
    }
    p {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.16px;
        color: #ffffff;
    }
    a {
        width: 40%;
       button{
        width: 100%;
       } 
    }
    `



export const Button = styled.button`
        cursor: pointer;
        border-radius: 8px;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #bf213e;
        padding: 4%;
        width: 40%;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        color: #ffffff;
`



export const Avatar = styled.div`
    img {
        width: 50%;
        display: flex;
    }
`