export const API = {
  AUTH: {
    SIGN_IN: {
      method: 'POST',
      url: '/auth'
    },
    SIGN_OUT: {
      method: 'DELETE',
      url: '/auth'
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
