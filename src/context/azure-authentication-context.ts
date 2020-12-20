import { AccountInfo, PopupRequest, PublicClientApplication, RedirectRequest, } from "@azure/msal-browser";

import { MSAL_CONFIG } from '../environment';

export class AzureAuthenticationContext {

  private msalObject: PublicClientApplication = new PublicClientApplication(
    MSAL_CONFIG
  );
  private loginRedirectRequest?: RedirectRequest;
  private loginRequest?: PopupRequest;

  public isAuthenticationConfigured = false;

  constructor() {
    this.setRequestObjects();
    if (MSAL_CONFIG?.auth?.clientId) {
      this.isAuthenticationConfigured = true;
    }
  }

  private setRequestObjects(): void {
    this.loginRequest = {
      scopes: [],
      prompt: 'select_account',
    };

    this.loginRedirectRequest = {
      ...this.loginRequest,
      redirectStartPage: window.location.href,
    };
  }

  login(): void {
    this.msalObject.loginRedirect(this.loginRedirectRequest);
  }

}

export default AzureAuthenticationContext;