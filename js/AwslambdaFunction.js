let options = {
    host: 'openexchangerates.org',
    path: '/api/currencies.json?app_id=41ee871aa5954e9bbb414f38703cd0d2',
    headers: {},
};

exports.handler = (event, context, callback) => {
    
    var https = require('https');
    
    const req = https.request(options, (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            body = JSON.parse(body);
            
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(body),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                isBase64Encoded: false
                },
            });
        });
    });
    req.on('error', callback);
    req.end();
};