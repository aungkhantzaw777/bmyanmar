import { gql, } from '@apollo/client';

const createIncome = gql`
    mutation CreateIncome($amount:Int!) {
        createIncome(amount:$amount){
            id
            amount
        }
    }`;

export {
    createIncome
}