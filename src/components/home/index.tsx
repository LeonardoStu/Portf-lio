import { Container } from "reactstrap";
import style from './style.module.scss'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
    useEffect(() => {
        AOS.init()
    },[])

    return<>
        <div className={style.container} data-aos="fade-right">
            <div> 
                <p className={style.title}>Seja bem vindo(a), Trago a você meu portfólio</p>
            </div>

            <div className={style.description}>
                <p>Sou um desenvolvedor de site e aplicativos, explore para saber mais!</p>
            </div>
        </div>
    </>
}