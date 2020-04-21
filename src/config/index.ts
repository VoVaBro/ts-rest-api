export const config = {
    jwt: {
        type: {
            accsess: {
                secret: 'trainingathletixtrainingathletix',
                expiresIn: '6h'
            },
            refresh: {
                secret: 'trainingathletix',
                expiresIn: '36h'
            }
        }
    },
    passportConfig: {
        clientID: '2665362443576129',
        clientSecret: '8ae4b6a16128544ce375fcf48490353c', 
    },
    mongo_URI: "mongodb+srv://trainingathletix:trainingathletix200420@cluster0-uc8fe.mongodb.net/TrainingAthletix?retryWrites=true&w=majority",
    mongo_user: "trainingathletix",
    mongo_pass: "trainingathletix200420",
    cookieSession: { 
        secret: 'secret'
    },
    name:  {
        name: "vova"
    }
}