import styled from 'styled-components/native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {isLoginSelector} from '@store/selector/index';
import {navigateReset} from '@navigations/index';
interface Props {}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingScreen: React.FC<Props> = ({}) => {
  const isLogin = useSelector(isLoginSelector);
  const timer = setTimeout(() => {
    isLogin ? navigateReset('AppStack') : navigateReset('AuthStack');
  }, 2000);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);
  return (
    <Container>
      <ActivityIndicator size="large" color="#0000ff" />
    </Container>
  );
};

export default LoadingScreen;
