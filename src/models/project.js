import Sequelize, { Model } from 'sequelize';

// Definição da classe User que estende a classe Model do Sequelize
class Project extends Model {

  // Método estático para inicializar o modelo User
  static init(sequelize) {
    super.init({ //super Chama a classe que estou extendendo
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      status: Sequelize.ENUM('active', 'archived'),
      user_id: Sequelize.INTEGER,

    }, {
      sequelize, // Conexão com o banco de dados
      name: {
        singular: 'project', // Nome singular da tabela no banco
        plural: 'projects' // Nome plural da tabela no banco
      }
    })
  }

  // Método estático para definir associações com outros modelos
  static associate(models) {
    //Assiciações
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
    })
  }
}

export default Project;