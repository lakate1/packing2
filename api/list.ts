import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();

router.post('/', (req, res) => {
  let list = req.body;
  list._id = new mongodb.ObjectID(req.body.id);
  database.db.collection('list').save(req.body).then((newList) => {
    res.end();
  })
})
router.get('/', (req, res) => {
  //todo: get the user id
  database.db.collection('list').find().toArray().then((list)=>{
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
