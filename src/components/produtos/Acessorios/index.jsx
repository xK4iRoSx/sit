import { Button } from "../../Buttons"
import{ProtudosStyles} from"../styles"

export function Acessorios(){
return(

<ProtudosStyles>   
        <Button/>
         <section id="produtos">
                <div className="box">
                        <div className="produto">
                                <h2>Mochila Essential 15.6", Anti-Furto e Resistente a Água, Dell, Preta</h2>
                                <img src="https://m.media-amazon.com/images/I/612k8xi2T2L._AC_SX679_.jpg" alt="" />
                                <p>A Mochila Dell Essential é maleável, podendo se adaptar a diversos conteúdos diferentes. 
                                        Nas imagens, a mochila contém objetos em seu interior que ajudam a manter a forma.</p>
                                <div className="valor"><button>Compra</button><p>189,00</p></div>
                        </div>
                        <div className="produto">
                        <h2>Chaveiro Feito Para Chevrolet Tracker Onix Equino</h2>
                                <img src="https://m.media-amazon.com/images/I/51bRpqaUHtL._AC_SX522_.jpg" alt="" />
                                <p>Gancho de pressão.</p>
                                <div className="valor"><button>Compra</button><p>44,97</p></div>
                        </div>
                        <div className="produto">
                        <h2>GALPADA 1 Peça Colar De Prata Masculino Gótico Joias</h2>
                                <img src="https://m.media-amazon.com/images/I/516Mam1Yn7L._AC_SX569_.jpg" alt="" />
                                <p>Colar criativo de halloween-- ▍ design exclusivo-- pingente de design de caveira torna-o mais exclusivo e atraente.</p>
                                <div className="valor"><button>Compra</button><p>43,33</p> </div>      
                        </div>
                </div>
         </section>   

      

    

         </ProtudosStyles>
)
}