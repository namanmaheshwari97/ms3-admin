export const API = {
  AUTH: {
    SIGN_IN: {
      method: 'POST',
      url: '/authenticate'
    },
    SIGN_OUT: {
      method: 'DELETE',
      url: '/authenticate'
    }
  },
  EMPLOYEES: {
    QUERY: {
      method: 'GET',
      url: '/employees'
    },
    CREATE: {
      method: 'POST',
      url: '/employees'
    },
    DELETE: {
      method: 'DELETE',
      url: '/employees/${id}'
    }
  }
};
