import styled from 'styled-components/native';
import Input from '../../components/Input';
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
`;

export const ProblemInput = styled(Input)`
  height: 300px;
  border: 1px #0000001a;
  display: flex;
  align-items: flex-start;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
