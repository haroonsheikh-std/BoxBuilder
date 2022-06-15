import { useState } from "react"
import React from 'react'
import { AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color'
import { Form, Button, Row, Col, Dropdown, Accordion } from "react-bootstrap"

const StyleSettings = ({ colorsData }) => {
    const [primaryButtonClr, setPrimaryButtonClr] = useState('#fff')
    const [secondarButtonClr, setSecondarButtonClr] = useState('#fff')
    const [prodSelectClr, setProdSelectClr] = useState('#fff')
    const [prodBorderClr, setProdBorderClr] = useState('#fff')
    const [lightBoxBgClr, setLightBoxBgClr] = useState('#fff')
    const [lightBoxTxtClr, setLightBoxTxtClr] = useState('#fff')
    const [progressBaeTxtClr, setProgressBaeTxtClr] = useState('#fff')
    const [progressBarClr, setProgressBarClr] = useState('#fff')
    const [boxBgClr, setBoxBgClr] = useState('#fff')
    const [totalTxtCLr, setTotalTxtCLr] = useState('#fff')
    const [totalPriceTxtClr, setTotalPriceTxtClr] = useState('#fff')
    const [orderBoxDetailTxtClr, setOrderBoxDetailTxtClr] = useState('#fff')
    const [cartPopupBgClr, setCartPopupBgClr] = useState('#fff')
    const [cartPopuptitleClr, setCartPopuptitleClr] = useState('#fff')
    const [cartPopupTxtClr, setCartPopupTxtClr] = useState('#fff')
    const handleChangeComplete1 = (color) => {
        setPrimaryButtonClr(color)
    }
    const handleChangeComplete2 = (color) => {
        setSecondarButtonClr(color)
    }
    const handleChangeComplete3 = (color) => {
        setProdSelectClr(color)
    }
    const handleChangeComplete4 = (color) => {
        setProdBorderClr(color)
    }
    const handleChangeComplete5 = (color) => {
        setLightBoxBgClr(color)
    }
    const handleChangeComplete6 = (color) => {
        setLightBoxTxtClr(color)
    }
    const handleChangeComplete7 = (color) => {
        setProgressBaeTxtClr(color)
    }
    const handleChangeComplete8 = (color) => {
        setProgressBarClr(color)
    }
    const handleChangeComplete9 = (color) => {
        setBoxBgClr(color)
    }
    const handleChangeComplete10 = (color) => {
        setTotalTxtCLr(color)
    }
    const handleChangeComplete11 = (color) => {
        setTotalPriceTxtClr(color)
    }
    const handleChangeComplete12 = (color) => {
        setOrderBoxDetailTxtClr(color)
    }
    const handleChangeComplete13 = (color) => {
        setCartPopupBgClr(color)
    }
    const handleChangeComplete14 = (color) => {
        setCartPopuptitleClr(color)
    }
    const handleChangeComplete15 = (color) => {
        setCartPopupTxtClr(color)
    }
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item className="cus-border-none" eventKey="0">
                    <Accordion.Header>Show Style Settings</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col >
                                <Form.Label className="text-sm "><b>Primary Button Color</b></Form.Label>
                                <SketchPicker  onChange={(e) => { colorsData('primary_button_color',e.hex,'style_settings') }} color={primaryButtonClr} onChangeComplete={handleChangeComplete1} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Secondary Button Color</b></Form.Label>
                                <SketchPicker  onChange={(e) => { colorsData('secondary_button_color',e.hex,'style_settings') }}  color={secondarButtonClr} onChangeComplete={handleChangeComplete2} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Product Select Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('product_select_color',e.hex,'style_settings' )}}  color={prodSelectClr} onChangeComplete={handleChangeComplete3} />
                            </Col>
                        
                            <Col >
                                <Form.Label className="text-sm "><b>Product Border Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('product_border_color',e.hex,'style_settings') }}  color={prodBorderClr} onChangeComplete={handleChangeComplete4} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Lightbox Background Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('lightbox_background_color',e.hex,'style_settings') }}  color={lightBoxBgClr} onChangeComplete={handleChangeComplete5} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Lightbox Text Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('lightbox_text_color',e.hex,'style_settings') }}  color={lightBoxTxtClr} onChangeComplete={handleChangeComplete6} />
                            </Col>
                        
                            <Col >
                                <Form.Label className="text-sm "><b>Progress Bar Text Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('progress_bar_text_color',e.hex,'style_settings') }}  color={progressBaeTxtClr} onChangeComplete={handleChangeComplete7} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Progress Bar Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('progress_bar_color',e.hex,'style_settings') }}  color={progressBarClr} onChangeComplete={handleChangeComplete8} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Total Box Background Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('total_box_background_color',e.hex,'style_settings') }}  color={boxBgClr} onChangeComplete={handleChangeComplete9} />
                            </Col>
                        
                            <Col >
                                <Form.Label className="text-sm "><b>'Total' Text Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('total_text_color',e.hex,'style_settings') }}  color={totalTxtCLr} onChangeComplete={handleChangeComplete10} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Total Price Text Color</b></Form.Label>
                                <SketchPicker  onChange={(e) => { colorsData('total_price_text_color',e.hex,'style_settings') }} color={totalPriceTxtClr} onChangeComplete={handleChangeComplete11} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Order/Box Details Product Text Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('order_detail_product_text_color',e.hex,'style_settings') }}  color={orderBoxDetailTxtClr} onChangeComplete={handleChangeComplete12} />
                            </Col>
                        
                            <Col >
                                <Form.Label className="text-sm "><b>Adding to cart popup background color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('adding_to_cart_popup_background_color',e.hex,'style_settings') }}  color={cartPopupBgClr} onChangeComplete={handleChangeComplete13} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Adding to cart popup title Color</b></Form.Label>
                                <SketchPicker onChange={(e) => { colorsData('adding_to_cart_popup_title_color',e.hex,'style_settings') }}  color={cartPopuptitleClr} onChangeComplete={handleChangeComplete14} />
                            </Col>
                            <Col >
                                <Form.Label className="text-sm "><b>Adding to cart popup text color</b></Form.Label>
                                <SketchPicker  onChange={(e) => { colorsData('adding_to_cart_popup_text_color',e.hex,'style_settings') }} color={cartPopupTxtClr} onChangeComplete={handleChangeComplete15} />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default StyleSettings