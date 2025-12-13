import sequelize from './connection.js';

async function fixDatabase() {
  try {
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('✓ Connected');

    // Check if columns exist
    console.log('\nChecking reply_tickets table structure...');
    const queryResult = await sequelize.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'reply_tickets'
      ORDER BY ordinal_position
    `);
    
    const columns = queryResult[0];
    console.log('Current columns:');
    columns.forEach(col => {
      console.log(`  - ${col.column_name} (${col.data_type}, nullable: ${col.is_nullable})`);
    });

    const hasAttachments = columns.some(col => col.column_name === 'attachments');
    const hasUpdatedAt = columns.some(col => col.column_name === 'updated_at');

    // Add attachments column if missing
    if (!hasAttachments) {
      console.log('\nAdding attachments column...');
      await sequelize.query(`
        ALTER TABLE reply_tickets 
        ADD COLUMN attachments TEXT NULL;
      `);
      console.log('✓ Added attachments column');
    } else {
      console.log('✓ attachments column already exists');
    }

    // Add updated_at column if missing
    if (!hasUpdatedAt) {
      console.log('\nAdding updated_at column...');
      await sequelize.query(`
        ALTER TABLE reply_tickets 
        ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
      `);
      console.log('✓ Added updated_at column');
    } else {
      console.log('✓ updated_at column already exists');
    }

    console.log('\n✓ Database schema updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
}

fixDatabase();
