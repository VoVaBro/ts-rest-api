import app from './app'
import './database'

function main () {
    app.listen(app.get('port'), () => console.log('server start'))
}

main()