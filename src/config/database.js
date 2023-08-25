// require('dotenv/config');
import dotenvConfig from 'dotenv/config'
/*
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define:{
    timestamp: true, //Adiciona o tempo da criação
    undescored:true, //Adiciona Underline
    undescoredAll: true, //Para fazer em todos os DBS
  }
}
*/
const config = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
};

export default config;