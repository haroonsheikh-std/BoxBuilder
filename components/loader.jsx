import { Button,Spinner, useForm } from "react-bootstrap"
const LoaderScreen = () => {
    return (
        <>
           <Spinner animation="grow" size="sm" variant="primary" />{' '}
           <Spinner animation="grow" size="sm" variant="primary" />{' '}
           <Spinner animation="grow" size="sm" variant="primary" /> 
        </>
    )
}
export default LoaderScreen