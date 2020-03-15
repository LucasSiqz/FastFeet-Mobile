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
  margin-top: -83px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Title = styled.Text`
  font-size: 18px;
  align-self: center;
  color: #fff;
  font-weight: bold;
`;

export const ProblemList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 13px;
`;

export const Card = styled.View`
  border: 1px #0000001a;
  margin-bottom: 15px;
  padding: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
`;

export const Description = styled.Text`
  font-size: 16px;
  max-width: 260px;
  color: #999999;
`;

export const CreatedDate = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
