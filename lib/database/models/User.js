import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class User extends Model {}

User.init({
  user_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  first_name: {
    type: DataTypes.STRING(50)
  },
  last_name: {
    type: DataTypes.STRING(50)
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'Active'
  },
  is_temp_pass: {
    type: DataTypes.CHAR(1),
    defaultValue: 'N'
  },
  role_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false
});

export default User;
