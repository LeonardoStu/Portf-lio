import { Container } from "reactstrap";
import style from './style.module.scss'

export default function Home() {
    return<>
        <div className={style.container}>
            <div> 
                <p className={style.title}>Seja bem vindo(a), Trago a você meu portfólio</p>
            </div>

            <div className={style.description}>
                <p>Sou um desenvolvedor de site e aplicativos, para saber mais acesse "sobre" na barra de navegação</p>
            </div>
        </div>
    </>
}