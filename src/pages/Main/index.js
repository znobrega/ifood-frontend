import React, { useState } from "react";

import { Navbar, Container, Content, Menu } from "./styles";

export default function Main() {
  const [hover, setHover] = useState(false);

  function handleMouseHover(e) {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <>
      <Container className='background-image' hover={hover}>
        <Navbar>
          <strong>About</strong>
        </Navbar>
        <Content>
          <aside>
            <strong>BEAUTY</strong>
            <ul>
              <li>Rose duste</li>
              <li>1,2,3</li>
              <li>No tite</li>
              <li>Blossom bodies</li>
              <li>Holly</li>
              <li>Marine</li>
              <li>Story of a shell</li>
            </ul>
          </aside>
          <Menu onMouseEnter={handleMouseHover} onMouseLeave={handleMouseOut}>
            <div id='custom-enter'>Enter</div>
          </Menu>
          <span className='page'>1 / 5</span>
        </Content>
      </Container>
    </>
  );
}
