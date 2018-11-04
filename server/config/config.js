var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    })
}

// switch(end) {
//     case 'development':
//         process.env.PORT = 3000;
//         process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
//         break;
//     case 'test':
//         process.env.PORT = 3000;
//         process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//         break;
// }


