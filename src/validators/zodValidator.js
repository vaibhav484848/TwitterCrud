export const validate=(schema)=>{
    return async (req, res, next) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData; // Replace req.body with validated data
            next();
        } catch (error) {
            res.status(400).json({
                error: error.errors || 'Validation failed',
                message: 'Invalid request data'
            });
        }
    }
}