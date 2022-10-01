const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialntw_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection; 