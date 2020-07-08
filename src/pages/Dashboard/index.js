import React, { useState } from 'react';

import { Menu, 
  Nav, 
  NavIcon, 
  Icone,
  DropDown, 
  LinkItem, 
  DivItem, 
  DivLogOut, 
  ContainerDashboard, 
  ContainerUser,
  DivConselho,
  DivVistorias,
  DivGraficoVistorias,
  DivVistoriasMarcadas,
  StyleCardVistoria,
  ButtonAdd,
  Plus,
  DivVistoriasRealizadas,
  StyleVistoriasRealizadas,
  CheckSelect,
  DivArtigos,
  StyleArtigos,
  CardImg,
  DivTexto,
  DivImg } from './styles';

import GreenSelect from '../../assets/selected-icon.svg';
import IconGreener from '../../assets/greener-icon.png';
import PlusButton from '../../assets/add2-icon.svg';
import GreenCard from '../../assets/card-img.svg';
import {ReactComponent as MenuIcon} from '../../assets/menu.svg';
import {ReactComponent as Home} from '../../assets/home-icon.svg';
import {ReactComponent as News} from '../../assets/news-icon.svg';
import {ReactComponent as Add} from '../../assets/add-icon.svg';
import {ReactComponent as Search} from '../../assets/search-icon.svg';
import {ReactComponent as Selected} from '../../assets/check-icon.svg';
import {ReactComponent as LogOut} from '../../assets/logout-icon.svg';



export default function Dashboard() { 
  return (

    <ContainerDashboard>
      <Navbar>
        <NavItem icon={<MenuIcon />} >
          <DropdownMenu />
        </NavItem>
      
        <Icone src={IconGreener} alt="IconGreener" />        
      </Navbar>
    
      <ContainerUser>
        <strong> Bem-Vindo </strong>
        <h1> User!</h1>
      </ContainerUser>
    
      <DivConselho>
        <strong>Conselho Regional:</strong>
        <p>123456</p>
      </DivConselho>

      <DivVistorias>
        <DivGraficoVistorias>
          <strong>Gráfico de Vistorias</strong> 
          <p>Gráfico de Vistorias positivas e negativas</p>
        </DivGraficoVistorias>
        <hr/>
        <DivGraficoVistorias>
          <strong>Vistorias positivas</strong> 
          <p>Gráfico de Vistorias positivas detalhado</p>
        </DivGraficoVistorias>
        <hr/>
        <DivGraficoVistorias>
          <strong>Vistorias negativas</strong> 
          <p>Gráfico de Vistorias negativas detalhado</p>
        </DivGraficoVistorias>
      </DivVistorias>
      <strong className="Vistoria">Vistorias marcadas</strong>
      <DivVistoriasMarcadas>
        
        <StyleCardVistoria>
          <h2>Pizzaria Atlântico</h2>
          <p>Rua teste de oliveira, 1100</p>
          <small>15/06/2020 - 14:00h</small>
        </StyleCardVistoria>
        <StyleCardVistoria>
          <h2>Sal e Brasa</h2>
          <p>Rua teste de oliveira, 2200</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleCardVistoria>
        <ButtonAdd>
        <Plus src={PlusButton} alt="PlusButton"/>
        </ButtonAdd>
      </DivVistoriasMarcadas>
      
      <strong className="realizadas">Vistorias realizadas</strong>
      <DivVistoriasRealizadas>

        <StyleVistoriasRealizadas>
        
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
          
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>

        <StyleVistoriasRealizadas>
          <h2>Ponteio</h2>
          <CheckSelect src={GreenSelect} alt="GreenSelect"/>
          <p>Rua teste de oliveira, 8080</p>
          <small>15/06/2020 - 18:00h</small>
        </StyleVistoriasRealizadas>
      </DivVistoriasRealizadas>

      <strong className="realizadas">Artigos e Notícias</strong>
      <DivArtigos>
        <StyleArtigos>
          <DivTexto>
          <p>O problema de usar</p>
          <h2>Agrotóxico</h2>
          <small>Saiba mais sobre o uso de agrotóxicos e seus riscos à saúde</small>
          </DivTexto>
          <DivImg>
          <CardImg src={GreenCard} alt="GreenCard" />
          </DivImg>
        </StyleArtigos>

        <StyleArtigos>
        <DivTexto>
          <p>O problema de usar</p>
          <h2>Agrotóxico</h2>
          <small>Saiba mais sobre o uso de agrotóxicos e seus riscos à saúde</small>
          </DivTexto>
          <DivImg>
          <CardImg src={GreenCard} alt="GreenCard" />
          </DivImg>
        </StyleArtigos>
      </DivArtigos>
    
    </ContainerDashboard>
    
  );
}

function DropdownMenu() {
  
  function DropDownItem(props) {
    return (
      <LinkItem href="#">
        <span className="icon-button">{props.leftIcon}</span>
          {props.children}
      </LinkItem>
    )
  }
  
  return (
    <DropDown>

      <DivItem>
        <DropDownItem 
          leftIcon={<Home />}>
            <strong>Início</strong>
        </DropDownItem>
      </DivItem>
    
      <DivItem>
        <DropDownItem 
          leftIcon={<News />}>
            <strong>Notícias</strong>
        </DropDownItem>
      </DivItem>

      <DivItem>
        <DropDownItem 
          leftIcon={<Add />}>
            <strong>Realizar nova vistoria</strong>
        </DropDownItem>
      </DivItem>

      <DivItem>
        <DropDownItem 
          leftIcon={<Search />}>
            <strong>Vistorias em andamento</strong>
        </DropDownItem>
      </DivItem>

      <DivItem>
        <DropDownItem 
          leftIcon={<Selected />}>
            <strong>Vistorias concluídas</strong>
        </DropDownItem>
      </DivItem>

      <DivLogOut>
        <DropDownItem 
          leftIcon={<LogOut />}>
            <strong>Log Out</strong>
        </DropDownItem>
      </DivLogOut>  
      
    </DropDown>
  )
}


function Navbar(props) {
  return (
    <Nav>
      <Menu>
        { props.children }
      </Menu>
    </Nav>   

  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <NavIcon>
      <a href="#" className="icon-button" onClick = {() => setOpen(!open)}>
        { props.icon }
      </a>

      {open && props.children}
    </NavIcon>
  );
}