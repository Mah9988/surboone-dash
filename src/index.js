// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/store'

// ** Intl, CASL & ThemeColors Context
import ability from './configs/acl/ability'
import { ToastContainer } from 'react-toastify'
import { AbilityContext } from './utility/context/Can'
import { ThemeContext } from './utility/context/ThemeColors'
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import { onError } from '@apollo/client/link/error'

// console.log('REACT_APP_BACKEND_BASE_GRAPHQL_URL: ', process.env.REACT_APP_BACKEND_BASE_GRAPHQL_URL)
// const cache = new InMemoryCache()

// ** i18n
import './configs/i18n'

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner'

// ** Ripple Button
import './@core/components/ripple-button'

// ** Fake Database
import './@fake-db'

// ** PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min'

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss'

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'

// ** Service Worker
import * as serviceWorker from './serviceWorker'

// const httpLink = createHttpLink({
//   uri: process.env.REACT_APP_BACKEND_BASE_GRAPHQL_URL
// })
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('accessToken')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token.replace(/"/g, "")}` : ''
//     }
//   }
// })
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => {
//     console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
//     if (message.includes('JWTExpired')) {
//       console.log('JWTExpired')
//       // ** Remove user, accessToken & refreshToken from localStorage
//       localStorage.removeItem('userData')
//       localStorage.removeItem('accessToken')
//       localStorage.removeItem('refreshToken')

//       location.href = '/login'
//     }
//   })

//   if (networkError) console.log(`[Network error]: ${networkError}`)
// })

// const client = new ApolloClient({
//   // Provide required constructor fields
//   cache,
//   link: from([errorLink, authLink.concat(httpLink)]),
//   name: 'react-web-client'
//   // version: '1.3',
//   // queryDeduplication: false,
//   // defaultOptions: {
//   //   watchQuery: {
//   //     fetchPolicy: 'cache-and-network',
//   //   },
//   // },
// })
// ** Lazy load app
const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  // <ApolloProvider client={client}>
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <AbilityContext.Provider value={ability}>
        <ThemeContext>
          <LazyApp />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </AbilityContext.Provider>
    </Suspense>
  </Provider>
  // </ApolloProvider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
