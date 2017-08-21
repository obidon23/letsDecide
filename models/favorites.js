module.exports = function(sequelize, DataTypes) {
	var Favorites = sequelize.define("Favorites", {
		// deal tittle string
		
		
	});
	 Favorites.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Favorites.belongsTo(models.Business, {
	 		foreignKey: {
     	  	allowNull: false
     		}
	 	});
	 };

	 return Favorites;
};