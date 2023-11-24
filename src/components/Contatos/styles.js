import{ styled } from "styled-components"

export const ContatoStyles = styled.header`


.boxContato{
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #0000085e;
}
.email{
    width: 100%;
    height: 70px;
    display:flex;
    background-color:  #6a6af0a6;
   justify-content:space-evenly;
   align-items: center;
    
}
.email h1{
    font-size: 3vw;
}
.input{
    width: 30%;
   display:flex;
   gap: 2%;
}
.input input{
    width:100%;
    height: 40px;
    font-size: 25px;
}
button{
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: greenyellow;
    border: none;
    font-size: 1vw;
    color: white;
}


.marcas{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.marcas img{
    width: 10%;
    height: 10%;
    padding: 3%;
}

.ende{
    width: 100%;
    display: flex;
    background-color: black;


}
.ende iframe{
    width: 50%;
    height: 200px;
    padding: 2%;
    border: none;
    margin-bottom: 5%;
}
.ende2{
color: white;
}
.ende2 p{
width: 100%;
margin: 13%;
}



`