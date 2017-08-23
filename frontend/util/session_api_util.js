export const signup = (formData) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};

