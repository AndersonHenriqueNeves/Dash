import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: row;

`;

export const ContainerLogin = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 35%;
  background: white;

`;

export const ContainerSenha = styled.div `

display: flex;
width: 80%;
margin-top: 20px;
flex-direction: row;
justify-content: space-between;

label{
    margin-left: 8px;
    font-size: 13px;
    color: #dddddd;
    }

`;

export const ContainerLink = styled.div `

  display: flex;
  flex-direction: row;
  
  a {
      color: #9ae7af;
      font-size: 13px;
    }

`;
export const ContainerConta = styled.div `
  
  margin-top: 10px;
  
  label{
    display: absolute;
    margin-top: 25px;
    font-size: 13px;
    }
  
  a {
      display: absolute;
      color: #9ae7af;
      font-size: 13px;
    }

`;

export const ContainerStudent = styled.div`
  
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 65%;
  background: #9ae7af; 
  position: absolute;
  left: 35%;
  
  h2 {
    position: flex;
    color: white;
    margin-left: 60px;
    margin-top: 20px;
    font-size: 30px;
  }
  
  h3 {
    color: white;
    margin-left: 63px;
    font-size: 80px;
  }
  
  p {
    color: white;
    margin-left: 63px;
    font-size: 20px;
  }

`;

export const Logo = styled.img`
  
  display: flex;
  align-self: center;
  height: 200px;
  width: 100px;

`;

export const FormContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label{
    margin-top: 10px;
    margin-bottom: 8px;
    font-size: 13px;
  } 

  input {
    width: 387px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #9ae7af;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 10px;
  }

  p {
    font-size: 13px;
    margin-top: 10px;
    margin-left: 20px;
  }

`;


export const UserForm = styled.div`
  
  display: flex;
  flex-direction: column;

`;

export const PasswordForm = styled.div`
  
  display: flex;
  flex-direction: column;
  margin-top: 30px;

`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' }) `
  
  width: 14px;
  height: 14px;
  left: 48px;
  
`;

export const LoginButton = styled.button `
  
  position: flex;
  width: 387px;
  height: 60px;
  background: #9AE7AF;
  box-shadow: 0px 4px 4px;
  border-radius: 6px;
  color: white;
  border: none;
  outline: none;
  font-size: 18px;
  margin-top: 60px;

`;

export const Student = styled.img`
  
  display: flex;
  position: absolute;
  height: 600px;
  width: 700px;
  bottom: -20px;
  right: -10px;

`;

export const Note = styled.img `
  
  display: flex;
  position: absolute;
  height: 450px;
  width: 650px;
  bottom: 5px;
  right: -50px;

`;

export const ContatoButton = styled.button `
  
  position: flex;
  width: 250px;
  height: 40px;
  background: white;
  box-shadow: 0px 4px 4px;
  border-radius: 6px;
  color: #9AE7AF;
  border: none;
  outline: none;
  font-size: 18px;
  margin-left: 60px;
  margin-top: 50px;

`;