import { Sequelize } from "sequelize";

import config from '../config/database'

// import Model from '../models/'

const models = []

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => model.init(this.connection)) //Vai inicializar(init) cada model (tabela)
  }

  associate () {
    models.forEach((model) => {
      if(model.associate){ //Verifica se o model (tabela) esta associada a alguma outra
        model.associate(this.connection.models)
      }
    })
  }

}

export default new Database();