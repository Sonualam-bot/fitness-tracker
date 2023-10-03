import styled from "styled-components";

export const DashCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 0.4rem;
 width : 200px;
 height: 200px;
 border-radius: 10px;
background-color: #21222D;
padding: 1rem;

h3 , p {
    font-size: 1.3rem;
}

img{
    width: 80px;
    height: 80px;
    object-fit: contain;
}

&:hover{
    box-shadow: 0 0 1px 1px #64748b;
}
`

export const Card = ({ children }) => {
    return (
        <DashCard>{children}</DashCard>
    )
}


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* margin-top: 4rem; */
`