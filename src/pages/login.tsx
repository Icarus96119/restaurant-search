import React from 'react';
import Button from '@atlaskit/button';

import { AzureAuthenticationContext } from '../context/azure-authentication-context';

interface IProps {
  azureContext: AzureAuthenticationContext
}

export default function LogIn(props: IProps) {
  return (<div className="h-screen flex justify-center items-center">
    <Button id="authenticationButton" onClick={() => { props.azureContext.login() }}>Log in</Button>
  </div>);
}