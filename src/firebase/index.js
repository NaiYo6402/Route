import firebse from 'firebase/compat/app'
import 'firebase/compat/auth';
import config from './config'

if (!firebse.apps.length) {
    firebse.initializeApp(config)
}

export default firebse.auth();