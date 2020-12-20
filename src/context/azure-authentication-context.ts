import { UserAgentApplication, Account } from 'msal';

import { MSAL_CONFIG } from '../environment';

export class AzureAuthenticationContext {

  private msalObject = new UserAgentApplication(MSAL_CONFIG);
  private loginRequest = { scopes: MSAL_CONFIG.auth.graphScopes };

  login(): void {
    this.msalObject.loginRedirect(this.loginRequest);
  }
}

export const azureContext = new AzureAuthenticationContext();