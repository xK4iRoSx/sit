import{ styled } from "styled-components"

export const ProtudosStyles = styled.header`

#produtos{
    width: 100%;
}
.box{
    margin-top: 3%;
    width:100%;
    display: flex;
    justify-content: space-evenly;
}

.produto{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    border: 1px solid black;
    gap: 5%;
    padding: 5%;
    padding-top: 1%;

    
}
.produto:hover{
    box-shadow: .5rem .5rem .5rem black;
    transition: .5s;
}

.valor{
    display: flex;
    gap: 50%;
    justify-content: space-between;
}
button{
    border-radius:5px;
    background-color: #0080004b;
    width: 50%;
    height: 2vw;
    padding: 2%;
    font-size: 1vw;
}
button:hover{
    background-color:green
}

.produto p{
    font-size: 1vw;
}
h2{
    margin-bottom: 5%;
    font-size: 2vw;
}
.valor p{
    font-size: 2vw;
}

img{
    width: 50%;

}


`