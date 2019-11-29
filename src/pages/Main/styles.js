import styled, { css, keyframes } from "styled-components";
import woman from "../../assets/woman1.png";
import woman3 from "../../assets/woman1.svg";
const woman2 =
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg";

const backgroundFadeIn = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0;
    overflow: hidden;
  }


`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700&display=swap");

  overflow: hidden;
  animation: ${backgroundFadeIn} 1s linear;

  font-family: Montserrat;
  background: url(${woman2}) no-repeat center;
  background-size: 100% 100%;
  height: 100vh;
  padding-top: 40px;
  color: #fff;
  font-weight: 200;
  overflow: hidden;
  transition: 0.2s;

  ${props =>
    props.hover &&
    css`
      & {
        background-size: 110% 110%;
      }

      div#custom-enter {
        transform: scale(1.2);
      }
    `}
`;

export const Navbar = styled.nav`
  width: 90%;
  margin: auto;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: #fff;

  strong {
    font-weight: 200;
  }
`;

export const Content = styled.div`
  height: 83vh;
  display: grid;
  grid-template-columns: 5% 1fr 1fr 1fr 5%;
  align-items: end;
  padding-bottom: 2vh;

  aside {
    grid-column: 2/3;
    display: flex;
    align-items: flex-end;

    strong {
      transform: rotate(-90deg);
      font-size: 120px;
      width: 120px;
      height: 100px;
    }

    ul {
      width: 220px;
      font-size: 15px;
      list-style: none;
      margin-left: 20px;

      li {
        transition: 0.5s;
      }

      li:hover {
        margin-left: 20px;
      }
    }
  }

  .page {
    grid-column: 4/5;
    justify-self: end;
  }
`;

export const Menu = styled.div`
  padding-top: 60px;
  align-self: center;
  justify-self: center;

  div#custom-enter {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.4em;
    font-weight: bold;

    height: 40vh;
    width: 40vh;

    border: 1px solid #fff;
    border-radius: 50%;
    text-transform: uppercase;
    transition: 0.5s;
  }
`;
