import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/buttons';
import { Nav, NavImg, Container, Paragraph } from '../styles/navbar';
import {Spinner} from '../styles/animations';

class styles extends Component {
  state = {
    nav: ['CSS', 'Sass', 'Modules', 'Styled', 'Inline'],
    author: [
      {
        name: 'Tim Biles',
        bio: 'I like programming and drumming',
        date: 'Nov 6',
        length: '10 min read',
        img: 'http://www.nitch.com/content/images/437744462884845568.jpg'
      }
    ]
  };
  render() {
    const { nav } = this.state;
    const navMap = nav.map((e, i) => {
      return (
        <Link key={i} to={e === 'CSS' ? '/' : `/${e}`}>
          {e}
        </Link>
      );
    });
    return (
      <>
        <Nav>
          <Container>
            <Container>
              <Paragraph primary>M</Paragraph>
              <NavImg src="https://cdn-images-1.medium.com/letterbox/300/36/50/50/1*1HcGNZYjo78mH0faO3BnaQ.png?source=logoAvatar-lo_Cv3NH663UOmh---3a8144eabfe3" />
              <Button>I am a button</Button>
            </Container>
            <Container>
              <Paragraph>Log In</Paragraph>
              <Button>Get started</Button>
            </Container>
            <Container>
                {navMap}
            </Container>
          </Container>
          <Spinner>

          </Spinner>
        </Nav>
      </>
    );
  }
}

export default styles;
