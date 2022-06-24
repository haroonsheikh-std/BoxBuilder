import { Button } from "react-bootstrap"
import AddDiscounts from "./addDiscount/addDiscount"
import DiscountModals from "./discountModal/discountModal"
import { useEffect, useState } from "react"
import { dicountFormData } from '../../../constants/defaultData'

const DiscountsForm = ({ moveToNext, stepNo, moveToPrevious }) => {

    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Automatic Builder Discounts </h5>
                </div>
                <br></br>
                <br></br>
                <AddDiscounts />
                <hr />
                <DiscountModals />
                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Finish</Button>
                </div>
            </div>
        </>
    )
}
export default DiscountsForm