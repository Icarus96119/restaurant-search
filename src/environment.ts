import { IAzADConfig } from './core/models/msal.model';

export const AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID = '468daba3-fdd8-4d18-937a-7fe5edf4e62d';
export const APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'https://localhost:8443';
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
export const loginRedirect = 'loginRedirect';
export const MSAL_CONFIG: IAzADConfig = {
  auth: {
      clientId: AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID,
      authority: 'https://login.microsoftonline.com/common',
      redirectUri: APP_REDIRECT_URI,
      graphScopes: ['openid', 'profile', 'user.read']
  }
};