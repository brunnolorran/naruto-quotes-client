import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'
import {Quotes} from '../../components'
import { getQuote } from '../../services'
import jutsoSound from '../../sounds/src_sounds_jutso.mp3'

const audio = new Audio(jutsoSound)

export function App() {
  const isMounted = useRef(true)

  const [quoteState, setQuoteState] = useState({quote: 'Loading quote...', speaker: 'Loading speaker'})

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      setQuoteState(quote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto with a kunai"/>
    </Content>
  );
}

const Content = styled.div`
   height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

