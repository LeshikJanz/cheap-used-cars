const config = {
  baseUrl: 'http://52.65.138.241:8080/api/'
};

declare function fetch(...params);

/**
 * Function for converting http response to JSON format
 *
 * @param {any} response - http response
 *
 * @returns {any} response - http response
 */
export const JSONResponse = (response: any) => {
  if (response.ok) {
    return response.json();
  }

  const json = response.json();
  return json.then((err: any) => {
    throw err;
  });
};

/**
 * Object for sending GET, POST, PUT, DELETE, etc requests
 *
 * @type {any}
 */
export const request: any = new Object({
  get: (apiEndpoint: string, params?: any) => {

    const paramsString = Object
      .keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');

    return fetch(config.baseUrl + apiEndpoint + (paramsString ? `?${paramsString}` : ''))
      .then(JSONResponse);
  },
  post: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(JSONResponse);
  },
  put: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  patch: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: 'PATCH',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  delete: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: 'DELETE',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  }
});
