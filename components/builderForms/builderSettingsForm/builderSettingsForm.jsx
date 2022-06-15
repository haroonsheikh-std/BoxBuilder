import { Button, useForm } from "react-bootstrap"
import BuilderSettings from './buildersSetting/builderSetting'
import OrderProduct from './orderProductSetting/orderProductSetting'
import DisplaySettings from './displaySettings/displaySettings'
import StyleSettings from './styleSettings/styleSettings'
import SeoSettings from './seoSettings/seoSettings'
import ShipmentSettings from './shipmentSettings/shipmentSettings'
import CustomizeUrlSetting from './customizeUrlSettings/customizeUrlSettings'
import EditTranslation from './editTranslation/editTranslation'
import { useEffect, useState } from "react"
import api from '../../../api/index'
import axios from "axios"

const BuilderSettingsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    let [formData, setFormData] = useState({
        display_settings: {
            enable_image_lightbox: false,
            show_price_button: false,
            show_formated_description: false,
            hide_soldout_products: false,
            show_message_when_adding_to_cart: false,
            add_button_text: "",
            remember_selections: false,
            show_image_carousels: false,
            show_step_progress: false
        },
        style_settings: {
            primary_button_color: "",
            secondary_button_color: "",
            product_select_color: "",
            product_border_color: "",
            lightbox_background_color: "",
            lightbox_text_color: "",
            progress_bar_text_color: "",
            progress_bar_color: "",
            total_box_background_color: "",
            total_text_color: "",
            total_price_text_color: "",
            order_detail_product_text_color: "",
            adding_to_cart_popup_background_color: "",
            adding_to_cart_popup_title_color: "",
            adding_to_cart_popup_text_color: ""
        },
        seo_settings: {
            title: "",
            keywords: "",
            description: ""
        },
        shipping_and_fulfillment: {
            fulfilment_service: "",
            require_shipping: ""
        },
        deleted_at: "2022-06-14",
        is_deleted: false,
        builder_name: "",
        live: false,
        charge_tax: false,
        redirect: "",
        use_fixed_price: false,
        fixed_price: 0,
        start_price: 0,
        product_orders: false,
        keep_builder: false,
        theme: {},
        custom_url_path: "",
        step: 0
    });

    // useEffect(()=>{
    //     api.createBuilderSettings();
    // },[])

    const submitForm = async () => {
        const response = await api.createBuilderSettings(formData)
        moveToPrevious(stepNo)
        console.log("My Response =>>>", response);
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
                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Back</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => {
                        submitForm()
                    }} >Save & Next</Button>
                </div>
            </div>
        </>
    )
}

export default BuilderSettingsForm