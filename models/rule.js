module.exports = function(sequelize, DataTypes) {
    var rule = sequelize.define('rule', {
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
        configuration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: true,
        paranoid: false,
        freezeTableName: true,
        tableName: 'CM_RULES',
    });

    rule.associate = function(models) {
        models.rule.belongsTo(models.topic)
        // models.rule.belongsTo(models.topic, { foreignKey: "topic_id", targetKey: "id" });
    }

    return rule;
}
