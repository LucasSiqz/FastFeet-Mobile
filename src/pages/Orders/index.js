import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  InitialContent,
  Avatar,
  WelcomeTextContainer,
  Welcome,
  Title,
  IconContainer,
  MediumContent,
  Options,
  Option,
  OrdersList,
  Order,
  InitialOrderContent,
  OrderId,
  OrderStatus,
  OrderInfo,
  InfoContent,
  InfoTitle,
  Info,
  DetailButtom,
  Progress,
  Circle,
  Line,
  ProgressTitles,
  ProgressTitle,
} from './styles';

Icon.loadFont();

export default function Orders() {
  const { name } = useSelector(state => state.user.profile);
  const { url } = useSelector(state => state.user.profile.avatar);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <InitialContent>
        <Avatar source={{ uri: url }} />
        <WelcomeTextContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Title>{name}</Title>
        </WelcomeTextContainer>
        <IconContainer>
          <Icon name="logout-variant" size={25} color="#E74040" />
        </IconContainer>
      </InitialContent>
      <MediumContent>
        <Title>Entregas</Title>
        <Options>
          <Option>Pendentes</Option>
          <Option>Entregues</Option>
        </Options>
      </MediumContent>
      <OrdersList>
        <Order>
          <InitialOrderContent>
            <Icon name="truck" size={25} color="#7D40E7" />
            <OrderId>Encomenda 01</OrderId>
          </InitialOrderContent>
          <OrderStatus>
            <Progress>
              <Circle />
              <Line />
              <Circle />
              <Line />
              <Circle />
            </Progress>
            <ProgressTitles>
              <ProgressTitle>Aguardando{'\n\t'}Retirada</ProgressTitle>
              <ProgressTitle>Retirada</ProgressTitle>
              <ProgressTitle>Entregue</ProgressTitle>
            </ProgressTitles>
          </OrderStatus>
          <OrderInfo>
            <InfoContent>
              <InfoTitle>Data</InfoTitle>
              <Info>14/01/2020</Info>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Cidade</InfoTitle>
              <Info>Diadema</Info>
            </InfoContent>
            <DetailButtom>Ver detalhes</DetailButtom>
          </OrderInfo>
        </Order>
      </OrdersList>
    </Container>
  );
}
