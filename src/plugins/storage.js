import Cookies from "universal-cookie";

export function getStorage(localStorageKey) {
  if (process.client && localStorage.getItem(localStorageKey)) {
    return localStorage.getItem(localStorageKey);
  }
  return null;
}

export function setStorage(localStorageKey, value) {
  if (process.client && localStorageKey) {
    localStorage.setItem(localStorageKey, value);
    const cookies = new Cookies();
    cookies.set(localStorageKey, value);
  }
}
