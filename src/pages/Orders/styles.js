import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
  flex: 1;
`;

export const InitialContent = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  align-self: center;
  margin-right: 12px;
`;

export const WelcomeTextContainer = styled.View`
  align-self: center;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const MediumContent = styled.View`
  display: flex;
  margin-top: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Option = styled.Text`
  padding-left: 15px;
  font-weight: bold;
  color: ${props => (props.style ? '#999999' : '#7D40E7')};
  text-decoration: ${props => (props.style ? 'none' : 'underline')};
`;

export const OrdersList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Order = styled.View`
  border: 1px #0000001a;
  border-radius: 4px;
  margin-bottom: 28px;
`;

export const InitialOrderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  margin-top: 13px;
`;

export const OrderId = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;

export const OrderInfo = styled.View`
  background: #f8f9fd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

export const InfoContent = styled.View`
  display: flex;
`;

export const InfoTitle = styled.Text`
  color: #999999;
  font-size: 8px;
`;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #444444;
`;

export const DetailButtom = styled.Text`
  font-size: 12px;
  color: #7d40e7;
  font-weight: bold;
`;

export const OrderStatus = styled.View`
  display: flex;
  margin-top: 24px;
`;

export const Progress = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 43px;
  padding-right: 32px;
`;

export const Circle = styled.View`
  width: 9px;
  height: 9px;
  background: ${props => props.background};
  border-radius: 5px;
  border: 1px #7d40e7;
`;

export const Line = styled.View`
  height: 1px;
  display: flex;
  align-self: center;
  flex: 1;
  background: #7d40e7;
`;

export const ProgressTitles = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 26px;
  padding-right: 20px;
`;

export const ProgressTitle = styled.Text`
  font-size: 8px;
  color: #999999;
  margin-top: 7px;
  margin-bottom: 16px;
`;
