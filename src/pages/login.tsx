import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { useDispatch } from 'react-redux';

import { AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID } from '../environment';
import { setAuthToken } from '../redux/actions';

export default function LogIn() {
  const dispatch = useDispatch();
  const authCallback = (err: any, data: any) => {
    dispatch(setAuthToken('1111-1111'));
    // dispatch(setAuthToken(data.token));
  };
  return (<div className="h-screen flex justify-center items-center">
    <MicrosoftLogin clientId={AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID} authCallback={authCallback}/>
  </div>);
}