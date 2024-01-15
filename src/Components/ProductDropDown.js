import React from "react";

const Product = (props) => (
    <option value={props.productName}>{props.productName}</option>
);

const Products = (props) => {
    return (
        <div className="products">
            <form>
                <label>Produkter</label>
                <select onChange={(event) => props.onSelect(event.target.value)} name="products" id="products_id">
                    <option value="">-- Velg produkt --</option>
                    {props.products.map(product => <Product key={product.id} {...product } />)}
                </select>
            </form>
        </div>
    );
};

const ProductsDropDown = (props) => {   
    const handleSelectedValue = (value) => {
        props.onChange(value);
    };

    return (
        <div>
            <Products onSelect={handleSelectedValue} products={props.products} />
        </div>
    );
};

export default ProductsDropDown;