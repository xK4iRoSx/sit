import { Button } from "../../Buttons"
import{ProtudosStyles} from"../styles"

export function Oculos(){
return(

<ProtudosStyles> 
        <Button/> 
         <section id="produtos">
                <div className="box">
                        <div className="produto">
                                <h2>Óculos De Sol Baby Preto, Buba, Preto</h2>
                                <img src="https://m.media-amazon.com/images/I/41EoWVvQ0BL._AC_SX522_.jpg" alt="" />
                                <p>Proteção 100 % UVA e UVB
Armação flexível,com lenço em microfibra para a limpeza, cuidados necessários: para evitar que as lentes risquem, armazene os óculos na capa protetora, lave com água e sabão e seque com o lencinho macio</p>
                                <div className="valor"><button>Compra</button><p>45,50</p></div>
                        </div>
                        <div className="produto">
                        <h2>LUFF 4 pares de óculos de leitura Óculos de computador.</h2>
                                <img src="https://m.media-amazon.com/images/I/71m4-Af39rL._AC_SX569_.jpg" alt="" />
                                <p> Estes leitores têm lentes de alta definição que podem bloquear eficazmente a luz azul prejudicial para reduzir a fadiga e a dor dos olhos.</p>
                                <div className="valor"><button>Compra</button><p>179,99</p></div>
                        </div>
                        <div className="produto">
                        <h2>Óculos Clipon Adicional Óculos 3 Em 1</h2>
                                <img src="https://m.media-amazon.com/images/I/31kCbXjjyiL._AC_.jpg" alt="" />
                                <p>óculos Clip On com Lentes.</p>
                                <div className="valor"><button>Compra</button><p>54,30</p> </div>      
                        </div>
                </div>
         </section> 
           
         </ProtudosStyles>
)
}