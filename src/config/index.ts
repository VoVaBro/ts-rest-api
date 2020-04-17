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

    },
    mongo_URI: 'mongodb://localhost/ts-rest'
}