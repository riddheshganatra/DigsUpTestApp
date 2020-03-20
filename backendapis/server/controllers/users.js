const User = require('../models').User;

module.exports = {
  async create(req, res) {
    try {
      
      
      let user= await User
      .create({
        email: req.body.email,
        flag: 'unsent',
      })

      return res.status(201).send(user)
    } catch (error) {
      return res.status(400).send({
        error:{
          message:error.message,
          status:400
        }
      })
    }
   
  },
};

