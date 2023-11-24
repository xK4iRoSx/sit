import { ButtonStyles } from "./styles";
import { Link } from "react-router-dom";


export function Button(){
  

    return(
    <ButtonStyles>
            <h1>VEJA NOSSO <span>PRODUTOS</span></h1>

            <div className="buttonBox">
                <Link to={"/calcados"}>Calçados</Link>
                <Link to={"/oculos"}>Óculos</Link>
                <Link to={"/blusas"}>Blusas</Link>
                <Link to={"/acessorios"}>Acessórios</Link>
            </div>
    
        
    </ButtonStyles>
    )
}