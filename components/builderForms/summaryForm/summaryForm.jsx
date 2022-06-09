import { Button } from "react-bootstrap"

const SummaryForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    return (
        <>
            <p>SummaryForm</p>
            <div>
                <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Next</Button>
            </div>
        </>

    )
}
export default SummaryForm