import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import Button from '../../components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Content = styled.View`
  margin-top: -63px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
`;

export const CameraContainer = styled.View`
  width: 100%;
  height: 88%;
  border-radius: 4px;
  overflow: hidden;
`;

export const PhotoContainer = styled.View`
  width: 100%;
  height: 88%;
  border-radius: 4px;
`;

export const Preview = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  background: #7159c1;
  margin-top: 15px;
`;

export const TakePhotoButton = styled.TouchableOpacity`
  margin-top: -100px;
  background: #0000004d;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  align-self: center;
  margin-bottom: 22px;
`;
