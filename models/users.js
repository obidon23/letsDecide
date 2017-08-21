// module.exports = function(sequelize, DataTypes) {
// 	var Users = sequelize.define("Users", {
// 		// user email string
// 		email: {
// 			type:DataTypes.STRING,
// 			allowNull:false,
// 			validate: {
// 				isEmail: true
// 			}
// 		},
// 		// user name string
// 		userName: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len:[2-20]
// 			}
// 		},
// 		// password string
// 		password: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len:[6-10]
// 			}
// 		},
// 		// link to photo string
// 		photoLink: {
// 			type: DataTypes.STRING,
// 			allowNull: true,
// 		},
// 	});
// 	 Users.associate = function(models) {
// 	 	// Associating Business with deals
//    		 // When a user is deleted, also delete any associated favorites
// 	 	Users.favorites(models.Favorites, {
// 	 		onDelete: "cascade"
// 	 	});
// 	 	return Users;
// 	 };
// };


module.exports = function(sequelize, DataTypes) {
	var Users = sequelize.define("Users", {
		// Busines name string
		email: {
			type:DataTypes.STRING,
			allowNull:false,
			validate: {
				isEmail: true
			}
		},
		userName: {
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
		// link to photo string
		photoLink: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
	 Users.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Users.hasMany(models.Deals, {
	 		onDelete: "cascade"
	 	});
	 };

	 return Users;
};