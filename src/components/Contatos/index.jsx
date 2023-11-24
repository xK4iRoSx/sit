import { ContatoStyles } from "./styles";

export function Contatos(){
 return(
    <ContatoStyles>

                <div className="boxContato">
                    <div className="email"><h1>Receber nossa promocões exclusiva</h1><div className="input"><input type="text" placeholder="Digite seu Email" /><button>Receber</button></div></div>
                    <div className="marcas">

                            <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png" alt="" />
                            <img src="https://i.pinimg.com/originals/d7/e7/81/d7e78153d80800d474a8760f7e9bbea9.png" alt="" />
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png" alt="" />


                    </div>
                    <div className="ende">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1634962336952!2d-38.6307194880749!3d-3.7745808433958015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c9420f7d257%3A0x56b533683e0b9d4!2sShopping%20Jurema!5e0!3m2!1spt-BR!2sbr!4v1700509836298!5m2!1spt-BR!2sbr" ></iframe>
                    <div className="ende2">
                        <p>Av. São Vicente de Paula, 101 - Araturi, Caucaia - CE, 61652-140</p>
                        <p>(85)9 9987 - 3094</p>
                        <p>shoppingjurema@gmail.com</p>
                    </div>    
                    </div>
                   
                </div>


    </ContatoStyles>
 )
}