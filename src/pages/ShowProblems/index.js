import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';

import api from '../../services/api';

import {
  Container,
  Background,
  Content,
  Card,
  Description,
  CreatedDate,
  Title,
  ProblemList,
} from './styles';

export default function ShowProblems() {
  const route = useRoute();
  const [problems, setProblems] = useState([]);
  const { order } = route.params;

  useEffect(() => {
    async function loadInitialData() {
      const response = await api.get(`delivery/${order.id}/problems`);

      const data = response.data.map(problem => ({
        ...problem,
        create_date_formated: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
      }));

      setProblems(data);
    }

    loadInitialData();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Background />
      <Content>
        <Title>Encomenda {order.id}</Title>
        <ProblemList>
          {problems.map(problem => (
            <Card key={problem.id}>
              <Description>{problem.description}</Description>
              <CreatedDate>{problem.create_date_formated}</CreatedDate>
            </Card>
          ))}
        </ProblemList>
      </Content>
    </Container>
  );
}
