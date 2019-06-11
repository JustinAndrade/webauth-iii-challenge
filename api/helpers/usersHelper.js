const db = require('../../data/dbConfig.js');

const getUsers = () => {
	return db('users');
};

const getUsersById = (id) => {
	return db('users').where({ id }).first();
};

module.exports = {
	getUsers,
	getUsersById
};
