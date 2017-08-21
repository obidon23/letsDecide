module.exports = function(sequelize, DataTypes) {
	var Business = sequelize.define("Business", {
		// Busines name string
		email: {
			type:DataTypes.STRING,
			allowNull:false,
			validate: {
				isEmail: true
			}
		},
		businessName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		// password string
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[6-10]
			}
		},
		// general description string
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// link to photo string
		photoLink: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
	 Business.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Business.hasMany(models.Deals, {
	 		onDelete: "cascade"
	 	});
	 };

	 return Business;
};