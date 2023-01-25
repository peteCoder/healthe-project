
const fetchUser = () => {
  const user = localStorage.getItem('user') !== null ? localStorage.parse(localStorage.getItem('user')) : localStorage.clear();
  return user;
}

export default fetchUser;




// const {
//   displayName,
//   email,
//   phoneNumber,
//   photoURL,
//   uid
// } = currentUser.providerData[0]

// const doc = {
//   _id: uid,
//   _type: "user",
//   displayName,
//   photoURL,
//   email,
//   phoneNumber
// }


// client.createIfNotExists(doc)
//   .then(() => navigation('/', {replace: true}))
