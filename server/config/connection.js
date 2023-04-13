const mongoose = require('mongoose');

// added useNewUrlParser and useUnifiedTopology due to Deprecation Warnings
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
