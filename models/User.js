const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

//define table columns and configuration 
User.init(
    {
        //define an id column
        id: {
            //user special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            //equivalent of sql's 'not null' option
            allowNull: false,
            //instruct that this is primary key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },
        //define username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //cannot be duplicate email values in the table
            unique: true,
            //if allownull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        //table configuration options go here

        //pass in imported sequelize connection (direct connection to our database)
        sequelize,
        //don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        //don't pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel casing  
        underscored: true,
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);


module.exports = User;