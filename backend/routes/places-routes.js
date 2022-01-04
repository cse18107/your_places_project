const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location:{
            lat:40.7484474,
            lng:-73.987151
        },
        address:'20 W 24th building New York, NY 10001',
        creator:'u1'
    }
];

router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid; 
    const place = DUMMY_PLACES.find(p=>{
        return p.id===placeId;
    });
    res.json({place:place});
});

module.exports = router;