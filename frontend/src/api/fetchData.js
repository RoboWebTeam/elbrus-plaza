export const api = process.env.REACT_APP_API || 'https://elbrusplaza.com'

export const fetchData = async () => {
  const result = await fetch(`${api}/rooms/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const editData = async ({ id }, data) => {
  const result = await fetch(`${api}/rooms/edit/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const getRoom = async ({ id }) => {
  const result = await fetch(`${api}/rooms/get/${id}`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const loginSubmit = async ({ email, password }) => {
  const result = await fetch(`${api}/user/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const sendEmail = async ({ name, phone, email, text }) => {
  const result = await fetch(`${api}/mail/`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      phone: phone,
      email: email,
      msg: text,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const reserveRoom = async ({ id }, data) => {
  const result = await fetch(`${api}/rooms/pay/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};
