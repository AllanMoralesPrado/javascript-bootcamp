module.exports = (sequelize, DataTypes) => {
    const Bootcamp = sequelize.define(`bootcamps`, {
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        cue: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
                min: 5,
                max: 10
            },
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    return Bootcamp;
}