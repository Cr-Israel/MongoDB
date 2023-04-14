const { MongoClient, MongoRuntimeError } = require('mongodb');

const uri = "mongodb://0.0.0.0:27017/testemongodb";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Conectando ao MongoDB!');
    } catch (error) {
        console.log('Deu error aqui na conexão com o Mongo: ' + error);
    };
};

run();

module.exports = client;