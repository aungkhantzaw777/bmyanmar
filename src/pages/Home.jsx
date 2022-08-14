import { Link } from "react-router-dom"
import { useQuery } from '@apollo/client';
import { getIncomes } from '../graphql/getIncome'
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";

function Home() {
    const { loading, error, data } = useQuery(getIncomes);
    
    if (loading) return (<div>loading...</div>);

    if (error) return `Error! ${error}`;
    return (
        <div  className="container">
            <div>
                <div>
                    <Link to={'/income'} about="Income" >Income</Link>
                </div>
                <div className="mt-3">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>amount</th>
                            </tr>
                        </thead>
                        {
                            !loading &&
                            (
                                <tbody>
                                    {data.incomes.map(d => (
                                        <tr key={d.id}>
                                            <td >
                                                {d.amount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )
                        }
                    </Table >
                </div>
            </div>
        </div>
    )
}

export default Home