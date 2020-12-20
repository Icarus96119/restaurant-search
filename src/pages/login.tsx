import React from 'react';
import { useDispatch } from 'react-redux';
import { AccountInfo } from "@azure/msal-browser";
import Button from '@atlaskit/button';

import AzureAuthenticationContext from '../context/azure-authentication-context';
import { setAuthToken } from '../redux/actions';
import { logInPopUp, loginRedirect } from '../environment';

export default function LogIn() {
  const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();
  const dispatch = useDispatch();

  const userAgent = window.navigator.userAgent;
  const msie = userAgent.indexOf("MSIE ");
  const msie11 = userAgent.indexOf("Trident/");
  const isIE = msie > 0 || msie11 > 0;

  const returnedAccountInfo = (user: AccountInfo) => {
    // set state
    if (user) {
      dispatch(setAuthToken(user.homeAccountId));
    }
  };

  const logIn = (method: string): any => {
    const logInType = isIE ? loginRedirect : logInPopUp;

    // Azure Login
    authenticationModule.login(logInType, returnedAccountInfo);
  };

  return (<div className="h-screen flex justify-center items-center">
    <Button id="authenticationButton" onClick={() => logIn("loginPopup")}>Log in</Button>
  </div>);
}