import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Trabalho() {
    useEffect(() => {
        AOS.init()
    },[])
    return<>
        <div className={style.cardGroup} data-aos="fade-right">
            <div className={style.card}>
                <Link href='https://onebitflix-rust.vercel.app/'  target='blanck_' className={style.link}>
                    <Image width={450} height={250} src='/trabalhos/onebitflix.png' alt='Onebitflix' className={style.imgJob}/>
                    <div>
                        <h2 className={style.title}>Onebitflix</h2>
                        <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam consequatur placeat unde est culpa sed velit? Aut, iure laborum eos quas minima, asperiores ex expedita itaque reprehenderit ut consequatur!</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
}