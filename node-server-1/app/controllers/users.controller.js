const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

function validate_user(user_info, res) {

    // Validate request
    if (!user_info.firstname) {
        res.status(400).send({
            message: "Must Supply a First Name"
        });
        return;
    }
    if (!user_info.lastname) {
        res.status(400).send({
            message: "Must Supply a Last Name"
        });
        return;
    }
    if (!user_info.email) {
        res.status(400).send({
            message: "Must Supply an email"
        });
        return;
    }

};

// Create and Save a new User
exports.create = (req, res) => {
    console.log('body: ');
    console.log(req.body);

    const new_users = req.body['users'];
    console.log('new_users')
    console.log(new_users)

    // validate users here!!
    new_users.forEach(new_user => {
        validate_user(new_user, res);
    });

    // Save User in the database
    Users.bulkCreate(new_users)
    .then(data => {
        console.log('Promise fulfilled...');
        console.log(data);
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Users."
        });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const lastname = req.query.lastname;
    var condition = lastname ? { lastname: { [Op.iLike]: `%${lastname}%` } } : null;

    console.log(`lastname ${lastname}`)
    console.log(`confdition ${condition}`)
    console.log(`query ${req.query}`)

    Users.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving tutorials."
            });
        });
    
};

// Find a single Users with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Users.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Users by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Users.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};

// Delete a Users with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Users.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    Users.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
      });
};
