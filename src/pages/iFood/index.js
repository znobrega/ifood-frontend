import React from "react";

import { Header, Content, Slogan, Jumbotron, Card } from "./styles";

import { MdGpsFixed } from "react-icons/md";

import logo from "../../assets/ifood-logo.png";
import plateOne from "../../assets/img-plate-1@2x.jpg";
import julianaPaes from "../../assets/ifood-julianapaes.webp";
import entregaGratis from "../../assets/ifood-capas-entregagratis.jpg";
import famosos from "../../assets/ifood-capas-famosos.jpg";
import metadePreco from "../../assets/ifood-capas-metadepreco.jpg";
// import plateTwo from "../../assets/img-plate-2@2x.jpg";
// import plateThree from "../../assets/img-plate-3@2x.jpg";

export default function iFood() {
  return (
    <>
      <Header>
        <div>
          <img id="plate-one" src={plateOne} alt="iFood" />
          <div id="plate-three"></div>
        </div>
        <div id="logo">
          <img id="logo" src={logo} alt="iFood" />
        </div>
        <nav>
          <a href="http://github.com/znobrega">Cadastre seu restaurante</a>
          <button>Entrar</button>
        </nav>
        <div id="plate-two"></div>
        <Slogan>
          <div id="slogan">
            <strong>Delivery de comida nunca foi tão fácil</strong>
            <span>Descubra restaurantes perto de você</span>
            <button>
              <MdGpsFixed size={30} color="#fff" />
              Buscar restaurantes
            </button>
          </div>
        </Slogan>
      </Header>
      <Content>
        <Jumbotron>
          <div>
            <strong>A sua fome de crescer tá no iFood</strong>
            <span>Cadastre seu restaurante e cresça até 50%* no mês.</span>
            <button>Cadastre seu restaurante</button>
          </div>
          <img src={julianaPaes} alt="asd"></img>
        </Jumbotron>
        <div className="cards">
          <Card>
            <img src={entregaGratis} alt="entregaGratis" />
            <strong>Entrega grátis</strong>
            <span>Almoço bom com entrega grátis</span>
          </Card>
          <Card>
            <img src={metadePreco} alt="metadePreco" />
            <strong>Até a metade do preço</strong>
            <span>As melhores promoções para você</span>
          </Card>
          <Card>
            <img src={famosos} alt="famosos" />
            <strong>Restaurantes famosos</strong>
            <span>Todo mundo conhece e gosta</span>
          </Card>
        </div>
      </Content>
    </>
  );
}
