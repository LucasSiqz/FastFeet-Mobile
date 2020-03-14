import React from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { parseISO, format } from 'date-fns';

import {
  Container,
  Background,
  Content,
  Card,
  CardHeader,
  CardTitle,
  Title,
  Item,
  DatesContainer,
  DateItem,
} from './styles';

export default function OrderDetail() {
  const route = useRoute();
  const { order } = route.params;

  return (
    <Container>
      <Background />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="truck" size={25} color="#7D40E7" />
            <CardTitle>Informações da entrega</CardTitle>
          </CardHeader>
          <Title>DESTINATÁRIO</Title>
          <Item>{order.recipient.recipient_name}</Item>
          <Title>ENDEREÇO DE ENTREGA</Title>
          <Item>
            {order.recipient.street}, {order.recipient.number}, {order.city} -{' '}
            {order.recipient.state}, {order.recipient.cep}
          </Item>
          <Title>PRODUTO</Title>
          <Item>{order.product}</Item>
        </Card>
        <Card>
          <CardHeader>
            <Icon name="calendar" size={25} color="#7D40E7" />
            <CardTitle>Situação da entrega</CardTitle>
          </CardHeader>
          <Title>STATUS</Title>
          <Item>{order.status}</Item>
          <DatesContainer>
            <DateItem>
              <Title>DATA DE RETIRADA</Title>
              <Item>
                {order.start_date
                  ? format(parseISO(order.start_date), 'dd/MM/yyyy')
                  : '-- / -- / --'}
              </Item>
            </DateItem>
            <DateItem>
              <Title>DATA DE ENTREGA</Title>
              <Item>
                {order.end_date
                  ? format(parseISO(order.end_date), 'dd/MM/yyyy')
                  : '-- / -- / --'}
              </Item>
            </DateItem>
          </DatesContainer>
        </Card>
      </Content>
    </Container>
  );
}
