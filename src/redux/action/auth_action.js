import * as ActionType from '../ActionType'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const authLoding = () => (dispatch) => {
    dispatch({type: ActionType.AUTH_LOADING})
}

export const auth_error = () => (dispatch) => {
    dispatch({type: ActionType.AUTH_ERROR, payload: error.code})
}

export const SigninWithGoogle = () => async (dispatch) => {
    GoogleSignin.configure({
        webClientId: '591138143160-u0s4h0llus88m7se3h9ps2sm6gp754dp.apps.googleusercontent.com',
    });

    try {
        const { idToken } = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(
            idToken,
        );
        console.log(idToken);
        
        const result = await auth().signInWithCredential(credential)        
        dispatch({ type: ActionType.AUTH_SUCCESS, payload: result})
        console.log(result);
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

