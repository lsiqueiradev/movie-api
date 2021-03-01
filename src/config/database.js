module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'database-api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
