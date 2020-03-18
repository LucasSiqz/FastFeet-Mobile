import React from 'react';
import { StatusBar, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { parseISO, format } from 'date-fns';

import api from '../../services/api';

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
  OptionsContainer,
  Option,
  OptionTitle,
  OptionMiddle,
} from './styles';

export default function OrderDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order } = route.params;

  async function handleWithdraw() {
    try {
      await api.put(
        `deliveryman/${order.deliveryman_id}/deliveries/${order.id}`,
        {
          start_date: new Date(),
        },
      );

      Alert.alert(
        'Retirada feita com sucesso!, Os status da encomanda foram atualizados!',
      );

      navigation.popToTop();
    } catch (err) {
      Alert.alert(
        'Falha ao confirmar a entrga',
        'Verifique o horario para retirada, tente mais tarde!',
      );
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
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
        {!order.end_date ? (
          <OptionsContainer>
            <Option
              onPress={() => navigation.navigate('InformProblem', { order })}>
              <Icon name="close-circle-outline" size={25} color="#E74040" />
              <OptionTitle> Informar{'\n'}Problema</OptionTitle>
            </Option>
            <OptionMiddle
              onPress={() => navigation.navigate('ShowProblems', { order })}>
              <Icon name="information-outline" size={25} color="#E7BA40" />
              <OptionTitle> Visualizar{'\n'}Problemas</OptionTitle>
            </OptionMiddle>
            {order.start_date ? (
              <Option
                onPress={() =>
                  navigation.navigate('ConfirmDelivery', { order })
                }>
                <Icon name="check-circle-outline" size={25} color="#7D40E7" />
                <OptionTitle>Confirmar{'\n\t'}Entrega</OptionTitle>
              </Option>
            ) : (
              <Option onPress={handleWithdraw}>
                <Icon name="check-circle-outline" size={25} color="#7D40E7" />
                <OptionTitle>Confirmar{'\n\t'}Retirada</OptionTitle>
              </Option>
            )}
          </OptionsContainer>
        ) : (
          <OptionsContainer>
            <OptionMiddle
              onPress={() => navigation.navigate('ShowProblems', { order })}>
              <Icon name="information-outline" size={25} color="#E7BA40" />
              <OptionTitle> Visualizar{'\n'}Problemas</OptionTitle>
            </OptionMiddle>
          </OptionsContainer>
        )}
      </Content>
    </Container>
  );
}
