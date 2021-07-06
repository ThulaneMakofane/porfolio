import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="./">
        <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom:"20px" }}>
           <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/ThulaneMakofane">
       <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/thulane-makofane-2475511b2/">
       <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/scottyguytumblr/">
       <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
 </Container>
);

export default Header;
