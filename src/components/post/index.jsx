import { Button } from "../Buttons";
import { PostStyles } from "./styles";

export function Post(){
return(

    <PostStyles>
        <section name="" id="post">
            <div className="imagem">
                <img src="https://img.freepik.com/fotos-premium/cena-de-futebol-no-estadio-com-close-up-de-uma-chuteira-de-futebol_207634-5556.jpg" alt="" />
                        <div className="textBox">
                                <h1>TENIS NIKE ESPORTIVO</h1>
                                <p>O tenis Nike esportivos vem com costura emborrachada<br/> de lisyun uma substância super resistente e  ant-corrosiva<br/> esclusiva para  treinaos intersos</p>
                        </div>
                        

            </div>
        </section>
        <Button/>
               
    </PostStyles>
)
}