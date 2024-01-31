import React from 'react';
import './App.css';
import { Article } from './components/Article.styled';
import { Button } from './components/Button.styled';
import { Card } from './components/Card.styled';
import { Image } from './components/Image.styled';
import { Title } from './components/Title.styled';
import { WrappCard } from './components/WrappCard.styled';
import Logo from './assets/images/picture.svg'
import { InfoWrapp } from './components/InfoWrapp';
import { BtnWrapp } from './components/BtnWrapp';



function App() {
  return (
    <WrappCard>
      <Card>
        <Image src={Logo} />
        <InfoWrapp>
          <Title>Headline</Title>
          <Article>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Article>
        </InfoWrapp>
        <BtnWrapp>
          <Button primary >See more</Button>
          <Button outline >Save</Button>
        </BtnWrapp>

      </Card>
    </WrappCard>
  );
}

export default App;
