const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const ToDo = db.define("todo",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
       
        autoIncrement:true,
       
    },
    title:{
        type:DataTypes.STRING(50),
        allowNull:false

    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }



}

)

module.exports = ToDo