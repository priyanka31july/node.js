// controllers/userController.js
module.exports = (db) => {
  const createUser = async (req, res) => {
    try {
      const { name, email, phoneNumber } = req.body;
      const [result] = await db.promise().query('INSERT INTO users (name, email, phoneNumber) VALUES (?, ?, ?)', [name, email, phoneNumber]);
      res.json({ id: result.insertId, name, email, phoneNumber });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const getAllUsers = async (req, res) => {
    try {
      const [rows] = await db.promise().query('SELECT * FROM users');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const [result] = await db.promise().query('DELETE FROM users WHERE id = ?', [id]);
      res.json({ affectedRows: result.affectedRows });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  return {
    createUser,
    getAllUsers,
    deleteUser,
  };
};
