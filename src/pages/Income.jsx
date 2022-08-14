import { createIncome } from "../graphql/createIncome"
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import {Link, useNavigate   } from 'react-router-dom'


function Income () {
    const [income, setIncome] = useState('')
    const [CreateIncome, { data, loading, error }] = useMutation(createIncome);
    let navigate = useNavigate();

    const saveInput = (e) =>  {
        e.preventDefault();
        let amount = parseInt(income)
        CreateIncome({variables: {amount}})
        
    }
    if (loading) return 'Submitting...';

    if (error) return `Submission error! ${error.message}`;

    if(data) {
        window.location = '/'
    }

    return (
        <div className="container">
        <div>
            <Link to={`/`}>Home</Link>
            <form onSubmit={saveInput}>
                
                <div>Enter Montly Income: <input type={`number`}  onChange={(e) => setIncome(e.target.value)}  /></div>
                <button>Save</button>
            </form>
        </div>
    </div>
    )
}

export default Income