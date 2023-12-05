import Input from "./components/forms/Input"
import Checkbox from "./components/forms/Checkbox"
import './App.css'
import ProductTable from "./components/products/ProductTable"

const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
  ]
  

function App() {
  return (
    <div>
        <SearchBar />
        <Products />
    </div>
  )
}

function SearchBar() {
    return (
        <form>
            <Input />
            <Checkbox />
            <br />
        </form>
    )
}

function Products() {
    return (
        <ProductTable products={PRODUCTS} />
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Price</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <th colSpan={2}>Fruits</th>
        //         </tr>
        //         <tr>
        //             <td>Apple</td>
        //             <td>$1</td>
        //         </tr>
        //         <tr>
        //             <td>Dragonfruit</td>
        //             <td>$5</td>
        //         </tr>
        //         <tr>
        //             <td className="text-red">Passionfruit</td>
        //             <td>$2</td>
        //         </tr>
        //         <br />
        //         <tr>
        //             <th colSpan={2}>Vegetables</th>
        //         </tr>
        //         <tr>
        //             <td>Spinach</td>
        //             <td>$1</td>
        //         </tr>
        //         <tr>
        //             <td className="text-red">Pumpkins</td>
        //             <td>$2</td>
        //         </tr>
        //         <tr>
        //             <td>Lettuce</td>
        //             <td>$3</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}


export default App