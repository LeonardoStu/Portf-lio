import Image from 'next/image'
import style from './style.module.scss'
import Link from 'next/link'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function Contato(){
    useEffect(() => {
        AOS.init()
    }, [])

    return <>
        <div className={style.container} data-aos="fade-right">
            <div className={style.div}>
                <Image width={150} height={150} src='/icon/whats.png' alt='whatsIcon'/>
                <span className={style.span}>11 956880603</span>
            </div>
            <div className={style.div}>
                
                <Link className={style.link} target='blanck_' href='https://www.linkedin.com/in/leonardo-souza-santos-502086254/'>
                    <Image width={150} height={150} src='/icon/linkedin.png' alt='linkedin'/>
                    <span className={style.span}>https://www.linkedin.com/in/leonardo-souza-santos-502086254/</span>
                </Link>
            </div>
            <div className={style.div}>
                <Link className={style.link} target='blanck_' href='https://github.com/LeonardoStu'>
                    <Image width={150} height={150} src='/icon/github.png' alt='linkedin'/>
                    <span className={style.span}>https://github.com/LeonardoStu</span>
                </Link>
            </div>
            {/* <div className={style.div}></div>
            <div className={style.div}></div>
            <div className={style.div}></div> */}
        </div>
    </>
}