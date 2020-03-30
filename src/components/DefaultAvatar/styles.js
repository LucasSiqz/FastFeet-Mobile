import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: ${props => `${props.size / 2}px`};
  margin-right: 5px;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  background: ${props => props.background};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.Text`
  color: ${props => props.color};
  font-size: ${props => `${props.size / 2}px`};
`;
