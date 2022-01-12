import React, { Component } from 'react';
import axios from 'axios';
import './SaleContainer.css';
import Sale from './Sale';

class SaleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://ga-list-api.herokuapp.com/sales')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.salesArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }





    displaySales() {
        const display = this.state.data.map((a, idx) => {
            return <Sale
                key={idx}
                title={a.title}
                description={a.description}
                price={a.price}
                contact_info={a.contact_info}
                location={a.location}
                image_url={a.image_url}



            />
        });

        return display;
    }


    render() {
        return (
            <div>

                {this.displaySales()}

            </div>
        )
    }



}


export default SaleContainer;