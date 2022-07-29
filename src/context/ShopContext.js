    import React,{createContext} from 'react';

    export  const ShopContext = createContext();

    class ShopContextProvider extends React.Component {

        state={
            "Products":[
                {id:1,name:"Laptop",price: 200},
                {id:2,name:"Mobile",price: 300},
                {id:3,name:"HP Computer",price: 400},
                {id:4,name:"IPhone",price: 800},
                {id:5,name:"smart Watch",price: 350},
                
            ]
        }
        render(){
            
            
            return(
                <ShopContext.Provider
                 value={{...this.state.Products}}>
                   {this.props.children}
                </ShopContext.Provider>
            );
        }
    }
    export default ShopContextProvider;