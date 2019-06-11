const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenve').config();
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const db = require('../data/dbConfig.js');

const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	name: process.env.SESSION_NAME,
	cookie: {
		secure: false, // over http(s) in production change to true
		maxAge: 1000 * 60 * 60
	},
	httpOnly: true,
	resave: false,
	saveUninitialized: false,
	store: new knexSessionStore({
		// create memcache
		tablename: 'sessions',
		sidfilename: 'sid',
		knex: db,
		createTable: true,
		clearInterval: 1000 * 60 * 60
	})
};

module.exports = (server) => {
	server.use(morgan('dev'));
	server.use(cors());
	server.use(helmet());
	server.use(session(sessionConfig));
};
