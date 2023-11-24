import{ styled } from "styled-components"

export const ButtonStyles = styled.header`

.buttonBox{
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
h1{
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    gap: 5px;

}
h1 span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-bottom:5px solid black ;
    background-color: #0000ff52;
    border-radius: 100%;
}


.buttonBox a {
    width: 10%;
    padding: 2%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: greenyellow;
    box-shadow: .3rem .3rem .3rem black;
    border-radius: 50px;
    font-size: 2vw;
    color: white;
}
.buttonBox a:hover{
    color: black;
}
.buttonBox a:active{
    box-shadow:none
}


`