import { Button } from "react-bootstrap"

const StepsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Builder Steps </h5>
                </div>
                {/* <BuilderSettings/> */}
                <hr />
                {/* <OrderProduct/> */}
                <hr />
                {/* <DisplaySettings/> */}
                <hr />

                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Next</Button>
                    </div>
            </div>
        </>
    )
}
export default StepsForm