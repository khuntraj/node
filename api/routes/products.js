const express=require('express');
const router =express.Router();

router.get('/',(req,res,next) => {
        res.status(200).json({
            message:' GET -work'
        });
    });
router.post('/',(req,res,next) => {
        res.status(201).json({
            message:' POST -work'
        });
    });
    module.exports = router;

router.get('/:productId',(req,res,next) => {
    const id=req.params.productId;
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

router.patch('/:productId',(req,res,next) => {
    res.status(200).json({
        message:' update work'
    });
})
router.delete('/:productId',(req,res,next) => {
    res.status(200).json({
        message:' delete work'
    });
})