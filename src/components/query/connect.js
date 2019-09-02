import mongoose from 'mongoose';

/**
 * Connect to mongodb database
 * @param {*} db_name mongodb database name
 */
export default function (db_name)
{
    const db_option = {
        useNewUrlParser: true,
        socketTimeoutMS: 0,
        connectTimeoutMS: 0
    };

    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://localhost/' + db_name, db_option);

    var db_connection = mongoose.connection;
    db_connection.on('error', console.error.bind(console, 'mongodb connection error'));
    db_connection.once('open', function () {
        console.log('Connecting to ' + db_name + ' database');
    });

    return;
}