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
        }
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'CM_TOPICS',
    });
   
    topic.associate = function(models) {
        models.topic.hasMany(models.file);
        models.topic.hasMany(models.rule)
    }
    

    return topic;
}
