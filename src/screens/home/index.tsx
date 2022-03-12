import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector, useDispatch} from 'react-redux';
import {logoutAction} from '@store/actionTypes/authActions';
import {navigateReset, navigate} from '@navigations/index';

import * as rssParser from 'react-native-rss-parser';
import colors from '@theme/colors';
interface Props {}
const HomeScreen: React.FC<Props> = () => {
  const [rssUrl, setRssUrl] = useState('');
  const [items, setItems] = useState([]);

  const onPress = async () => {
    if (rssUrl) {
      fetch(rssUrl)
        .then(response => response.text())
        .then(responseData => rssParser.parse(responseData))
        .then(rss => {
          // console.log(rss);
          setItems(rss.items);
          console.log(rss.items);
        });
    }
  };

  const onPressItem = itemUrl => {
    navigate('WebViewScreen', {url: itemUrl});
  };
  return (
    <Container>
      <TextInputContainer>
        <TextInput
          onChangeText={text => setRssUrl(text)}
          value={rssUrl}
          placeholder="Enter url"
        />
        <Button onPress={onPress}>
          <TextButton>ADD</TextButton>
        </Button>
      </TextInputContainer>
      {items.length && items.length > 0
        ? items.map(item => (
            <RSSContainer
              key={item.id}
              onPress={() => onPressItem(item.links[0].url)}>
              <RssTitle>{item.title}</RssTitle>
              <Text>{item.links[0].url}</Text>
            </RSSContainer>
          ))
        : null}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.WHITE};
`;
const Text = styled.Text``;
const Button = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${colors.TORY_BLUE};
  height: 53px;
`;
const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  flex: 8;
  border-width: 1px;
`;
const TextButton = styled.Text``;
const RSSContainer = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
`;
const RssTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
`;
export default memo(HomeScreen);
