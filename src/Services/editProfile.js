export const editProfile = (
  currentUser,
  firstname,
  lastname,
  username,
  password,
  profilepicture,
  profilebio
) => {
  return fetch(`/api/users/${currentUser}`, {
    method: "PATCH",
    body: JSON.stringify({
      firstname,
      lastname,
      username,
      password,
      profilepicture,
      profilebio
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
