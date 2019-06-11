exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del().then(function() {
		// Inserts seed entries
		return knex('users').insert([
			{ username: 'Justin', password: 'password', department: 'Developer' },
			{ username: 'Caroline', password: 'password2', department: 'UI/UX' },
			{ username: 'Mason', password: 'password3', department: 'Developer' }
		]);
	});
};
