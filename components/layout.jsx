import Header from './header'
import Stepper from './stepper/formStepper'
import { Card } from 'react-bootstrap';

const Layout = props => (
    <div className="container">
            <div className="container py-5">
                {props.children}
                <Header />
                <Stepper />
            </div>
    </div>


);

export default Layout