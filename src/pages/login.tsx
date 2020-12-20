import React from 'react';
import Button from '@atlaskit/button';

import AzureAuthenticationContext from '../context/azure-authentication-context';

export default function LogIn() {
  const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();

  return (<div className="h-screen flex justify-center items-center">
    <Button id="authenticationButton" onClick={authenticationModule.login}>Log in</Button>
  </div>);
}