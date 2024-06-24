import style from './style.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Habilidades() {
    useEffect(() => {
        AOS.init()
    }, [])

    return <>
        <div  className={style.icon} data-aos="fade-right">
            <Image width={130} height={130} src='/icon/html.png' alt='htmlIcon'/>
            <Image width={130} height={130} src='/icon/css.png' alt='cssIcon'/>
            <Image width={130} height={130} src='/icon/JS.png' alt='jsIcon'/>
            <Image width={130} height={130} src='/icon/TS.png' alt='TSIcon'/>
            <Image width={130} height={130} src='/icon/github.png' alt='githubIcon'/>
            <Image width={130} height={130} src='/icon/sass.png' alt='sassIcon'/>
            <Image width={130} height={130} src='/icon/react.png' alt='reactIcon'/>
            <Image width={130} height={130} src='/icon/bootstrap.png' alt='bootstrapIcon'/>
            <Image width={130} height={130} src='/icon/next.png' alt='sassIcon'/>
            <Image width={130} height={130} src='/icon/node.png' alt='sassIcon'/>
            <Image width={100} height={130} src='/icon/mongo.png' alt='sassIcon'/>
            <Image width={100} height={130} src='/icon/sql.png' alt='sassIcon'/>

        </div>
    </>
}