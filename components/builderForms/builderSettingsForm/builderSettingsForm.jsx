import { Button, useForm, Col, Form, Spinner } from "react-bootstrap"
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
import { LoaderProvider, useLoading } from '@agney/react-loading';
import PermitPopup from "../../modals/permitPopup/PermitPopup"

const BuilderSettingsForm = ({ moveToNext, stepNo, moveToPrevious }) => {

    const [load, setLoad] = useState(false)
    const { containerProps, indicatorEl } = useLoading({
        loading: load,
    });

    let [formData, setFormData] = useState(builderSettingsData);

    const submitForm = async () => {
        setLoad(true)
        const response = await api.BuilderSettings.createBuilderSettings(formData).then((d) => {
            console.log(d)
            moveToNext(stepNo)
            setLoad(false)
        }).catch((err) => setLoad(false))
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

    const radioButtonData = (data) => {
        let parent_obj_name = data.target.dataset.parent;
        let input_name = data.target.name;
        let input_value = data.target.checked;
        let keyName = data.target.value;
        console.log(keyName);
        let res = (keyName == "full_width_with_fixed_bottom" ?
            { full_width_with_fixed_bottom: true, fixed_right_side_with_scroll: false }
            :
            { full_width_with_fixed_bottom: false, fixed_right_side_with_scroll: true })

        console.log(res);

        setFormData((prev) => {
            if (parent_obj_name) {
                return {
                    ...prev,
                    [parent_obj_name]: {
                        ...prev[parent_obj_name],
                        ...res
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

    console.log(formData)


    return (
        <>
            <div {...containerProps} className="wrapper">
                <div>
                    <h5 className="d-inline-block">Builder's Settings </h5> &nbsp;&nbsp;<span className="text-secondary text-xs cus-button" >Custom & Small</span>
                </div>
                <BuilderSettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <OrderProduct checkBoxData={checkBoxData} FormsData={FormsData} />
                <hr />
                <DisplaySettings checkBoxData={checkBoxData} FormsData={FormsData} />
                <div>
                    
                </div>
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
                <ThemeBuilders radioButtonData={radioButtonData} />
                <hr />
                <div className="footer_details">
                    {
                        formData?.theme?.full_width_with_fixed_bottom ?
                            <div>
                                <Col >
                                    <Form.Group className="mb-3" controlId="show_selected_image_in_footer">
                                        <Form.Check className="text-sm" name='show_selected_image_in_footer' onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Show images of selected items in the footer?" />
                                        <p className="text-secondary text-sm">This only applies to the 'full' layout.</p>
                                    </Form.Group>
                                </Col>
                            </div> : null}
                </div>
                <div className="float-right mt-5">
                    <PermitPopup />
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => {
                        submitForm()
                    }} >{indicatorEl ?
                        <>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </>
                        : "Next"}</Button>
                </div>
            </div>
            {/* {indicatorEl ?
                <>
                    <div className="loader_center">
                        {indicatorEl}
                    </div>
                </>
                : null
            } */}
        </>
    )
}

export default BuilderSettingsForm
