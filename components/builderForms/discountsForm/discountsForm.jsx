import { Button } from "react-bootstrap"
// import AddDiscounts from "./addDiscount/addDiscount"
import DiscountModals from "./discountModal/discountModal"
import { useEffect, useState } from "react"


const DiscountsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    let [formData, setFormData] = useState({
        Add_discount: {
            discount_title: "",
            discount_type: "",
            discount_amount: 0,
            discount_when: "",
            require_item_num: 0,
            apply_on: "",
            encourage_discount: false,
            item_reached: 0,
            apply_after: false,
            on_order: 0
        },
        
        deleted_at: "2022-06-14",
        is_deleted: false,
        builder_name: "",
        step: 3
    });

    // useEffect(()=>{
    //     api.createBuilderSettings();
    // },[])

    // const submitForm = async () => {
    //     const response = await api.createBuilderSettings().then((d) => {
    //         console.log(d)
    //         moveToNext(stepNo)
    //     });
    // }

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

    

    console.log(formData)

    
    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Automatic Builder Discounts </h5>
                </div>
                <br></br>
                <br></br>
                {/* <AddDiscounts/> */}
                <hr />
                <DiscountModals checkBoxData={checkBoxData} FormsData={FormsData}/>

                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Finish</Button>
                </div>
            </div>
        </>
    )
}
export default DiscountsForm