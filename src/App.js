// ** Router Import
import { useEffect } from 'react'
import { logoutAllTabs } from './redux/authentication'
import Router from './router/Router'

const App = () => {
    useEffect(() => {
        logoutAllTabs()
    }, [])


    return <Router />
}

export default App
