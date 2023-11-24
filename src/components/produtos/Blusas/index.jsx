import { Button } from "../../Buttons"
import{ProtudosStyles} from"../styles"

export function Blusas(){
return(

<ProtudosStyles>
         <Button/> 
         <section id="produtos">
                <div className="box">
                        <div className="produto">
                                <h2>Kit 4 Camisetas Masculina Térmica Proteção Solar UV 50+ Praia Treino Academia Tshirt Praia Esporte Dry Fit Manga Longa</h2>
                                <img src="https://m.media-amazon.com/images/I/51L7WRG1TqL._AC_SX569_.jpg" alt="" />
                                <p>A Camiseta Masculina Dry Fit se encaixa perfeitamente na definição de 
                                estilo e funcionalidade!</p>
                                <div className="valor"><button>Compra</button><p>97,90</p></div>
                        </div>
                        <div className="produto">
                        <h2>Speedo Interlock Camiseta de Manga Curta, Homens</h2>
                                <img src="https://m.media-amazon.com/images/I/41ZYPGXpuxS._AC_SX679_.jpg" alt="" />
                                <p>práticas esportivas e dia a dia, a camiseta da linha Interlock Basic UV50, confeccionada pela Speedo, é a pedida certa.</p>
                                <div className="valor"><button>Compra</button><p>52,16</p></div>
                        </div>
                        <div className="produto">
                        <h2>Camiseta Algodão Rocky Anatomy Estilo Reserva</h2>
                                <img src="https://m.media-amazon.com/images/I/512ONQleBdL._AC_SY606_.jpg" alt="" />
                                <p>Nerd is the new cool. Em uma galáxia nem tão distante assim, nasceram nossas camisetas.</p>
                                <div className="valor"><button>Compra</button><p>79,00</p> </div>      
                        </div>
                </div>
         </section>    
 
         </ProtudosStyles>
)
}