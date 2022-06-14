import { useEffect, useState } from 'react/cjs/react.production.min';
import BuilderSettingsForm from '../builderForms/builderSettingsForm/builderSettingsForm'
import DiscountsForm from '../builderForms/discountsForm/discountsForm'
import StepsForm from '../builderForms/stepsForm/stepsForm'
import SummaryForm from '../builderForms/summaryForm/summaryForm'
import { Card } from 'react-bootstrap';

const DisplayForm = ({ stepNo, moveToNext, moveToPrevious }) => {

    return (
        <>
            <Card className='p-4'>
                {
                    stepNo == 0 ?
                        <BuilderSettingsForm moveToPrevious={moveToPrevious} stepNo={stepNo} moveToNext={moveToNext} />
                        : stepNo == 1 ?
                            <StepsForm moveToPrevious={moveToPrevious} stepNo={stepNo} moveToNext={moveToNext} />
                            : stepNo == 2 ?
                                <DiscountsForm moveToPrevious={moveToPrevious} stepNo={stepNo} moveToNext={moveToNext} />
                                : 
                                <SummaryForm moveToPrevious={moveToPrevious} stepNo={stepNo} moveToNext={moveToNext} />
                }
            </Card>
            </>
    )
}

export default DisplayForm;