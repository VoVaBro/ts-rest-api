import app from './app'


 import {db} from './database'



function main () {

    db()

    app.listen(process.env.PORT || app.get('port'), () => console.log('server start'))
}
 
main()