module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'drivingfast',
    define: {
        timestamps: true,
        underscored: true,
        underscordedAll: true,
    }

}