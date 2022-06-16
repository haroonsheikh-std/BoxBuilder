import DisplayForm from './displayForm'
import React, { useState } from 'react';
import stepsForm from '../../constants/steps.js';

const Stepper = () => {

    const notSelected = "w-6 h-6 text-[10px] font-bold leading-6 bg-gray-200 text-center rounded-full"
    const selected = "w-6 h-6 text-[10px] font-bold leading-6 bg-blue-600 text-white text-center rounded-full"
    const [stepNo, setStepNo] = useState(0)
    const [currentColor, setCurrentColor] = useState()

    const moveToNext = (step) => {
        console.log(step);
        if (step < 3) {
            setStepNo(step + 1)
        } 
    }

    const moveToPrevious = (step) => {
        if (step > 0) {
            setStepNo(step - 1)
        } 
    }

    return (
        <div>
            <h2 className="sr-only">Steps</h2>
            <div className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-white-100" >
                <ol className="relative z-10 flex justify-between text-sm font-medium text-white-500" >
                    {
                        stepsForm?.map((data, index) => {
                            return (
                                <li key={index} className="flex items-center p-2 bg-gray" >
                                    <span className={stepNo == index ? selected : notSelected}  >
                                        {data?.index}
                                    </span>
                                    <span className="hidden sm:block sm:ml-2"> {data?.name} </span>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            <div>
                <DisplayForm stepNo={stepNo} moveToPrevious={moveToPrevious} moveToNext={moveToNext} />
            </div>
        </div>
    )
}

export default Stepper