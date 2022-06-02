import '../styles/globals.css'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store/posts';
import NextNProgress from "nextjs-progressbar";
function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <NextNProgress/>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
