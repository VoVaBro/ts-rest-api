import app from './app'
import './database'

function main () {
    app.listen(process.env.PORT || app.get('port'), () => console.log('server start'))
}

main()