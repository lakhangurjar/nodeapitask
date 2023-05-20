const dotenv = require('dotenv');
dotenv.config();
if(process.env.DATABASE_ENV=='local'){
    var databaseHost= process.env.LOCAL_DATABASE_HOST;
    var databaseUser= process.env.LOCAL_DATABASE_USER;
    var databasePass= process.env.LOCAL_DATABASE_PASS;
    var databaseName= process.env.LOCAL_DATABASE_NAME;
}

module.exports = {
    //============Node Environment============
    nodeEnv: process.env.NODE_ENV,
    //============JWT Details ============
    JwtExpireTime: process.env.JWT_EXPIRE_TIME*30,
    JwtSecretKey: process.env.JWT_SECRET_KEY,
    //============Server port============
    port: process.env.PORT,
    //============Database Details============
    databaseMigration: process.env.DATABASE_MIGRATION,
    databaseHost: databaseHost,
    databaseUser: databaseUser,
    databasePass: databasePass,
    databaseName: databaseName,

    // #============Mail Details============
    baseUrl : process.env.BASE_URL
};