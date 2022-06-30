import '../styles/globals.css'
import { LoaderProvider, useLoading,ThreeDots } from '@agney/react-loading';
import '../styles/BuildersForm/buildersSettingsForm.css'
import '../styles/Modals/infoModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoaderScreen from '../components/loader'

function MyApp({ Component, pageProps }) {
  return (
    <LoaderProvider indicator={<LoaderScreen />}>
      <Component {...pageProps} />
    </LoaderProvider>
  )
}

export default MyApp
