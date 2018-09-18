module.exports = function(sequelize, DataTypes) {
    
 
  

    var topic = sequelize.define('topic', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
          },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.STRING ,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        active: {
            type: DataTypes.BOOLEAN  ,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
        timestamps: true,
        paranoid: false,
        freezeTableName: true,
        tableName: 'CM_TOPICS',
    });
   
    topic.associate = function(models) {
        models.topic.hasMany(models.file,{
            as :"files"
        });
        models.topic.hasMany(models.rule,{
            as :"rules"
        })
        models.topic.hasOne(models.topic,{
            as: 'parent',
            foreignKey: "parent_id"
        })
    }
    
    return topic;
}
