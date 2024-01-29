import React from 'react';
import './App.css';
import { Article } from './components/Article.styled';
import { Button } from './components/Button.styled';
import { Card } from './components/Card.styled';
import { Image } from './components/Image.styled';
import { Title } from './components/Title.styled';
import { WrappCard } from './components/WrappCard.styled';



function App() {
  return (
    <WrappCard>
      <Card>
        <Image/>
        <Title>Headline</Title>
        <Article>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Article>
        <Button primary >See more</Button>
        <Button outline >Save</Button>
      </Card>
    </WrappCard>
  );
}

export default App;
