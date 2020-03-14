import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Image } from 'react-native';

import logo from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />

      <Image source={logo} />
      <Form>
        <FormInput
          placeholder="Digite seu id"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />

        <SubmitButton
          loading={loading}
          onPress={handleSubmit}
          background="#82BF18">
          Acessar
        </SubmitButton>
      </Form>
    </Container>
  );
}
