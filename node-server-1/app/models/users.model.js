module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      /* id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }, */
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }

    });
  
    return Users;
  };
  