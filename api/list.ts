import * as express from 'express';
import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';
import database from '../db';
import Packing from '../models/packing';

let router = express.Router();

//POST
router.post('/', (req, res) => {
	if(req.body.id) {
		Packing.findById(req.body.id, function (err, packings) {
			if (err){			
				res.sendStatus(500)
			} else {
				packings.destination = req.body.destination;
				packings.season = req.body.season;
				packings.item1 = req.body.item1;
				packings.item2 = req.body.item2;
				packings.item3 = req.body.item3;
		
				packings.save(function (err, updatedPackings) {
					if (err) {
						res.sendStatus(500)
					} else {
						res.sendStatus(200)
					}
				})
		  }
	  });
	} else {
	let list:any = new Packing();
  list.destination = req.body.destination;
  list.season = req.body.season;
  list.item1 = req.body.item1;
  list.item2 = req.body.item2;
  list.item3 = req.body.item3;
  list.postedBy = req.body.userId
  list.save(function (err, newList){
    if(err){
    res.send(err);
    }
    res.json({message: "Registration complete. Please login."})
  })

	}
});


//GET
router.get('/:id', (req, res) => {
  Packing.find({postedBy: req.params.id}).then((lists) => {
    console.log("lists",lists)
    res.json(lists)
  })
});

//DELETE
router.delete('/:id', (req, res) => {

	// mongoose //
	Packing.deleteOne({_id: req.params.id}, (err) => {
		if(err) {
			res.sendStatus(500)
		} else {
			res.sendStatus(200)
		}
	})

});

// });
export default router;

