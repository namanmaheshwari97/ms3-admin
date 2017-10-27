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
  },
  USERS: {
    QUERY: {
      method: 'GET',
      url: '/users'
    },
    DELETE: {
      method: 'PUT',
      url: '/users/${id}/deactivate'
    },
    ACTIVATE: {
      method: 'PUT',
      url: '/users/${id}/activate'
    }
  },
  BLACKLIST: {
    QUERY: {
      method: 'GET',
      url: '/blacklist'
    },
    CREATE: {
      method: 'POST',
      url: '/blacklist'
    },
    DELETE: {
      method: 'DELETE',
      url: '/blacklist/${id}'
    }
  }
};
