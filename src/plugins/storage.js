export function getStorage(key) {
  /**
   * Retrieve a value from local storage by its key.
   *
   * @param {string} key - Key to retrieve the value from local storage.
   * @returns {string} - Value from local storage
   */

  if (process.client && key && localStorage.getItem(key)) {
    // only if code is running server-side and key exist
    return localStorage.getItem(key);
  }
  return null;
}

export function setStorage(key, value) {
  /**
   * Set a value in local storage by its key.
   *
   * @param {string} key - Key to store the value in local storage.
   * @param {string} value - Value to store in local storage.
   */

  if (process.client && key) {
    // only if code is running server-side and key exist
    if (value != null) {
      localStorage.setItem(key, value);
    } else {
      // Remove from storage if the value to be assigned is empty
      localStorage.removeItem(key);
    }
  }
}

export function removeStorage(key) {
  /**
   * Remove a value from local storage by its key.
   *
   * @param {string} key - Key of the value to remove from local storage.
   */

  if (process.client && key) {
    // only if code is running server-side and key exist
    localStorage.removeItem(key);
  }
}
