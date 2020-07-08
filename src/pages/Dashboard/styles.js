import styled from 'styled-components';

export const ContainerDashboard = styled.div `
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ContainerUser = styled.div `
  width: 40%;
  display: inline-block;
  h1 {
    display: flex;
    margin-top: 3px;
    font-weight: 900;
    font-size: 50px;
    margin-left: 60px;
  }
  
  strong {
    display: flex;
    margin-top: 40px;
    margin-left: 55px;
  }
`; 

export const DivConselho = styled.div `
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width:  20%;
  margin-right: 60px;
  margin-top: 58px;

  p {
    display: inline-block;
    margin-left: 5px;
  }
`;

export const DivGraficoVistorias = styled.div `
  display: inline-block;
  width: 33%;
  strong {
    display: flex;
    width: 50%;
    height: 20px;
    margin-top: 30px;
    margin-left: 20px;
  }
  p {
    display: flex;
    margin-top: 2px;
    width: 70%;
    margin-left: 20px;
    font-weight: 700;
    color: #BDBDBD;
  }

`;

export const DivVistorias = styled.div `
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  margin-top: 50px;
  margin-left: 60px;
  height: 250px;
  width: 91.5%;

  hr {
    margin-top: 20px;
    height: 80%;
    border-color: #F2F2F2;
  }
`;

export const DivVistoriasMarcadas = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: left;
  margin-left: 60px;
  height: 140px;
  width: 91.5%;
  strong {
    display: flex;
    height: 20px;
    margin-left: 15px;  
  }

`;

export const DivVistoriasRealizadas = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: left;
  margin-left: 60px;
  height: 140px;
  overflow-x: scroll;
  strong {
    display: flex;
    height: 20px;
    margin-left: 15px;  
  }
  
`;

export const DivArtigos = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: left;
  margin-left: 60px;
  height: 200px;
  overflow-x: scroll;
  margin-top: 10px;
  strong {
    display: flex;
    height: 20px;
    margin-left: 15px;  
  }
`;

export const StyleCardVistoria = styled.div `
  display: inline-block;
  width: 25%;
  height: 90px;
  background-color: #9ae7af;
  margin-left: 15px;
  border-radius: 8px;
  
  h2 {
    margin-top: 10px;
    margin-left: 10px;
    color: white;
    display: inline-block;
  }
  
  p {
    margin-left: 10px;
    font-weight: 500;
    color: white;
   }

  small {
    margin-right: 10px;
    margin-top: 10px;
    color: white;
    float: right;
   }

`;

export const StyleVistoriasRealizadas = styled.div `
  display: inline-block;
  width: 25%;
  height: 100px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-left: 15px;
  border-radius: 8px;
  flex-shrink: 0;
  background-size: cover;
  h2 {
    margin-top: 10px;
    margin-left: 10px;
    color: #9ae7af;
    display: inline-block;
  }
  
  p {
    margin-left: 10px;
    color: black;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 14px;
   }

  small {
    margin-left: 100px;
    color: #9ae7af;
   }

`;

export const StyleArtigos = styled.div `
  display: flex;
  flex-direction: row;
  width: 33%;
  height: 180px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-left: 15px;
  border-radius: 16px;
  flex-shrink: 0;
  background-size: cover;
  h2 {
    font-weight: 900;
    display: inline-block;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 10px; 
  }
  
  p {
    color: black;
    font-weight: 900;
    font-size: 14px;
    margin-left: 10px; 
   }

  small {
    margin-left: 10px; 
    color: #BDBDBD;
    font-weight: 900;
   }

`;

export const DivTexto = styled.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 230px;

`;

export const DivImg = styled.div `
  width: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

export const ButtonAdd = styled.div `
  display: inline-block;
  width: 25%;
  height: 90px;
  background-color: #F2F2F2;
  margin-left: 15px;
  border-radius: 8px;

`;

export const Plus = styled.img `
  height: 50px;
  width: 100px;
  margin-left: 100px;
  margin-top: 20px;
`;

export const CardImg = styled.img `
  display: flex;
  align-self: flex-end; 
  height: 128px;
  width: 200px;
  margin-left: 5px;
`;

export const CheckSelect = styled.img `
  justify-self: flex-start;
  height: 50px;
  width: 30px;
  float: right;
  position: relative;
  bottom: 20px;
  left: 6px;
  ;
`;

export const Nav = styled.nav `
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background-color: white;
  padding: 0 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Menu = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const NavIcon = styled.li `
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icone = styled.img `
  width: 120px;
  height: 40px;
  margin-top: 10px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropDown = styled.div `
  position: absolute;
  top: 60px;
  width: 300px;
  transform: translateX(33%);
  background-color: white;
  padding: 1rem;
  overflow: hidden;
  height: 90.4vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const LinkItem = styled.a `
  color: black;
  text-decoration: none;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  
  :hover {
    background-color: #dddddd;
  }

`;

export const DivItem = styled.div `
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const DivLogOut = styled.div `
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 130px;
`;