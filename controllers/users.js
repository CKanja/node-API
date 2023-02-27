export const getUser = (req,res) => {
    console.log(users)
    res.send(users);
}

export const postUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`user with name ${user.firstName} added to DB`);

  console.log(req.body);
};

export const getSingleUser = (req, res) => {
  const browsedID = req.params.id;

  const foundUser = users.find((user) => user.id === browsedID);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id !== id);

  res.send(`user with id: ${id} has been deleted`);
};

export const editUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`modified details of user with id: ${id}`);
};