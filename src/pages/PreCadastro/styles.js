import styled from 'styled-components';


export const ContainerImage = styled.div`
  
  display: flex;
  width: 80%;
  margin-top: 0px;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 12px;
  }

  p {
    font-weight: 600;
    font-size: 10px;
    margin-top: 20px;
  }

`;

export const ButtonSelector = styled.button`
  border: ${props => props.selected ? '3px solid #9AE7AF' : '3px solid #fff; '};
  background-color: white;
  height: 200px;
  width: 160px;
  margin-top: 50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
`;

export const LogoPequeno = styled.img`
  
  display: flex;
  align-self: center;
  height: 150px;
  width: 100px;

`;

export const CadastroButton = styled.button `
  
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
  margin-top: 30px;

`;

export const BussinessMan = styled.img`
  
  display: flex;
  height: 100px;
  width: 100px;
  margin-left: 32px;

`;

export const StudentImage = styled.img`
  
  display: flex;
  height: 100px;
  width: 100px;
  margin-left: 25px;

`;