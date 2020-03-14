import styled from 'styled-components/native';

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
`;

export const Card = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 9px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #eee;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 5px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #999999;
`;
export const Item = styled.Text`
  font-size: 14px;
  margin-bottom: 15px;
  color: #666666;
`;

export const DatesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DateItem = styled.View`
  display: flex;
`;

export const OptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  background: #f8f9fd;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: center;
  align-self: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const OptionTitle = styled.Text`
  font-size: 12px;
  color: #999999;
`;

export const OptionMiddle = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: center;
  align-self: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-left-width: 1px;
  border-left-color: #0000001a;
  border-right-width: 1px;
  border-right-color: #0000001a;
`;
