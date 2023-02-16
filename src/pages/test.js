import React, { Component } from "react";
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';


export default class List extends Component {
    constructor(props) {
        super(props);
        this.loadList = this.loadList.bind(this);
        this.updatelist = this.updatelist.bind(this);
    }

    async loadList() {
        const res = await axios.get('https://lab_api.1life.ph/api/gender/');
        console.log(res);
        return res;
    }
    async updatelist() {
        const data = {
            "Birthday": "1995-09-04 00:00:00",
            "BookingID": 0,
            "CivilStatusID": 39,
            "DateRegistered": "1753-01-01",
            "FirstName": "Lj",
            "GenderID": 3,
            "ID": 144142,
            "IsActive": true,
            "Latitude": "",
            "LastName": "Vargas Test",
            "Longitude": "",
            "MiddleName": "X",
            "StatusID": 12,
            "Suffix": "",
            "UserID": "lmestrella"
        }
        console.log(data);
       // const res = await axios.put('https://lab_api.1life.ph/api/account/update',data);
        const res = await axios({
            method: 'put',
            headers : {
                "Content-Type" : "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",     
                    "Access-Control-Max-Age": 86400
                   
            },
            url: 'https://lab_api.1life.ph/api/account/update',
            data: data
        });
        
        
        console.log(res);
        return res;
    }
    render() {
        return (
            <Container>
                <Button variant="primary" onClick={this.loadList}>
                    Get
                </Button>
                <Button variant="primary" onClick={this.updatelist}>
                    Put
                </Button>
            </Container>
        )
    }
}