module.exports =  [{
    "type": "postgres",
    "host": "localhost",
    "name": "main",
    "port": 26257 ,
    "username": "nawaf" || "postgres",
    //"password": process.env.DB_PASS || "nawaf",
    "database": "conf",
    "synchronize": true,
    "logging": true,
    "uuidExtension": "pgcrypto",
    "entities": [
       "entity/*.ts"
    ],
    "migrations": [
       "migrations/*.ts"
    ],
    "subscribers": [
       "/subscriber/*.ts"
    ],
    "cli": {
       "entitiesDir": "entity/",
       "migrationsDir": "migrations/",
       "subscribersDir": "subscriber/"
    }
 }
]