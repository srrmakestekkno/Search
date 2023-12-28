import React from "react";

const Product = () => {
    return (
        <div className="products">
            <form>
                <label for="products">Velg produkt</label>
                <select name="products" id="products_id">
                    <option disabled selected value>--- velg produkt ---</option>
                    <option value="Dokumentlist1">Dokumentlist1</option>
                    <option value="Dokumentlist2">Dokumentlist2</option>
                    <option value="Dokumentlist3">Dokumentlist3</option>
                    <option value="Dokumentlist4">Dokumentlist4</option>
                </select>
            </form>
        </div>
    );
};

export default Product;