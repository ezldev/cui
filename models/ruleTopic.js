module.exports = function(sequelize, DataTypes) {
    var ruleTopic = sequelize.define('ruleTopic', {
        id: {
            type: DataTypes.UUID,
            // primaryKey: true,
            // allowNull: false,
            // autoIncrement: true,
            // unique: true
          },
         ruleId: {
            type: DataTypes.UUID,
            //references: 'rule',
            //referencesKey: 'id',
            allowNull: false
          },
          topicId: {
            type: DataTypes.UUID,
            //references: 'topic',
            //referencesKey: 'id',
            allowNull: false
          },
    }, {
        //timestamps: true,
        //paranoid: false,
        freezeTableName: true,
        tableName: 'CM_RULETOPIC',
    });
        ruleTopic.associate = function(models) {
            //User.belongsToMany(Project, { through: UserProject });
           // models.rule.belongsToMany(models.topic, { through: models.ruleTopic })
            // models.rule.belongsTo(models.topic, { foreignKey: "topic_id", targetKey: "id" });
        }
    
        return ruleTopic;
    }
    
       