import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"

function EditTranslationModal({ modalState, handleClose, FormsData, checkBoxData }) {
    return (
        <>
            <Modal
                size="lg"
                show={modalState}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Builder Translations</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-sm ">
                    <div className="p-2">
                        Use the text boxes below to replace the default wording used on this builder.
                    </div>
                    <div className="px-4 py-2 cus-Overflow">
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Total" - Shown in the footer</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Total'}
                                name="total"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Next" - Inside the next button</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Next'}
                                name="next"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Back" - Inside the back button</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Back'}
                                name="back"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Complete" - Inside the complete button</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Complete'}
                                name="complete"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text inside the error when the minimum selections is not met. Use the {'number'} placeholder</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Please select at least {number} product(s)'}
                                name="minSelections"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text inside the error when the maximum selections is met</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'You can only select {number} product(s)'}
                                name="maxSelections"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"View Box" - Text inside the button to load the contents on a mobile</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'View Box'}
                                name="viewBox"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Hide Box" - Text inside the button to hide the contents on a mobile</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Hide Box'}
                                name="hideBox"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Sort by" - Inside the sort by drop down menu</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Sort by'}
                                name="sortBy"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The first sorting option</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Product Title (asc)'}
                                name="prodTitleAsc"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The second sorting option</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Product Title (desc)'}
                                name="prodTitleDescending"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The third sorting option</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Price (low to high)'}
                                name="lowToHigh"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The fourth sorting option</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Price (high to low)'}
                                name="highToLow"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Filter by collection" - Inside the collection filter drop down menu</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Filter by collection'}
                                name="ByCollection"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Filter by tags" - Inside the tags filter drop down menu</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Product Title (desc)'}
                                name="byTags"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The second sorting option</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Filter by tags'}
                                name="total"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Search" - The placeholder for the search box</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Search...'}
                                name="seacrh"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Step" - Shown in the progress bar</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Step'}
                                name="step"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Shown inside variant selection drop down menus</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'test'}
                                name="test"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text shown before the opton type in variant selection drop down menus</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Choose a'}
                                name="chooseA"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text to show the full product descriptions</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Read more'}
                                name="readMore"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text show when the variant is unavailable</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Sold Out'}
                                name="soldOut"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Discount" - Shown in the order details</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Discount'}
                                name="discount"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text encouraging the customer to add more items. Keep {'number'} and {'percentage'} if you want those to show.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Add {number} more item(s) to receive {percentage} off.'}
                                name="moreItemsPercentage"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text encouraging the customer to add more items. Keep {'number'} and {'discount'} if you want those to show.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Spend {number} more to get {discount} off.'}
                                name="moreItemsDiscount"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text shown when a discount criteria is met</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Discount Applied'}
                                name="discountApplied"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Popup message when a variant is selected</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Item Added'}
                                name="itemsAdded"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Error text when a required field is not filled</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Required'}
                                name="required"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Order details" - Appears above the contents of the box.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Order details'}
                                name="orderDetails"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div> <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The initial option for drop down menus on From Steps</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Please Select ...'}
                                name="initialDropdownValue"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">"Remove" - Text appearing in the button once the product is selected</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Remove:'}
                                name="remove"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">You must select an option for this product</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'You must select an option for this product'}
                                name="mustSelectOption"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The title on the popup when completing the steps.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'We are building your box.'}
                                name="titleOnPopup"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The smaller text on the popup when completing the steps.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'This may take a few seconds...'}
                                name="smTxtPopup"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">The message displayed if the customer is required to select a subscription plan.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Please select a subscription plan.'}
                                name="subscriptionPlan"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text that shows next to the start price in the box summary.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Base Price'}
                                name="basePrice"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                        <div className="pt-3">
                            <Form.Label htmlFor="inputPasswor5" className="text-sm">Text inside the reset button.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPasswor5"
                                aria-describedby="passwordHelpBlock"
                                defaultValue={'Reset'}
                                name="resetButtonTxt"
                                onChange={(e) => { FormsData(e) }}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTranslationModal