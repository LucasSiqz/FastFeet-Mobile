import React, { useState, useRef } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Background,
  Content,
  CameraContainer,
  SubmitButton,
  Camera,
  Preview,
  PhotoContainer,
  TakePhotoButton,
} from './styles';

export default function ConfirmDelivery() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order, reloadInitialData } = route.params;
  const [picture, setPicture] = useState('');
  const cameraRef = useRef(null);

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: picture,
      name: 'signature.jpg',
    });

    try {
      const response = await api.post('files', dataFile);

      await api.put(
        `deliveryman/${order.deliveryman_id}/deliveries/${order.id}`,
        {
          end_date: new Date(),
          signature_id: response.data.id,
        },
      );

      reloadInitialData();
      navigation.popToTop();

      Alert.alert('Entrega finalizada com sucesso!');
    } catch (err) {
      Alert.alert(
        'Falha ao confirmar a entrga',
        'Houve um erro ao confirmar entrega, tente mais tarde!',
      );
    }
  }

  async function handletakePicture() {
    const options = { quality: 0.5, base64: true };
    const data = await cameraRef.current.takePictureAsync(options);
    await setPicture(data.uri);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Background />
      <Content>
        {picture === '' ? (
          <CameraContainer>
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <TakePhotoButton onPress={handletakePicture}>
              <Icon
                name="photo-camera"
                size={35}
                color="rgba(255,255,255,0.6)"
              />
            </TakePhotoButton>
          </CameraContainer>
        ) : (
          <PhotoContainer>
            <Preview source={{ uri: picture }} />
            <TakePhotoButton onPress={() => setPicture('')}>
              <Icon
                name="photo-camera"
                size={35}
                color="rgba(255,255,255,0.6)"
              />
            </TakePhotoButton>
          </PhotoContainer>
        )}
        <SubmitButton onPress={handleSubmit} loading={false}>
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
