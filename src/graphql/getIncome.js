import { gql, } from '@apollo/client';

const getIncomes = gql`
    query incomes {
        incomes {
            id
            amount
        }
    }`;

export {
    getIncomes
}