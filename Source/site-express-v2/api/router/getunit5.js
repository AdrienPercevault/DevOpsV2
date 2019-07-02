const express= require('express');
const router = express.Router();

// ------------------------------------------------
// ---                  /unit5                  ---
// ------------------------------------------------
router.get('/', (req , res) => {
	var query = "SELECT * FROM unit5";

	db.query(query, function select(error, results) {
		if (error) {
			console.log(error);
			db.end();
			return;
		}
		if (results.length > 0) {
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			console.log(results);
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			res.send(results);
		} else {
			console.log("Pas de données pour l'unité de production 5");
		}
	});
});

// ------------------------------------------------
// ---                /unit5/:id                ---
// ------------------------------------------------
router.get('/:idAutomate', (req , res) => {
	var idAutomate = req.params.idAutomate;
	var query = "SELECT * FROM unit5 WHERE idAutomate = ?";

	db.query(query, [idAutomate], function select(error, results) {
		if (error) {
			console.log(error);
			db.end();
			return;
		}
		if (results.length > 0)  {
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			console.log(results);
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			res.send(results);
		} else {
			console.log("Pas de données pour l'automate " + idAutomate);
		}
	});
});

// Export router
module.exports = router;
