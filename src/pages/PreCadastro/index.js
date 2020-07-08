import React, { useState } from 'react';

import  { Container, ContainerStudent, ContainerLogin, Student, Note, ContatoButton } from '../Login/styles';
import { ButtonSelector, ContainerImage, LogoPequeno, CadastroButton, BussinessMan, StudentImage  } from './styles';

import LogoGreener from '../../assets/Logo.png';
import Estudante from '../../assets/login-image.svg';
import Notebook from '../../assets/student.svg';
import ImageButton from '../../assets/image-button.svg';
import ManBussiness from '../../assets/bussiness-man.svg';
import selectedIcon from './assets/selected-icon.svg'

export default function PreCadastro() {
  const [ consultorSelected, setConsultorSelected ] = useState(false)
  const [ studentSelected, setStudentSelected ] = useState(false)

  return (
    <Container>
      <ContainerLogin>
        <LogoPequeno src={LogoGreener} alt="LogoGreener" />
        <h3 className="margin">Selecione seu tipo de cadastro</h3>
        <p className="margin"> Dependendo do seu tipo, podemos oferecer um serviço que <p className="espaco">combina melhor com você!</p></p> 
      
        <ContainerImage>
          <ButtonSelector 
            selected={consultorSelected}
            onClick={() => {
              setConsultorSelected(true)
              setStudentSelected(false)
            }}
          >
            <BussinessMan src={ManBussiness} alt="BussinessMan" />
            <h1>Consultor</h1>
            <p>Profissional que atua <br/>diretamente em campo </p>
          </ButtonSelector>

          <ButtonSelector 
            selected={studentSelected}
            onClick={() => {
              setStudentSelected(true)
              setConsultorSelected(false)
            }}
          >
            <image src={selectedIcon} alt='dale'/>
            <StudentImage src={ImageButton} alt="ImageButton" />
            <h1>Estudante</h1>
            <p>Profissional que gerencia <br/>os seus funcionários </p>
          </ButtonSelector>
        </ContainerImage>

        <CadastroButton>
          <strong>Cadastrar</strong>
        </CadastroButton>
      </ContainerLogin>

      <ContainerStudent>
        
        <h2> Greener </h2>
        <h3> Student </h3>
        <p> Quer levar o poder do <strong>Greener</strong> para</p>
        <p> dentro de sua sala de aula?</p>

        <ContatoButton>
          <strong>Contate-nos</strong>
        </ContatoButton>
        
        <Student src={Estudante} alt="Student" />
        <Note src={Notebook} alt="Notebook"/>
      
      </ContainerStudent>
    </Container>
  )
}