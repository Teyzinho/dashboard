import Sequelize, { Model } from 'sequelize';

// Definição da classe User que estende a classe Model do Sequelize
class User extends Model {

  // Método estático para inicializar o modelo User
  static init(sequelize) {
    super.init({ //super Chama a classe que estou extendendo

      initials: { // Campo virtual "initials" que não será armazenado no banco de dados
        type: Sequelize.VIRTUAL,
        get() {
          const match = this.name.split(" ") //Separa o nome por espaços

          if (match.length > 1) {
            // Se o nome tiver mais de uma palavra, retorne as primeiras e últimas letras.
            return `${match[0][0]}${match[match.length - 1][0]}`
          }

          // Caso contrário, retorne apenas a primeira letra.
          return match[0][0]
        }
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL, //Campo Virtual existe apenas na memória da classe user
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('admin', 'manager', 'developer'),
      status: Sequelize.ENUM('active', 'archived'),
    }, {
      sequelize, // Conexão com o banco de dados
      name: {
        singular: 'user', // Nome singular da tabela no banco
        plural: 'users' // Nome plural da tabela no banco
      }
    })
  }

  // Método estático para definir associações com outros modelos
  static associate(models) {
    //Assiciações
  }
}

export default User;