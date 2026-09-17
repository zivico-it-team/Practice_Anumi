const { pool } = require('../config/db');

const User = {
    // Email eken user kenek hoyaganna
    async findOneByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    // Aluth user kenek database ekata danna
    async create(name, email, hashedPassword) {
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );
        return result.insertId;
    }
};

module.exports = User;