'use strict';
module.exports = (sequelize, DataTypes) => {
  const Horse = sequelize.define('horse', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Horse.associate = function(models) {
    // associations can be defined here
  };

  return Horse;
};