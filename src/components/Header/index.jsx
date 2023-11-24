import { HeaderStyles } from "./styles";

export function Header(){
    
    return(

<HeaderStyles>
                <div className="headerBox">
                    <div className="header">
                        <div className="logo">D'<span>SPOST</span></div>
                                <div className="items">
                                        <a href="/">INICIO</a>
                                        <a href="/produtos">PRODUTOS</a>
                                        <a href="/contatos">CONTATOS</a>
                                </div>
                    
                    </div>
                    
                </div>



</HeaderStyles>
    )

}