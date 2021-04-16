import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FizzLogo from './images/fizzlogo-white.png'


const Hero = () => {
    const [multipleOne, setMultipleOne] = useState(''); // First Multiple
    const [multipleTwo, setMultipleTwo] = useState(''); // Second Multiple
    const [count, setCount] = useState(1); // Second Multiple

    let combinedMultiples = multipleOne * multipleTwo

    const handleDecrement = e => {
        e.preventDefault();
        setCount(prevCount => count - 1)
    };

    const handleIncrement = e => {
        e.preventDefault();
        setCount(prevCount => count + 1)
    };


    return (
        <div className='homepage-wrapper row d-flex  '>
            <div className="col-md-12 logo text-center mx-3">
                <img src={FizzLogo} alt="Fizz Logo"/> {/* App Logo */}
            </div>
            <div className="col-md-6">
                <div className="container instruction">

                <p>For each multiple of {multipleOne ? <strong>{multipleOne}</strong>  : <strong>Multiple Number One</strong>}, change state to <strong>"Fizz"</strong> instead of the number.</p>

                <p>For each multiple of {multipleTwo ? <strong>{multipleTwo}</strong>  : <strong>Multiple Number Two</strong>}, change state to <strong>"Buzz"</strong> instead of the number.</p>

                <p>For numbers which are multiples of both {multipleOne ? <strong>{multipleOne}</strong> : <strong>Multiple Number One</strong>} and {multipleTwo ? <strong>{multipleTwo}</strong>: <strong>Multiple Number Two</strong>}, change state to <strong>"FizzBuzz"</strong> instead of the number.</p>
                </div>
                </div>
            <div className="col-md-6 text-center text-white">
                <form>
                    <p>Please choose a number for <strong>multiple one and multiple two</strong></p>
                    { // Conditions to print Fizz, Buzz or FizzBuzz
                        (count % combinedMultiples === 0) ? <h2>FizzBuzz</h2> :
                        (count % multipleOne === 0)  ? <h2>Fizz</h2>     :
                        (count % multipleTwo === 0)  ? <h2>Buzz</h2>     :
                        (count === 0)  ? <h2>{count}</h2>     : <h2>{count}</h2>
                    }
                    <button className="btn btn-primary" onClick={handleDecrement}>-</button>
                    <button className="btn btn-primary" onClick={handleIncrement}>+</button>
                    <div>
                        <input onChange={e => setMultipleOne(e.target.value)} value={multipleOne} placeholder="Multiple One"/>
                        <input onChange={e => setMultipleTwo(e.target.value)} value={multipleTwo} placeholder="Multiple Two"/>
                    </div>
                    <div className="col-md-6 fizz d-none"></div>
                </form>
            </div>
        </div>
    )
}

export default Hero
