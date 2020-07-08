import React from 'react';
import { Link } from 'react-router-dom';

import { Container, 
  ContainerStudent, 
  Logo, 
  ContainerLogin, 
  FormContainer, 
  UserForm, 
  PasswordForm,
  Checkbox,
  LoginButton,
  Student,
  ContainerSenha,
  ContainerConta,
  ContainerLink,
  Note,
  ContatoButton
} from './styles';

import LogoGreener from '../../assets/Logo.png';

import Estudante from '../../assets/login-image.svg';

import Notebook from '../../assets/student.svg'; 

export default function Login() {
  return (
    <Container>
      <ContainerLogin>
        
        <Logo src={LogoGreener} alt="LogoGreener" />         
        
        <FormContainer>
            
            <UserForm>
              <label>E-mail (ou usuário)</label>
              <input />
            </UserForm>
              
              <PasswordForm>
                <label>Senha</label>
                <input />
              </PasswordForm>
        
        </FormContainer>
        
        <ContainerSenha>
          
          <ContainerLink>
            <Checkbox />
              <label><strong>Manter conectado</strong></label>
          </ContainerLink>
        
          <ContainerLink>
            <a href = "/"> Esqueceu a senha? </a>
          </ContainerLink>
        </ContainerSenha> 
        
        <LoginButton>
          <strong>Entrar</strong>
        </LoginButton>
        
        <ContainerConta>
          <label>Não possui acesso? 
            <Link className="linkstyle" to="/PreCadastro"> Crie sua conta</Link> 
          </label>
        </ContainerConta> 
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