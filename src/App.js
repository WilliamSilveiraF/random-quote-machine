import React, { useState } from "react";
import { data } from './data'
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
  const newQuote = () => {
     const index = Math.floor(Math.random() * data.length);
     return(data[index])
  }
  const [quote, setQuote] = useState(newQuote())

  return (
    <main>
      <Wrapper>
        <Container>
          <Quote><ImQuotesLeft /> { quote.text }</Quote>
          <Author>- { quote.author }</Author>
          <Buttons>
            <Share>
              <Twitter 
                className='btn btn-light'
                href={`https://twitter.com/intent/tweet?text=${quote.text} -${quote.author}`}><FaTwitter />
              </Twitter>
              <Tumblr 
                className='btn btn-light'
                href={'https://www.tumblr.com/'}
              ><FaTumblr />
              </Tumblr>
            </Share>
            <NewQuote className='btn btn-light' onClick={() => setQuote(newQuote())}>New Quote</NewQuote>
          </Buttons>
        </Container>
      </Wrapper>
    </main>
  );
}

export default App;
