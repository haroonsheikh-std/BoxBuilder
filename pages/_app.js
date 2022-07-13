import '../styles/globals.css'
import { LoaderProvider, useLoading,ThreeDots } from '@agney/react-loading';
import '../styles/BuildersForm/buildersSettingsForm.css'
import '../styles/Modals/infoModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoaderScreen from '../components/loader'
import { Provider } from 'react-redux';
import store from '../redux/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <LoaderProvider indicator={<LoaderScreen />}>
      <Component {...pageProps} />
    </LoaderProvider>
    </Provider>
  )
}

export default MyApp
