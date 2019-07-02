const express= require('express');
const router = express.Router();

// ------------------------------------------------
// ---                  /unit1                  ---
// ------------------------------------------------
router.get('/', (req , res) => {
	// var resultArray = [];
	var query = "SELECT * FROM unit1";

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
			// resultArray.push(results)
			// res.render('unit1.html', { items: resultArray[0] });
		} else {
			console.log("Pas de données pour l'unité de production 1");
		}
	});
});

// ------------------------------------------------
// ---                /unit1/:id                ---
// ------------------------------------------------
router.get('/:idAutomate', (req , res) => {
	var idAutomate = req.params.idAutomate;
	var query = "SELECT * FROM unit1 WHERE idAutomate = ?";

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
			console.log("Pas de données pour l'automate " + id);
		}
	});
});

// Export router
module.exports = router;
