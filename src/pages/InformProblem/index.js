import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Background,
  Content,
  ProblemInput,
  SubmitButton,
} from './styles';

export default function InformProblem() {
  const [problem, setProblem] = useState('');

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Background />
      <Content>
        <ProblemInput
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          multiline
          onSubmitEditing={() => {}}
          value={problem}
          onChangeText={setProblem}
        />
        <SubmitButton background="#7D40E7" onPress={() => {}}>
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
