import { UserAgentApplication } from 'msal';

import { MSAL_CONFIG } from '../environment';

export class AzureAuthenticationContext {

  private msalObject = new UserAgentApplication(MSAL_CONFIG);
  private loginRequest = { scopes: MSAL_CONFIG.auth.graphScopes };

  login(): void {
    this.msalObject.loginRedirect(this.loginRequest);
  }

  acquireToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.msalObject.acquireTokenSilent(this.loginRequest)
      .then(loginResponse => {
        resolve(loginResponse.idToken.rawIdToken);
      })
      .catch(error => reject(error));
    });
  }
}

export const azureContext = new AzureAuthenticationContext();
