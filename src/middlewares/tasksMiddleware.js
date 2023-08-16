const validateBody = (req, res, next) => {
  const { body } = req;

  if(body.title === undefined){
    res.status(400).json({message: 'The field "title" is required'});
  }

  
  if(body.title === ''){
    res.status(400).json({message: 'The field "title" can not be empty'});
  }

  next();
};

export default {
  validateBody
};