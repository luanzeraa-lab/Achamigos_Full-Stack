
"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";

import styles from '../quemsomos/quemsomos.module.css'
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";


const QuemSomos = () => {
  return (
    <>
       
      <Container fluid className= {styles['containerrrfluid']}>
        <div className= {styles['nave']}> <Nav2 /> </div>
        <div className= {styles['wrapper']}>
          <h1>Administradores do Site</h1>
        <div className= {styles['adms1']}>
          
          <div className= {styles['carde1']}>
            <Image
              className="w-55 h-55 rounded-full object-cove"
              id="fotoalunos1"
              src="/images/daniel.png"
              alt="Daniel José Bernardes Filho"
              width={150}
              height={100}
            />
            <strong className="mt-2 text-center">Daniel José Bernardes Filho</strong>
          </div>
          <div className= {styles['carde1']}>
            <Image
              className="w-55 h-55 rounded-full object-cove"
              id="fotoalunos2"
              src="/images/luan.png"
              alt="Luan Silva de Picoli"
              width={150}
              height={100}
            />
            <strong className="mt-2 text-center">Luan Silva de Picoli</strong>
          </div>
          <div className= {styles['carde1']}>
            <Image
              className="w-55 h-55 rounded-full object-cove"
              id="fotoalunos3"
              src="/images/lucas.png"
              alt="Lucas Pires de Almeida"
              width={150}
              height={100}
            />
            <strong className="mt-2 text-center">Lucas Pires de Almeida</strong>
          </div>
        </div>
        <div className= {styles['adms2']}>
          <div className= {styles['carde2']}>
            <Image
              className="w-58 h-55 rounded-full object-cove"
              id="fotoalunos4"
              src="/images/gussi.png"
              alt="Miguel dos Santos Gussi"
              width={150}
              height={100}
            />
            <strong className="mt-2 text-center">Miguel dos Santos Gussi</strong>
          </div>

          <div className= {styles['carde2']}>
            <Image
              className=""
              id="logo"
              src="/images/logocerto.png"
              alt="Pedro Arthur de Oliveira"
              width={650}
              height={200}
            />
            
          </div>

          <div className= {styles['carde2']}>
            <Image
              className="w-57 h-55 rounded-full object-cove"
              id="fotoalunos5"
              src="/images/pa.png"
              alt="Pedro Arthur de Oliveira"
              width={150}
              height={150}
            />
            <strong className="mt-2 text-center">Pedro Arthur de Oliveira</strong>
          </div>
          

        </div>
        </div>

        <div className= {styles['informacoes']}>

          <h2>Principais objetivos do site</h2>
          <ul className="list none">

             <li>
            A ideia surgiu ao perceber que muitos animais em abrigos não são
            vistos por potenciais adotantes. Relatos de dificuldades em adotar
            e conversas com voluntários mostraram a necessidade de uma
            plataforma online que conectasse pessoas a esses animais,
            facilitando a adoção e promovendo a responsabilidade.
            </li>

              <li>
            O site visa resolver a dificuldade que pessoas têm em encontrar
            animais para adoção e a falta de visibilidade que abrigos
            enfrentam para promover seus animais, reduzindo assim o número de
            pets abandonados e ajudando a encontrar lares adequados.
          </li>

           <li>Conectar pessoas e instituições com o mesmo objetivo: conectar um
            animal de estimação a uma família.</li> 
      
          <li>
            Exibir perfis de animais de estimação com descrição, fotos,
            detalhes e muito mais.
          </li>
          <li>
            Informar sobre cuidados, processos de adoção, eventos e benefícios
            da adoção responsável.
          </li>
        
         
          </ul>

        </div>

        <div className={styles['footerrr']}> <Footer/></div>

      </Container>



    </>
  );
};

export default QuemSomos;
