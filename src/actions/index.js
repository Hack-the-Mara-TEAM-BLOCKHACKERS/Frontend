const login = (status) => {
  return {
    type: 'STATUS',
    payload: status
  };
};

const logout = (stat) => {
  return {
    type: 'LOGOUT',
    payload: stat
  };
};

const getDetails = (data) => {
  return {
    type: 'DETAILS',
    payload: data
  };
};

const getLandOwners = (data) => {
  return {
    type: 'LAND OWNERS',
    payload: data
  };
};

const loginAdmin = (data) => {
  return {
    type: 'LOGIN ADMIN',
    payload: data
  };
};

export { login, logout, getDetails, getLandOwners, loginAdmin };
