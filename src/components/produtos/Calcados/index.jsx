import { Button } from "../../Buttons"
import{ProtudosStyles} from"../styles"

export function Calcados(){
return(

<ProtudosStyles> 
        <Button/>  
         <section id="produtos">
                <div className="box">
                        <div className="produto">
                                <h2>Tênis Esportivo Masculino Aquarios Preto</h2>
                                <img src="https://m.media-amazon.com/images/I/51iMtyZV3PL._AC_SL1000_.jpg" alt="" />
                                <p>O Olympikus Aquárius é o tênis ideal para quem busca conforto para as caminhadas.</p>
                                <div className="valor"><button>Compra</button><p> 138,90</p></div>
                        </div>
                        <div className="produto">
                        <h2>Tênis Air Force 1</h2>
                                <img src="https://m.media-amazon.com/images/I/316FwkAAs2L._AC_.jpg" alt="" />
                                <p>Este tênis faz parte da linha Clássica. Com uma simplicidade que encanta com um 
                                visual descolado e muita personalidade</p>
                                <div className="valor"><button>Compra</button><p> 105,00</p></div>
                        </div>
                        <div className="produto">
                        <h2>Tênis Hocks Flat Lite</h2>
                                <img src="https://m.media-amazon.com/images/I/61luB7YuoZL._AC_SX569_.jpg" alt="" />
                                <p>Tênis Hocks Flat Lite Preto/Branco - 44 - Um clássico da Hocks, design atemporal e duradouro.</p>
                                <div className="valor"><button>Compra</button><p> 319,99</p> </div>      
                        </div>
                </div>
         </section> 

           
         </ProtudosStyles>
)
}