import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Background,
  Content,
  ProblemInput,
  SubmitButton,
} from './styles';

export default function InformProblem() {
  const navigation = useNavigation();
  const route = useRoute();
  const [problem, setProblem] = useState('');
  const { order } = route.params;

  async function handleSubmit() {
    await api.post(`delivery/${order.id}/problems`, { description: problem });
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Background />
      <Content>
        <ProblemInput
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          multiline
          onSubmitEditing={handleSubmit}
          value={problem}
          onChangeText={setProblem}
        />
        <SubmitButton background="#7D40E7" onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
