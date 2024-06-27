"use client"

import { Container, ListGroup, ListGroupItem } from "reactstrap";
import style from './page.module.scss'
import Image from "next/image";
import { useEffect, useState } from "react";
import Home from "@/components/home";
import Sobre from "@/components/sobre";
import Habilidades from "@/components/habilidades";
import Trabalho from "@/components/trabalhos";
import Contato from "@/components/Contatos";
import Experiencia from "@/components/Experiencias";


export default function Portifolio() {
  const [selected, setSelected] = useState<string | null>('home')

  const handleList = (section: string) => {
    setSelected(prevSelected => (prevSelected === section ? section : section))
  }

  const renderContent = () => {
    switch(selected){
      case 'home':
        return <Home/>
      break
      case 'sobre':
        return <Sobre/>
      break
      case 'habilidade':
        return <Habilidades/>
      break
      case 'trabalho':
        return <Trabalho/>
      break
      case 'contato':
        return <Contato/>
      break
      case 'experiencia':
        return <Experiencia/>
      break
      default:
        alert('Valor invalido recarregue a página')
    }
  }


  return <>
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.photoAndName}>
          <div className={style.imgDiv}>
            <Image src='/fotoDePerfil.jpg' width={300} height={300} alt="foto de pefil" className={style.imgProfile}/>
          </div>

          <div className={style.information}>
            <h2 className={style.titleName}>Leonardo Souza Santos</h2>
            <h3 className={style.profision}>Desenvolvedor Full Stack</h3>
          </div>
        </div>

        <div className={style.listMessy}>
          <p className={selected === 'home' ? style.selected : style.p} onClick={() => handleList('home')}>Home</p>
          <p className={selected === 'sobre' ? style.selected : style.p} onClick={() => handleList('sobre')}>Sobre</p>
          <p className={selected === 'habilidade' ? style.selected : style.p} onClick={() => handleList('habilidade')}>Habilidades</p>
          <p className={selected === 'trabalho' ? style.selected : style.p} onClick={() => handleList('trabalho')}>Trabalhos</p>
          <p className={selected === 'contato' ? style.selected : style.p} onClick={() => handleList('contato')}>Contatos</p>
          <p className={selected === 'experiencia' ? style.selected : style.p} onClick={() => handleList('experiencia')}>Experiencia</p>
        </div>

        <div className={style.footer}>
          <p className={style.titleFooter}>Copyright©2024LeonardoSouza</p>
          <p className={style.descriptionFooter}>RioGrandeDaSerraSP</p>
        </div>

      </div>

      <div className={style.content}>
        {renderContent()}
      </div>
    </div>
  </>
}