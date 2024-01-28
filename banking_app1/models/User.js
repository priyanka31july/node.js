// models/userModel.js
const createUserQuery = 'INSERT INTO users (name, email, phoneNumber) VALUES (?, ?, ?)';
const getAllUsersQuery = 'SELECT * FROM users';
const deleteUserQuery = 'DELETE FROM users WHERE id = ?';

module.exports = {
  createUserQuery,
  getAllUsersQuery,
  deleteUserQuery,
};
