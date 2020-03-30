import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  padding: 36px;
  background: #fff;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Item = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Avatar = styled.Image`
  margin-top: 27px;
  margin-bottom: 40px;
  width: 136px;
  height: 136px;
  border-radius: 68px;
  align-self: center;
`;

export const DefaultAvatarView = styled.View`
  margin-top: 27px;
  margin-bottom: 40px;
  align-self: center;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
`;
