import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, Item, Avatar, LogoutButton } from './styles';

import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const { name, email, created_at } = useSelector(state => state.user.profile);
  const { url } = useSelector(state => state.user.profile.avatar);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar source={{ uri: url }} />
      <Title>Nome completo</Title>
      <Item>{name}</Item>
      <Title>Email</Title>
      <Item>{email}</Item>
      <Title>Data de cadastro</Title>
      <Item>{created_at}</Item>
      <LogoutButton background="#E74040" onPress={handleLogout}>
        Logout
      </LogoutButton>
    </Container>
  );
}
