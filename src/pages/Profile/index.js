import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';

import DefaultAvatar from '../../components/DefaultAvatar';
import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Title,
  Item,
  Avatar,
  LogoutButton,
  DefaultAvatarView,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { name, email, created_at } = useSelector(state => state.user.profile);
  const { avatar } = useSelector(state => state.user.profile);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (avatar) {
      setUrl(avatar.url);
    }
  }, [avatar]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {url ? (
        <Avatar source={{ uri: url }} />
      ) : (
        <DefaultAvatarView>
          <DefaultAvatar name={name} size={136} />
        </DefaultAvatarView>
      )}

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
