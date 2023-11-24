import{ styled } from "styled-components"

export const HeaderStyles = styled.header`


*{
    padding: 0;
    margin: 0;
}
.logo{
    margin: 2%;
    color: green;
    font-size: 50px;
    font-family: 'Courier New', Courier, monospace;
}.logo span{
    color:blue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
}
.headerBox{
    display: flex;
    width: 100%;
    height: 100px;
}
.header{
    display: flex;
    position: fixed;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: black;
    z-index: 1;
    
}
.items{
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
   
}
.items a {
    font-size: 2VW;
    color: white;
}

.items a:hover{
    color: gray;
}



@media (min-width: 1000px) {
    
    .items a {
    font-size: 25px;
    color: white;
}
}



`