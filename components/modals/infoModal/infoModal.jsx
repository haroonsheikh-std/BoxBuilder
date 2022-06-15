import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"

function InfoModal({ modalState, handleClose }) {
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
                <Modal.Body className="p-3">
                    <div className="cus-Overflow">
                        <b >Use Your Products on new Orders</b>
                        <p className="text-secondary"> By default, each box shows up on the cart, checkout and order as 1 item/product, with the box's contents listed beneath.</p>
                        <p className="text-secondary"> You can check this box to use the actual variants on the order so, instead of showing 1 product, it will apply all the individual variants to the order.</p>
                        <p className="text-secondary">This is useful if you have downstream systems relying on the order details telling it what variants were actually sold.</p>
                        <p className="text-secondary">After the order has been paid, we will automatically make these adjustments. To the customer, it will still show as 1 product on the cart and checkout pages.</p>
                        <p className="text-secondary">Either method will adjust the stock for each variant chosen by the customer.</p>
                        <p className="text-secondary">If you're using a base price, please note that this will show as an amount owed to the customer once the products are added.</p>
                        <b>Keep the builder on the order?</b>
                        <p className="text-secondary"> When you want to use a Fixed Price, a Start Price on in-app discounts, the total price the customer pays will not match the sum of all the selected products.</p>
                        <p className="text-secondary">If you also use the 'Use your own products' setting, to show your own SKUs on the order, Shopify will realise all the SKUs' prices don't match the amount paid and will chase the customer for the outstanding amount.</p>
                        <p className="text-secondary">You can use this setting, which keeps the builder's product on the order, still adds all the SKUs but sets the individual products to 0.00, so there's no outstanding amounts.</p>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal