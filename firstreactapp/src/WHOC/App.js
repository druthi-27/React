import './App.css'
import clothing from './cdata'
import productDetails from './edata'
import FilterProductsClothing from './FilterProductsClothing'
import FilterProductsElectronic from './FilterProductsElectronic'
function App(){
    return(
        <div className='Main'>
          <h2>Welcome to Amazon store</h2>
        <FilterProductsClothing data={clothing} storename="Fashion Store"></FilterProductsClothing>
          <FilterProductsElectronic data={productDetails} storename="Home appliances"></FilterProductsElectronic>
        </div>
    )
}
export default App