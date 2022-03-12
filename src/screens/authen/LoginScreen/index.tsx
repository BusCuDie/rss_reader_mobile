import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import colors from '@theme/colors';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {loginAction} from '@store/actionTypes/authActions';
import {navigateReset} from '@navigations/index';
interface Props {}
const LoginScreen: React.FC<Props> = ({}) => {
  const [user, setUser] = useState<Object | null>(null);
  const dispatch = useDispatch();
  GoogleSignin.configure({
    webClientId:
      '403885554251-3nfnuh0cridc58g16896225emakpb6nt.apps.googleusercontent.com',
  });
  const _onPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    console.log('ID TOKEN', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(res => {
        console.log(res.user);
        setUser(user);
        dispatch(loginAction(res.user));
        navigateReset('AppStack');
      })
      .catch(err => console.log(err));
  };

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeView>
      <Button onPress={_onPress}>
        <Text>Login Google</Text>
      </Button>
      <Button onPress={logout}>
        <Text>Logout Google</Text>
      </Button>
    </SafeView>
  );
};

const SafeView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity``;
const Text = styled.Text``;
export default memo(LoginScreen);
