import React, {memo} from 'react';
import styled from 'styled-components/native';

interface Props {
  route?: any;
}

const Container = styled.View``;
const Input = styled.TextInput``;
const Text = styled.Text``;
const LoginScreen: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Text>Hế lô</Text>
      <Input />
    </Container>
  );
};

export default memo(LoginScreen);
