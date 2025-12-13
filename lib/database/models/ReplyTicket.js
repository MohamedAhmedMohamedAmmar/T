import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";
import Ticket from "./ticket";
import User from "./User";

class ReplyTicket extends Model {}

ReplyTicket.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  reply_message: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  ticket_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ticket,
      key: 'ticket_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
    model: User,
    key: 'user_id'
  }
  },
  attachments: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'JSON stringified array of file URLs'
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'ReplyTicket',
  tableName: 'reply_tickets',
  timestamps: false
});
ReplyTicket.belongsTo(Ticket, { foreignKey: 'ticket_id', targetKey: 'ticket_id' });
ReplyTicket.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' });
export default ReplyTicket;
