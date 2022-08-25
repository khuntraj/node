const express=require('express');

const router =express.Router();

router.get('/',(req,res,next) => {
        res.status(200).json({
            message:' order work'
        });
    });
router.post('/',(req,res,next) => {
        res.status(201).json({
            message:' POST order -work'
        });
    });
    
router.get('/:orderId',(req,res,next) => {
    const id=req.params.orderId;
    if(id >'10')
    {
        res.status(200).json({
            message:' right id work',
            id: id
        });

    }
    else{
        res.status(200).json({
            message:' right id not work'
        });
    }
    // res.status(200).json({
    //     message:' GET -work'
    // });
});

router.patch('/:orderId',(req,res,next) => {
    res.status(200).json({
        message:' update order work'
    });
})
router.delete('/:orderId',(req,res,next) => {
    res.status(200).json({
        message:' delete order work'
    });
})

module.exports = router;
