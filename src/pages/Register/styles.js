import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const ContainerLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  
  /* background-color: blue; */
`;

export const ContainerLeftInterno = styled.div`
  margin: 50px;
`;

export const ContainerRight = styled.div`
  /* border: 1px solid red; */
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExitContainer = styled.button`
  background: #ffffff;
  border: 0px;
`;

export const ContainerForms = styled.div`
  /* border: 1px solid red; */
  margin-top: 50px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Exit = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
`;

export const Title = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  color: #9ae7af;
  font-weight: bolder;

  h1 {
    font-size: 65px;
  }

  small {
    font-size: 20px;
  }
`;

export const InputLongo = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 61.02vw;

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    height: 45px;
    border: 2px solid #9ae7af;
    border-radius: 6px;
  }
`;

export const Inputs = styled.div`
  /* border: 1px solid blue; */
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  input {
    width: 29.5vw;
    height: 45px;
    border: 2px solid #9ae7af;
    border-radius: 6px;
  }

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const Div1 = styled.div`

`;

export const Div2 = styled.div`
  margin-right: 70px;
`;

export const BussinessContainer = styled.div`
  border: 3px solid #9ae7af;
  border-radius: 20px;
  width: 225px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h3 {
    align-self: center;
    font-weight: bolder;
    color: #696969;
  }

  p {
    color: gray;
    align-self: center;
    margin-top: 20px;
    font-size: 13px;
    width: 150px;
    text-align: center;
  }
`;

export const Bussiness = styled.img`
  display: flex;
  align-self: flex-end;
  width: 175px;
  height: 165px;
`;

export const Selected = styled.img`
  width: 35px;
  height: 35px;
  display: flex;
  align-self: center;
  position: relative;
  left: 105px;
  bottom: 22px;
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  margin-top: 100px;
  cursor: pointer; 
  background-color: #9ae7af;
  width: 285px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #9ae7af;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #ffffff;
    font-size: 16px;
  }
`;

export const SmallInputs = styled.div`
  margin-right: 70px;
  display: flex;
  flex-direction: row;

  input {
    width: 250px;
  }

  select {
    width: 250px;
    height: 45px;
    border: 2px solid #9ae7af;
    border-radius: 6px;
  }
`;

export const Small1 = styled.div`
  margin-left: 42px;
`;

export const Small2 = styled.div`
  margin-right: 100px;
  margin-left: 64px;
`;