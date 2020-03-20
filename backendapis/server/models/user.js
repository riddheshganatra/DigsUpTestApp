'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: true,
    },
    },
    flag:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {});
  User.associate = (models)=> {
    // associations can be defined here
  };
  return User;
};