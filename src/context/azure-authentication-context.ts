import { AccountInfo, PopupRequest, PublicClientApplication, RedirectRequest, } from "@azure/msal-browser";

import { MSAL_CONFIG } from '../environment';

export class AzureAuthenticationContext {

  private msalObject = new PublicClientApplication(MSAL_CONFIG);
  private loginRedirectRequest: RedirectRequest;
  private loginRequest?: PopupRequest = { scopes: [], prompt: 'select_account'};;

  public isAuthenticationConfigured = false;

  constructor() {
    this.setRequestObjects();
    if (MSAL_CONFIG?.auth?.clientId) {
      this.isAuthenticationConfigured = true;
    }
  }

  acquireToken(): AccountInfo[] {
    this.msalObject.acquireTokenSilent(this.loginRedirectRequest).then(loginResponse => {

    });
    return this.msalObject.getAllAccounts();
  }

  login(): void {
    this.msalObject.loginRedirect(this.loginRedirectRequest);
  }

  private setRequestObjects(): void {
    this.loginRequest = 

    this.loginRedirectRequest = {
      ...this.loginRequest,
      redirectStartPage: window.location.href,
    };
  }
}

export const azureContext = new AzureAuthenticationContext();