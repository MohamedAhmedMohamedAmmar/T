// export default (sequelize, DataTypes) => {
//   const Ticket = sequelize.define('Ticket', {
//       ticket_id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   subject: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.STRING
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   },
//   updated_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   },
//   category_id: {
//     type: DataTypes.INTEGER,
//     // references: {
//     //   model: Category,
//     //   key: 'category_id'
//     // }
//   },
//   urgency_id: {
//     type: DataTypes.INTEGER,
//     // references: {
//     //   model: Urgency,
//     //   key: 'urgency_id'
//     // }
//   },
//   dept_id: {
//     type: DataTypes.INTEGER,
//     // references: {
//     //   model: Department,
//     //   key: 'dept_id'
//     // }
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     // references: {
//     //   model: Users,
//     //   key: 'id'
//     // }
//   }
//   }, {
//     sequelize,
//     modelName: 'Ticket',
//     tableName: 'ticket',
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   });

import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";
import Urgency from "./Urgency";
import Department from "./Department";
import User from "./User";
import Category from "./Category";

  
//   return Ticket;
// }
class Ticket extends Model {
}

Ticket.init({
  ticket_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'category_id'
    }
  },
  urgency_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Urgency,
      key: 'urgency_id'
    }
  },
  dept_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Department,
      key: 'dept_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Ticket',
  tableName: 'ticket',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Define associations
Ticket.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' });
Ticket.belongsTo(Department, { foreignKey: 'dept_id', targetKey: 'dept_id' });
Ticket.belongsTo(Urgency, { foreignKey: 'urgency_id', targetKey: 'urgency_id' });
Ticket.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'category_id' });

export default Ticket ;