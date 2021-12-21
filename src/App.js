import React from "react";
import styled from "styled-components";
import { ImQuotesLeft } from 'react-icons/im'
import { FaTwitter, FaTumblr } from 'react-icons/fa'
import {  Wrapper,
          Container,
          Author,
          Quote,
          Buttons,
          Share,
          Twitter,
          Tumblr,
          NewQuote } from './styles'

function App() {
  return (
    <main>
      <Wrapper>
        <Container>
          <Quote><ImQuotesLeft /> It’s not the years in your life that count. It’s the life in your years.</Quote>
          <Author>- Abraham Lincoln</Author>
          <Buttons>
            <Share>
              <Twitter className='btn btn-light'><FaTwitter /></Twitter>
              <Tumblr className='btn btn-light'><FaTumblr /></Tumblr>
            </Share>
            <NewQuote className='btn btn-light'>New Quote</NewQuote>
          </Buttons>
        </Container>
      </Wrapper>
    </main>
  );
}

export default App;
