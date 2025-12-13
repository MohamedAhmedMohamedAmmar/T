import sequelize from './connection.js';

async function syncDatabase() {
  try {
    console.log('Authenticating database connection...');
    await sequelize.authenticate();
    console.log('Database connection established.');
    
    console.log('Syncing database models with alter: true...');
    await sequelize.sync({ alter: true });
    console.log('✓ Database synced successfully!');
    console.log('✓ Missing columns (attachments, updated_at) have been added to reply_tickets');
    
    process.exit(0);
  } catch (error) {
    console.error('✗ Error syncing database:', error);
    process.exit(1);
  }
}

syncDatabase();
