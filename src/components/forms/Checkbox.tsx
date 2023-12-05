function Checkbox() {
    return(
        <div className="form-group">
            <input type="checkbox" className="form-control" name="in-stock" id="inStock" />
            <label htmlFor="inStock">Only show products in stock</label>
        </div>
    )
}

export default Checkbox