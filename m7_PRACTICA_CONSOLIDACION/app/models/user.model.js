module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(`users`, {
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            validate: {
                isEmail: true
            },
            allowNull: false,
            unique: true
        }
    });

    return User;
}