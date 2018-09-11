module.exports = function(sequelize, DataTypes) {
    var analytics = sequelize.define('analytics', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        details: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'CM_ANALYTICS',
    });
    
    analytics.associate = function(models) {
      models.analytics.belongsTo(models.file)
        // Team.hasOne(Game
        //models.quote.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }

    return analytics;
}
