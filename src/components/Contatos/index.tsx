import Image from 'next/image'
import style from './style.module.scss'
import Link from 'next/link'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Toast, ToastContainer } from 'react-bootstrap'


export default function Contato(){
    useEffect(() => {
        AOS.init()
    }, [])

    const [showToast, setShowToast] = useState(false)

    const copyToClipboard = (text: string) => {
        const tempInput = document.createElement('input')
        tempInput.value = text
        document.body.appendChild(tempInput)

        tempInput.select()
        document.execCommand('copy')

        document.body.removeChild(tempInput)

        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }

    return <>
        <div className={style.container} data-aos="fade-right">
            <div className={style.div}> 
                <Link href='http://wa.me/+5511956880603' target='blanck_' className={style.link}>
                    <Image className={style.icon} width={150} height={150} src='/icon/whats.png' alt='whatsIcon'/>
                    <span className={style.span}>+55 11 956880603</span>
                </Link>
            </div>
            <div className={style.div}>
                <Link className={style.link} target='blanck_' href='https://www.linkedin.com/in/leonardo-souza-santos-502086254/'>
                    <Image className={style.icon} width={150} height={150} src='/icon/linkedin.png' alt='linkedin'/>
                    <span className={style.span}>https://www.linkedin.com/in/leonardo-souza-santos-502086254/</span>
                </Link>
            </div>
            <div className={style.div}>
                <Link className={style.link} target='blanck_' href='https://github.com/LeonardoStu'>
                    <Image className={style.icon} width={150} height={150} src='/icon/github.png' alt='github'/>
                    <span className={style.span}>https://github.com/LeonardoStu</span>
                </Link>
            </div>
            <div className={style.div}>
                <div className={style.link}  onClick={() => copyToClipboard('leonardodevsantos@gmail.com')}>
                    <Image className={style.icon} width={150} height={150} src='/icon/gmail.png' alt='gmail'/>
                    <span data-bs-toggle="popover"  data-bs-content="copy" className={style.span}>leonardodevsantos@gmail.com</span>
                </div>
            </div>
            <div className="p-3 my-2 rounded">
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>Copiado!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
        </div>
    </>
}