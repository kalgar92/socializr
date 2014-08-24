// app/routes.js

	module.exports = function(app) {


		// route to handle creating (app.post)
		// route to handle delete (app.delete)

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html'); // load our public/index.html file
		});

		// app.get('/pinterest', function(req, res){
		// 	res.sendfile('./public/views/partials/pinterest.html')
		// });

	};
