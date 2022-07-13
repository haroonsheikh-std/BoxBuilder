import '../styles/globals.css'
import { LoaderProvider, useLoading, ThreeDots } from '@agney/react-loading';
import '../styles/BuildersForm/buildersSettingsForm.css'
import '../styles/Modals/infoModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import LoaderScreen from '../components/loader'
import store from '../redux/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <LoaderProvider indicator={<LoaderScreen />}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </LoaderProvider>
  )
}

export default MyApp
