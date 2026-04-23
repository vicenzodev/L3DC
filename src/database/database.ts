import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'l3dc.db';
let database: SQLite.SQLiteDatabase | null = null;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase>{
    if (database !== null){
        return database;
    }
    database = await SQLite.openDatabaseAsync(DATABASE_NAME);
    await runMigrations(database);
    return database;
}

async function runMigrations(db: SQLite.SQLiteDatabase): Promise<void> {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            model3dUrl TEXT NOT NULL,
            createdAt TEXT NOT NULL
        );
    `);
}