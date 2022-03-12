import styled from 'styled-components/native';
import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
interface Props {
  route?: any;
  navigation?: any;
}
const Container = styled.View`
  flex: 1;
`;

const WebViewScreen: React.FC<Props> = ({route, navigation}) => {
  const url = route?.params.url;
  console.log(url);
  return (
    <Container>
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    </Container>
  );
};

export default WebViewScreen;
