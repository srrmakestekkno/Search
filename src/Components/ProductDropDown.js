import React from "react";

const Product = (props) => (
    <option value={props.productName}>{props.productName}</option>
);

const Products = (props) => {
    return (
        <div className="products">
            <form>
                <label className="dropdownLabel">Produkter</label>
                <select
                    onClick={e => props.productClick(e)}
                    className="dropdown"
                    value={props.selectedProduct}
                    onChange={(event) => props.onSelectChange("selectedProduct", event.target.value)}>
                    <option value="">-- Velg produkt --</option>
                    {props.products.map(product => <Product key={product.id} {...product} />)}
                </select>
            </form>
        </div>
    );
};

const ProductsDropdown = (props) => {   
    return (
        <div>
            <Products
                productClick={props.productClick}
                onSelectChange={props.onSelectChange}
                selectedProduct={props.selectedProduct}
                products={props.products} />
        </div>
    );
};

export default ProductsDropdown;