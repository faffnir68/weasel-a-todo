function Input() {
    return(
        <div className="form-group">
            <label htmlFor="searchItem">Search item:</label>
            <input type="text" className="form-control" name="search-item" id="searchItem" placeholder="Search..." />
        </div>
    )
}

export default Input