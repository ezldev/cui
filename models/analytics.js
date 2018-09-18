module.exports = function(sequelize, DataTypes) {
    var analytics = sequelize.define('analytics', {

        details: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        paranoid: false,
        freezeTableName: true,
        tableName: 'CM_ANALYTICS',
    });
    
    analytics.associate = function(models) {
      models.analytics.belongsTo(models.file,{
          as :"analytics"
      })
        // Team.hasOne(Game
        //models.quote.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }

    return analytics;
}
