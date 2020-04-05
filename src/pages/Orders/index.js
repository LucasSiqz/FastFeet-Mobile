import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { parseISO, format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { signOut } from '../../store/modules/auth/actions';
import DefaultAvatar from '../../components/DefaultAvatar';

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
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth);
  const { name } = useSelector(state => state.user.profile);
  const { avatar } = useSelector(state => state.user.profile);
  const [ordersData, setOrdersData] = useState([]);
  const [oldOrders, setOldOrders] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function loadInitialData() {
      if (oldOrders) {
        const response = await api.get(`deliveryman/${id}/deliveries?old=true`);

        const data = response.data.map(order => ({
          ...order,
          create_date_formated: format(parseISO(order.createdAt), 'dd/MM/yyyy'),
          city: order.recipient.city,
          status: 'Entregue',
          isWithdrawal: !!order.start_date,
        }));

        setOrdersData(data);
      } else {
        const response = await api.get(`deliveryman/${id}/deliveries`);

        const data = response.data.map(order => ({
          ...order,
          create_date_formated: format(parseISO(order.createdAt), 'dd/MM/yyyy'),
          city: order.recipient.city,
          status: 'Pendente',
          isWithdrawal: !!order.start_date,
        }));

        setOrdersData(data);
      }
    }

    if (avatar) {
      setUrl(avatar.url);
    }

    loadInitialData();
  }, [id, oldOrders, avatar]);

  async function reloadInitialData() {
    const response = await api.get(`deliveryman/${id}/deliveries`);

    const data = response.data.map(order => ({
      ...order,
      create_date_formated: format(parseISO(order.createdAt), 'dd/MM/yyyy'),
      city: order.recipient.city,
      status: 'Pendente',
      isWithdrawal: !!order.start_date,
    }));

    setOrdersData(data);
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <InitialContent>
        {url ? (
          <Avatar source={{ uri: url }} />
        ) : (
          <DefaultAvatar name={name} size={68} />
        )}

        <WelcomeTextContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Title>{name}</Title>
        </WelcomeTextContainer>
        <IconContainer>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout-variant" size={25} color="#E74040" />
          </TouchableOpacity>
        </IconContainer>
      </InitialContent>
      <MediumContent>
        <Title>Entregas</Title>
        <Options>
          <TouchableOpacity onPress={() => setOldOrders(false)}>
            <Option style={oldOrders}>Pendentes</Option>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOldOrders(true)}>
            <Option style={!oldOrders}>Entregues</Option>
          </TouchableOpacity>
        </Options>
      </MediumContent>
      <OrdersList>
        {ordersData.map(order => (
          <Order key={order.id}>
            <InitialOrderContent>
              <Icon name="truck" size={25} color="#7D40E7" />
              <OrderId>Encomenda {order.id}</OrderId>
            </InitialOrderContent>
            <OrderStatus>
              <Progress>
                <Circle background="#7d40e7" />
                <Line />
                <Circle background={order.isWithdrawal ? '#7d40e7' : '#fff'} />
                <Line />
                <Circle background={oldOrders ? '#7d40e7' : '#fff'} />
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
                <Info>{order.create_date_formated}</Info>
              </InfoContent>
              <InfoContent>
                <InfoTitle>Cidade</InfoTitle>
                <Info>{order.city}</Info>
              </InfoContent>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OrderDetail', {
                    order,
                    reloadInitialData,
                  })
                }>
                <DetailButtom>Ver detalhes</DetailButtom>
              </TouchableOpacity>
            </OrderInfo>
          </Order>
        ))}
      </OrdersList>
    </Container>
  );
}
