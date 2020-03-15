import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
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
  const [loading, setLoading] = useState(false);
  const { order } = route.params;

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`delivery/${order.id}/problems`, { description: problem });
      navigation.goBack();
      setLoading(false);
      Alert.alert('Problema enviado', 'O problema foi registrado!');
    } catch (err) {
      Alert.alert('Falha ao registrar problema', 'Tente novamente mais tarde!');
      setLoading(false);
    }
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
        <SubmitButton
          loading={loading}
          background="#7D40E7"
          onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
