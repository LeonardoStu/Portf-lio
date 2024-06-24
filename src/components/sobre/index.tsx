import style from './style.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Sobre() {
  useEffect(() => {
    AOS.init()
  },[])
    return <>
        <div className={style.container}  data-aos="fade-right">
            <p>Me chamo Leonardo, tenho 20 anos de idade e sou apaixonado por tecnologia. Meu primeiro contato com o mundo da programação foi em 2018, quando meu primo me apresentou. Na hora, eu gostei muito, mas nunca dei a devida atenção. Foi só em 2023 que comecei a dar o devido foco na área. Hoje, formado em Full Stack, estou mais voltado para a área de Back-end.
            </p>
        </div>
    </>
}