import { LightningElement, api } from 'lwc';
import myResource from '@salesforce/resourceUrl/creditScoreImg';


export default class CitiCreditBalance extends LightningElement {
    @api availableCreditToSpend;
    @api totalCreditLimit;
    @api eligibleCreditLimit;

    creditImageURL = myResource;


}