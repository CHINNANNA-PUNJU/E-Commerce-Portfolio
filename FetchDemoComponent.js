/*import { useState, useEffect } from 'react';

export default function FetchDemoComponent(){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift("All");
            setCategories(data);
        })
    }


    function LoadProducts(){
        fetch("http://fakestoreapi.com/products")
        .then(response=> response.json())
        .then(data => {
            setProducts(data);
        })
    }

    function HandleCategoryChange(e){
        if(e.target.value==='All') {
            LoadProducts();
        } else {
             fetch(`http://fakestoreapi.com/products/category/${e.target.value}`)
             .then(response => response.json())
             .then(data => {
                 setProducts(data);
             })
        }
     }

    useEffect(()=> {
       LoadCategories();
       LoadProducts();
        
    },[])
    return(
        <div className="container-fluid">
            <h2 className="bg-danger p-2 text-white text-center"> <span className="bi bi-cart4"> </span> Amazon Shopping</h2>
            <div className='row'>
                <div className='col-3'>
                  <label>Select Category</label>
                  <div>
                    <select className='form-select' onChange={HandleCategoryChange}>
                        {
                            categories.map(category =>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                        }
                    </select>
                  </div>
                </div>
                <div className='col-9' style={{overflow:'auto', height:'600px',width:'950px'}}>
                    <div className='d-flex flex-wrap'>
                        {
                            products.map(products =>
                                <div className='card m-2 w-25'>
                                    <h3>{products.title}</h3>
                                      <img
                                           alt="preview"
                                           src={products.image}
                                           className="card-img-top"
                                           style={{ height: "140px",backgroundColor:'purple' }}
                                        />  
                                    <div className='card-header'>
                                        {products.description}                      
                                    </div>
                                    <div className='card-footer'>
                                       {products.price}
                                    </div>
                                    <button className='btn btn-primary'><span className='bi bi-cart4'></span> Order</button>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}*/

import { useState,useEffect } from "react";

export default function FetchDemoComponent()
{
    const[categories, setCategories] = useState([]);
    const[products, setProducts] = useState([]);

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift("All");
            setCategories(data);
        })
    }

    function LoadProducts(){
        fetch("http://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data =>{
            setProducts(data);
        })
    }

    function HandleCategoryChange(e){
        if(e.target.value==='All'){
            LoadProducts();
        } else{
            fetch(`http://fakestoreapi.com/products/category/${e.target.value}`)
            .then(response => response.json())
            .then(data =>{
                setProducts(data);
            })
        }
    }
    
    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

  return(
    <div className="container-fluid">
        <h2 className="bg-primary text-white text-center mt-2 p-2"><span className="bi bi-cart4"></span> Amazon Shopping</h2>
        <div className="row">
              <div className="col-3">
                <div>
                    <label style={{fontSize:'25px'}} className="text-primary">Select Category</label>
                    <select className="form-select" onChange={HandleCategoryChange}>
                        {
                            categories.map(category =>
                                <option key={category} value={category}  className="text-primary">
                                   {category.toUpperCase()}
                                </option>
                                )
                        }
                    </select>
                </div>
              </div>
              <div className="col-9" style={{overflow:'auto', height: '600px'}}>
                    <div className="d-flex flex-wrap">
                       {
                           products.map(product=> 
                             <div  className="card m-2 w-25">
                                <img alt="preview" src={product.image} className="card-img-top" style={{height:'150px'}} />
                                <div className="card-header"  style={{height:'120px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <p><span className='bi bi-currency-rupee'>{product.price}</span></p>
                                </div>
                                <div className="card-footer">
                                   <button className="btn btn-danger w-100">
                                       <span className="bi bi-cart4"></span>
                      f                 Add to Cart
                                   </button>
                                </div>
                             </div>
                            )
                       }
                    </div>
                </div>
        </div>
    </div>
  )
}

/*import { useState, useEffect } from 'react';


export default function FetchDemoComponent(){


    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    


    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift("All");
            setCategories(data);
        })
    }


    function LoadProducts(){
        fetch("http://fakestoreapi.com/products")
        .then(response=> response.json())
        .then(data => {
            setProducts(data);
        })
    }


    useEffect(()=> {
       LoadCategories();
       LoadProducts();
        
    },[])


    function HandleCategoryChange(e){
       if(e.target.value==='All') {
           LoadProducts();
       } else {
            fetch(`http://fakestoreapi.com/products/category/${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
       }
    }


    return(
        <div className="container-fluid">
            <h2 className="bg-danger p-2 text-white text-center"> <span className="bi bi-cart4"> </span> Amazon Shopping</h2>
            <div className="row">
                <div className="col-3">
                   <div>
                       <label>Select a Category</label>
                       <div>
                           <select  className="form-select">
                               {
                                   categories.map(category => 
                                     <option value={category} key={category}>
                                         {category.toUpperCase()}
                                     </option>
                                    )
                               }
                           </select>
                       </div>
                   </div>
                </div>
                <div className="col-9" style={{overflow:'auto', height: '500px'}}>
                    <div className="d-flex flex-wrap">
                       {
                           products.map(product=> 
                             <div key={product.id} className="card m-2 w-25">
                                <img alt="preview" src={product.image} className="card-img-top" style={{height:'150px'}} />
                                <div className="card-header" style={{height:'120px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <p><span className='bi bi-currency-rupee'>{product.price}</span></p>
                                </div>
                                <div className="card-footer">
                                   <button className="btn btn-danger w-100">
                                       <span className="bi bi-cart4"></span>
                                       Add to Cart
                                   </button>
                                </div>
                             </div>
                            
                            )
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}*/