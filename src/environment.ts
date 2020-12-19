import IAzADConfig from './core/interfaces/IAzADConfig';

export const AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID = '468daba3-fdd8-4d18-937a-7fe5edf4e62d';
export const APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'https://localhost:8443';
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
export const logInPopUp = 'loginPopup';
export const loginRedirect = 'loginRedirect';
export const MSAL_CONFIG: IAzADConfig  =  {
  auth: {
      clientId: '468daba3-fdd8-4d18-937a-7fe5edf4e62d',
      authority: 'https://login.microsoftonline.com/20093d99-aa75-47ce-8170-9cfe0c88b6b5',
      redirectUri: "http://localhost:3000",
      graphScopes: ['openid', 'profile', 'User.Read']
  }
};