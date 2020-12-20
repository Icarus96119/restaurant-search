import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { useDispatch } from 'react-redux';

import { AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID, APP_REDIRECT_URI } from '../environment';
import { setAuthToken } from '../redux/actions';

export default function LogIn() {
  const dispatch = useDispatch();
  const authCallback = (err: any, data: any) => {
    alert('ok');
    console.log(data);
    dispatch(setAuthToken('1111-1111'));
    // dispatch(setAuthToken(data.token));
  };
  return (<div className="h-screen flex justify-center items-center">
    <MicrosoftLogin clientId={AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID} withUserData={true} redirectUri={APP_REDIRECT_URI} authCallback={authCallback}/>
  </div>);
}