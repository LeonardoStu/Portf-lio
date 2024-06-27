import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Collapse } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Trabalho() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        AOS.init()
    },[])
    return<>
        <div className={style.cardGroup} data-aos="fade-right">
            <div className={style.card}>
                <Link href='https://onebitflix-rust.vercel.app/' className={style.link} target='blanck_'>
                    <Image width={450} height={200} src='/trabalhos/onebitflix.png' alt='one' className={style.imgJob}/>
                    <div className={style.information}>
                        <h1 className={style.title}>Onebitflix</h1>
                        <p className={style.description}>Projeto final do curso da One bit code, site de cursos inspirado na Netflix!</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
}