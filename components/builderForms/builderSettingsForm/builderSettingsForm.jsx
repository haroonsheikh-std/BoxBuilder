import { Button } from "react-bootstrap"
import BuilderSettings from './buildersSetting/builderSetting'

const BuilderSettingsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    return (
        <>
            <div className="wrapper">
                <div>
                    <p className="d-inline-block">Builder's Settings </p> &nbsp;&nbsp;<span className="text-secondary text-xs cus-button" >Custom & Small</span>
                </div>
                <BuilderSettings/>

                <div>
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Next</Button>
                    <button></button>
                </div>
            </div>
        </>
    )
}

export default BuilderSettingsForm