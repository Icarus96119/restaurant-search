import { Configuration, LogLevel } from '@azure/msal-browser';

export const AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID = '468daba3-fdd8-4d18-937a-7fe5edf4e62d';
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
export const logInPopUp = 'loginPopup';
export const loginRedirect = 'loginRedirect';
export const MSAL_CONFIG: Configuration = {
  auth: {
    clientId: AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};