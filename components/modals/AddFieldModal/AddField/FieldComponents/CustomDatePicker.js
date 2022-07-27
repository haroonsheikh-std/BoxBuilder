import { Col,Form,Row } from "react-bootstrap";
import {language, weekDays} from "../../../../../constants/defaultData";


const CustomDatePickerField = () => {
console.log(language, 'languageee');
    return (
        <div>
        <Col >
            <Form.Group className="mb-3" controlId="titles">
                <Form.Label className="text-sm ">Field Title</Form.Label>
                <Form.Control required placeholder='e.g Would you like to engrave this product?' name='titles' className="text-sm" type="text" onChange={(e) => { }} label="Field Title" />
                <p className="text-secondary text-sm"> Text to appear above the field.</p>
            </Form.Group>
        </Col>
        <Row>
            <Col >
                <Form.Group className="mb-3" controlId="descriptions">
                    <Form.Label className="text-sm ">Date Format</Form.Label>
                    <Form.Control placeholder='e.g 1' name='descriptions' type='date' className="text-sm" onChange={(e) => { }} label="Required Field" />
                 
                </Form.Group>
            </Col>
            <Col >
                <Form.Group className="mb-3" controlId="redirect">
                    <Form.Label className="text-sm ">Language</Form.Label>
                    <Form.Select name="redirect" aria-label="Default select example">

                    {language?.map((d,i)=> {
                    return (
                        <>
                        <option selected name={d} value={d}>{d} </option>
                        </>
                    )
                })}
                                   
                                </Form.Select>
        
                </Form.Group>
            </Col>
        </Row>
        <Col >
            <Form.Group className="mb-3" controlId="leadName">
                <Form.Label className="text-sm ">Lead Team</Form.Label>
                <Form.Control required placeholder='e.g. 3' name='leadName' className="text-sm" type="number" onChange={(e) => { }} label="Field Title" />
                <p className="text-secondary text-sm">The number of days to block from the current date onwards.</p>
            </Form.Group>
        </Col>
        <Col >
                    <Form.Group className="mb-3" controlId="lives">
                        <Form.Check className="text-sm" name='lives' type="checkbox" label="Only allow future dates" />
                        <p className="text-secondary text-sm">If selected, customers cannot select today's date or a date in the past</p>
                    </Form.Group>
                </Col>

                <Col >
                    <Form.Group className="" controlId="lived">
                   <Form.Label className="font-semibold">SELECT DAYS TO BLOCK</Form.Label>
                 </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="mon">
                        {weekDays.map((weekDays,id) => {
                            return(
                                <>
                                <Form.Check className="text-sm mb-3" name='mon' type="checkbox" label={weekDays} />
                                </>
                            )
                        })}
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="lived">
                     <p>Block Specific Dates</p>  
                     <button type="button" class="btn btn-outline-secondary">Set Blocked Dates</button>
                    </Form.Group>
                </Col>
<hr/>
{/* <DatePickers/> */}
    </div>
    )
}
export default CustomDatePickerField;