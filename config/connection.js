const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialntw_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection; 