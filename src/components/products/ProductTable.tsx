import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable({products}) {

    console.log(products)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow />
                <ProductRow />
            </tbody>
        </table>
    )
}

export default ProductTable


