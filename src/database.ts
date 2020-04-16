import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/ts-rest', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('DB connected'))
.catch(err => console.log('DB error: ' + err))