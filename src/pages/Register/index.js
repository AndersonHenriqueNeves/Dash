import React from 'react';
import { Link } from 'react-router-dom';

import exitIcon from '../../assets/exit-icon.svg';
import selectedIcon from '../../assets/selected-icon.svg';
import BussinessMan from '../../assets/bussiness-man.svg';

import { 
  Container, 
  ContainerLeft, 
  ContainerRight, 
  Exit,
  ExitContainer,
  Title,
  ContainerForms,
  InputLongo,
  ContainerLeftInterno,
  Inputs,
  Div1,
  Div2,
  BussinessContainer,
  Bussiness,
  SubmitButton,
  SmallInputs,
  Small1,
  Small2,
  Selected
} from './styles';

export default function Register() {
  return (
    <Container>
      <ContainerLeft>
        <ContainerLeftInterno>
          <ExitContainer>
            <Link to="/">
              <Exit src={exitIcon} alt="exitIcon"/>
            </Link>
          </ExitContainer>
          <Title>
            <small>Finalização de</small>
            <h1>Cadastro</h1>
          </Title>
          <ContainerForms>
            <InputLongo>
              <p>Nome Completo</p>
              <input type="text"></input>
            </InputLongo>
            <Inputs>
              <Div1>
                <p>CPF</p>
                <input type="text"></input>
              </Div1>
              <SmallInputs>
                <Small1>
                  <p>Conselho Regional</p>
                  <select value="">
                    <option>CRN</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                </Small1>
                <Small2>
                  <p>Nº do Conselho Regional</p>
                  <input type="text"></input>
                </Small2>
              </SmallInputs>
            </Inputs>
            <Inputs>
              <Div1>
                <p>Contato</p>
                <input type="text"></input>
              </Div1>
              <Div2>
                <p>Contato pessoal</p>
                <input type="text"></input>
              </Div2>
            </Inputs>
            <Inputs>
              <Div1>
                <p>E-mail</p>
                <input type="text"></input>
              </Div1>
              <Div2>
                <p>Confirmar E-mail</p>
                <input type="text"></input>
              </Div2>
            </Inputs>
            <Inputs>
              <Div1>
                <p>Senha</p>
                <input type="text"></input>
              </Div1>
              <Div2>
                <p>Confirmar Senha</p>
                <input type="text"></input>
              </Div2>
            </Inputs>
          </ContainerForms>
        </ContainerLeftInterno>
      </ContainerLeft>
      <ContainerRight>
        <BussinessContainer>
          <Selected src={selectedIcon} alt="selectedIcon"/>
          <Bussiness src={BussinessMan} alt="BussinessMan"/>
          <h3>Consultor</h3>
          <p>Profissional que atua diretamente em campo</p>
        </BussinessContainer>
        <SubmitButton>
            <p>Finalizar Cadastro</p>
        </SubmitButton>
      </ContainerRight>
    </Container>
  );
}