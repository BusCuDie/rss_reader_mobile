import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import styled from 'styled-components/native';
import colors from '@theme/colors';
import {getUserInforSelector} from '@store/selector/index';
import {useSelector, useDispatch} from 'react-redux';
import {logoutAction} from '@store/actionTypes/authActions';
import {navigateReset} from '@navigations/index';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Drawer = createDrawerNavigator();

const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;
const Avatar = styled.Image`
  height: 50;
  width: 50;
  border-radius: 20px;
`;
const TopSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;
const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.WHITE};
`;
const Button = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  background-color: ${colors.TORY_BLUE};
  padding: 10px;
`;
const DrawerContent = (props: any) => {
  const user = useSelector(getUserInforSelector);
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logoutAction());
      navigateReset('AuthStack');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <TopSection>
        <Avatar source={{uri: user.photoURL}} />
        <Text>{user.displayName}</Text>
      </TopSection>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Button onPress={logout}>
        <TextButton>Logout</TextButton>
      </Button>
    </Container>
  );
};
const DrawerComponent = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
