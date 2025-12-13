import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class TicketAttachment extends Model {}

TicketAttachment.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  ticket_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'TicketAttachment',
  tableName: 'ticket_attach',
  timestamps: false
});

export default TicketAttachment;
