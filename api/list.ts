import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
import Packing from '../models/packing';

let router = express.Router();
/* This route needs to be autherized */
router.post('/', (req, res) => {
  
  let list:any = new Packing();
  list.destination = req.body.list.destination;
  list.season = req.body.list.season;
  list.item1 = req.body.list.item1;
  list.item2 = req.body.list.item2;
  list.item3 = req.body.list.item3;
  list.postedBy = req.body.list.userId
  list.save(function(err, newList){
    if(err){
    res.send(err);
    }
    res.json({message: "Registration complete. Please login."})
  })

});

router.get('/:id', (req, res) => {
  //todo: get the user id
  database.db.collection('list').find({userId: req.params.id}).toArray().then((list)=>{
    console.log(list);
    res.json(list);
  })
});

router.delete('/:id', (req, res) => {
  let listId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('list').remove({_id: listId}).then(() => {
    res.end();
  })
})

export default router;
