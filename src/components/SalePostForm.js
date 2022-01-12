import "./PostForm.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;


class SalePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",

        };
    }
    handleTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    handleDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }




    handleSubmit = (e) => {
        e.preventDefault();
        const newSale = {
            title: this.state.title,
            description: this.state.description,

        };
        axios
            .post(`${REACT_APP_SERVER_URL}/sales/new`, newSale)
            .then((response) => {
                this.setState({
                    redirect: true,
                });
            })
            .catch((error) => console.log("===> Error in Form", error));
    };


    render() {
        if (this.state.redirect) return <Redirect to="/sales" />; // You can have them redirected to profile (your choice)

        return (
            <div>
                <h1>Sale Post Form</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>
                            Title
                            <br />
                            <input type="text" name="Title"
                                value={this.state.title} onChange={this.handleTitle.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Description
                            <br />
                            <input id="description" type="text" name="Description"
                                value={this.state.description} onChange={this.handleDescription.bind(this)} />
                        </label>
                        <br />
                    </div>

                    <input type="submit" value="Submit Post" />
                </form>
            </div>
        );
    }
};



export default SalePostForm;