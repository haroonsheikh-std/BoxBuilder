import { Button } from "react-bootstrap"
import BuilderSettings from './buildersSetting/builderSetting'
import OrderProduct from './orderProductSetting/orderProductSetting'
import DisplaySettings from './displaySettings/displaySettings'

const BuilderSettingsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Builder's Settings </h5> &nbsp;&nbsp;<span className="text-secondary text-xs cus-button" >Custom & Small</span>
                </div>
                <BuilderSettings/>
                <hr />
                <OrderProduct/>
                <hr />
                <DisplaySettings/>
                <hr />

                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Next</Button>
                    </div>
            </div>
        </>
    )
}

export default BuilderSettingsForm


// let obj = [title: "Customer Info", fields:[
//     {
//         type: "checkbox",
//         title: "Enable Image Lightbox",
//         desc: " Enable Image LightboxEnable Image Lightbox Enable Image Lightbox",
//         class: "",
//         id: "",
//         name: ""
//     },
//     {
//         type: "text",
//         title: "Enable Image Lightbox",
//         desc: " Enable Image LightboxEnable Image Lightbox Enable Image Lightbox",
//         class: "",
//         id: "",
//         name: ""
//     }
// ] ]