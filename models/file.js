module.exports = function(sequelize, DataTypes) {
    var file = sequelize.define('file', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        version: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        
    }, {
        timestamps: true,
        paranoid: false,
        freezeTableName: true,
        tableName: 'CM_FILES',
    });

    file.associate = function(models) {
        models.file.hasOne(models.analytics)
        //models.file.belongsTo(models.topic, { foreignKey: "topic_id", targetKey: "id" });
    }

    return file;
}
