'use strict';

module.exports = function(app){
    const cors = require('cors');
    const corsOptions = {
        origin: '*',
        methods: [
        'GET',
        'POST',
        'PATCH',
        'DELETE'
        ],
    }

    const imageOptions = {
        orgin : function (origin,callback){
            callback(null, true)
        },
        methods:"GET"
    }

    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));
    app.use('/Images',cors(imageOptions))
}