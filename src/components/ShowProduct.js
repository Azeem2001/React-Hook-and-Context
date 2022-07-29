import React from "react";
import { ShopContext } from "../context/ShopContext";
class ShowProduct extends React.Component {
    static contextType = ShopContext;


    render() {
        const { Products } = this.context;
        console.log(Products)
        return (
            <div>
                <h1>All Products</h1>
                {Products.map((pro) => (
                    <div >
                        <table key={pro.id} >
                            <tr>
                            <th>{pro.name}</th>
                             </tr>
                             <tbody>
                               <tr>
                                <td>{pro.price}</td>
                                </tr>    
                            </tbody>                        
                        </table>
                          
                    </div>
                ))}
            </div>

        );
    }
}

export default ShowProduct;