module.exports = (sequelize, DataTypes)=>{
    
    const permission = sequelize.define('permission', {
        
        permission_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
              
    });
 
    return permission;
}