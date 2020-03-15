import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Background, Content } from './styles';

export default function ShowProblems() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Background />
      <Content />
    </Container>
  );
}
