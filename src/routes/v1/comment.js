import express from 'express';

const router=express.Router();


router.get('/', (req, res) => {
    
    res.json({
        message: 'Welcome to the Comment API V1'
    });
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    const commentId = req.params.id;
    // Here you would typically fetch the comment from a database
    res.json({
        message: `Fetching Comment with ID V1: ${commentId}`
    });
});




export default router;