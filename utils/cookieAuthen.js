import Cookies from "js-cookie";

const cookiesConfig = require('./cookieConfig');
const AccessToken = cookiesConfig.AUTHEN.AccessToken;
const UserInfo = cookiesConfig.AUTHEN.UserInfo;
const CsrfState = cookiesConfig.AUTHEN.CsrfState;

export function getAccessToken() {
  if(process.browser) {
    return localStorage.getItem(AccessToken);
  }
}

export function setAccessToken(token) {
  if (process.browser) {
    localStorage.setItem(AccessToken, token);
  }
}

export function removeAccessToken() {
  if (process.browser) {
    localStorage.removeItem(AccessToken);
  }
}

export function getUserInfo() {
  if (process.browser) {
    return localStorage.getItem(UserInfo);
  }
}

export function setUserInfo(data) {
  if (process.browser) {
    localStorage.setItem(UserInfo, JSON.stringify(data));
  }
}

export function removeUserInfo() {
  if (process.browser) {
    localStorage.removeItem(UserInfo);
  }
}