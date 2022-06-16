import { Button, useForm } from "react-bootstrap"
import BuilderSettings from './buildersSetting/builderSetting'
import OrderProduct from './orderProductSetting/orderProductSetting'
import DisplaySettings from './displaySettings/displaySettings'
import StyleSettings from './styleSettings/styleSettings'
import SeoSettings from './seoSettings/seoSettings'
import ShipmentSettings from './shipmentSettings/shipmentSettings'
import CustomizeUrlSetting from './customizeUrlSettings/customizeUrlSettings'
import EditTranslation from './editTranslation/editTranslation'
import ThemeBuilders from "./themeBuilder/themeBuilder"
import { useEffect, useState } from "react"
import api from '../../../api/index'
import builderSettingsData from '../../../constants/defaultData.js'

const BuilderSettingsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    let [formData, setFormData] = useState(builderSettingsData);

    const submitForm = async () => {
        const response = await api.createBuilderSettings().then((d) => {
            console.log(d)
            moveToNext(stepNo)
        });
    }

    const FormsData = (data) => {
        let parent_obj_name = data.target.dataset.parent;
        let input_name = data.target.name;
        let input_value = data.target.value;
        setFormData((prev) => {
            if (parent_obj_name) {
                return {
                    ...prev,
                    [parent_obj_name]: {
                        ...prev[parent_obj_name],
                        [input_name]: input_value
                    }
                }
            } else {
                return {
                    ...prev,
                    [input_name]: input_value
                }
            }
        })
    }

    const checkBoxData = (data) => {
        let parent_obj_name = data.target.dataset.parent;
        let input_name = data.target.name;
        let input_value = data.target.checked;
        setFormData((prev) => {
            if (parent_obj_name) {
                return {
                    ...prev,
                    [parent_obj_name]: {
                        ...prev[parent_obj_name],
                        [input_name]: input_value
                    }
                }
            } else {
                return {
                    ...prev,
                    [input_name]: input_value
                }
            }
        })
    }

    const colorsData = (name, color, parent_name) => {
        console.log('name, color, parent_name =>', name, color, parent_name)
        setFormData((prev) => {
            if (parent_name) {
                return {
                    ...prev,
                    [parent_name]: {
                        ...prev[parent_name],
                        [name]: color
                    }

                }
            }
        })
    }

    console.log(formData)


    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Builder's Settings </h5> &nbsp;&nbsp;<span className="text-secondary text-xs cus-button" >Custom & Small</span>
                </div>
                <BuilderSettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <OrderProduct checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <DisplaySettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <StyleSettings colorsData={colorsData} checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <SeoSettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <ShipmentSettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <CustomizeUrlSetting checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <EditTranslation checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <ThemeBuilders checkBoxData={checkBoxData} FormsData={FormsData} />

                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Exit/Update</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => {
                        submitForm()
                    }} >Next</Button>
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