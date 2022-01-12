import React, { useState } from "react";
import "./SaleContainer.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams
} from "react-router-dom";

const SaleDisplay = () => {
    const [salePosts] = useState([
        {
            id: 1, title: "Remove feral cats from my basement",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$free",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 2, title: "Bargain Egyptian Artifacts",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "NYC",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 3, title: "Old person clothes - vintage and good quality",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$1250",
            location: "Los Angeles",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 4, title: "Rocket Powered 1971 VW Bug!",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$10,000",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 5, title: "Box of peaches. Pick your own.",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$10",
            location: "Denver",
            imageURL: "http://placekitten.com/200/300"
        },
    ]);


    return (

            <div className="sale-container">
                {salePosts.map((salePost) => (
                    <div className="post-preview" key={salePost.id}>
                        <Link to={`/sales/`}>
                            <h2>{salePost.title}</h2>
                            <p>{salePost.price}, {salePost.location}</p>
                        </Link>
                    </div>

                ))}
            </div>
    )

}

// const displaySales = data.map((a, idx) => {
//     return (
//         <Sale
//             key={idx}
//             title={a.title}
//             description={a.description}
//             price={a.price}
//             location={a.location}
//             imageURL={a.imageURL}
//         />
//     );
// });

// class SaleContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         };
//     }

//     componentDidMount() {
//         axios.get('OUR SALE API GOES HERE')
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({
//                     data: response.data.top
//                 })
//             })
//             .catch((error) => {
//                 console.log('error hitting api', error);
//             })
//     }

//     displaySales() {
//         const display = this.state.data.map((a, idx) => {
//             return <Sale
//                 key={idx}
//                 title={a.title}
//                 description={a.description}
//                 price={a.price}
//                 location={a.location}
//                 imageURL={a.imageURL}
//             />
//         });

//         return display;
//     }

//     render() {
//         return (
//             <div>
//                 {this.displaySales()}
//             </div>

//         );
//     }
// }

export default SaleDisplay;
