import { useEffect, useState } from "react";
import { Slider } from 'antd';
import BASE_URL from '../data/data';

function VolumeFilter({ setBaseUrl, resetButton, setResetButton }) {

    useEffect(() => {
        if (resetButton) {
            setNoneButton(true)
            setGtButton(false)
            setLtButton(false)
            setResetButton(false)
        }

    }, [resetButton])

    const [volume, setVolume] = useState('30')

    const [noneButton, setNoneButton] = useState(true)
    const [gtButton, setGtButton] = useState(false)
    const [ltButton, setLtButton] = useState(false)

    if (noneButton) {
        setBaseUrl(`${BASE_URL}`)
    } else if (gtButton) {
        setBaseUrl(`${BASE_URL}&abv_gt=${volume}`)
    } else {
        setBaseUrl(`${BASE_URL}&abv_lt=${volume}`)
    }

    const noneHandler = () => {
        setNoneButton(true)
        setGtButton(false)
        setLtButton(false)
    }

    const greaterHandler = () => {
        setNoneButton(false)
        setGtButton(true)
        setLtButton(false)
    }

    const lowerHandler = () => {
        setNoneButton(false)
        setGtButton(false)
        setLtButton(true)
    }

    function handleValueChange(newVolume) {
        setVolume(newVolume)
    }

    return (
        <>
          <div className="container">
                <div className="row my-5 mx-0">
                    <div className="col-xl-2 col-lg-12">
                        <h5>Alcohol by Volume</h5>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <button type="button" className={`${noneButton ? "btn-info" : "btn-outline-info"} btn ms-4`} onClick={noneHandler}>None</button>
                        <button type="button" className={`${gtButton ? "btn-info" : "btn-outline-info"} btn ms-2`} onClick={greaterHandler}>Greater Than</button>
                        <button type="button" className={`${ltButton ? "btn-info" : "btn-outline-info"} btn ms-2`} onClick={lowerHandler}>Lower Than</button>
                    </div>
                    <div className="col-xl-4 col-lg-8">
                        <Slider defaultValue={30} min={0} max={100} disabled={noneButton} step={0.1} onChange={handleValueChange} />
                        </div>
                </div>
            </div>
        </>
    )
}

export default VolumeFilter