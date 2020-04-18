export const config = {
    jwt: {
        type: {
            accsess: {
                secret: 'vvvvvv',
                expiresIn: '6h'
            },
            refresh: {
                secret: 'wwwwww',
                expiresIn: '36h'
            }
        }
    },
    passportConfig: {
        clientID: '2665362443576129',
        clientSecret: '8ae4b6a16128544ce375fcf48490353c',
        callbackURL: "http://localhost:5000/api/auth/facebook/callback"
    },
    mongo_URI: 'mongodb://localhost/ts-rest',
    cookieSession: {
        secret: 'secret'
    }
}