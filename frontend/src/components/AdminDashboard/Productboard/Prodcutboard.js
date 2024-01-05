import React, {useEffect,useState, useMemo} from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext';

import './Productboard.css';
import { IoMdArrowDropdown } from "react-icons/io";


const Productboard = ({data}) => {
    const {user} = useAuthContext();
  
    let products = [...data];

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [quantity, setQuantity] = useState('');
  const [allProducts, setAllProducts] = useState(products);


    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const toggleAddProductForm = () => {
        setShowAddProductForm(!showAddProductForm);
    };

    const handleAddSubmit = async(e) => {
        e.preventDefault();
        // Logic to add the product to the backend
        const productData = {
          category,
          id: productId,
          name: productName,
          price: productPrice,
          quantity,
          description,
          imageURL,
        };

       

        try {
            const response = await fetch('/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify(productData),
            });
            const addedProduct = await response.json();
            setAllProducts([...products, addedProduct]);
          } catch (error) {
            console.error('Error adding product:', error);
          }
        
        // Update your product list in the frontend if necessary
        // Reset form fields or close the form
    };


  return (
    <div className="orders-container">
        <div className="control-panel">
           <button onClick={toggleAddProductForm}>Add Product</button>
           <button >Update Product</button>
           <button >Delete Product</button>
           <button >Search Product</button>

        </div>

        {
            showAddProductForm && (
                <form onSubmit={handleAddSubmit}>
                   <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        placeholder="Product Category"
                    />
                    <input 
                        type="number" 
                        value={productId} 
                        onChange={(e) => setProductId(e.target.value)} 
                        placeholder="Product Number"
                    />
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                        placeholder="Product Name"
                    />
                    <input 
                        type="number" 
                        value={productPrice} 
                        onChange={(e) => setProductPrice(e.target.value)} 
                        placeholder="Product Price"
                    />
                     <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        placeholder="Quantity"
                    />
                     <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Description"
                    />
                     <input 
                        type="text" 
                        value={imageURL} 
                        onChange={(e) => setImageURL(e.target.value)} 
                        placeholder="ImageURL"
                    />
                    
                    <button type="submit" >Add</button>
        </form>
        
            )
        }
            
 
        <table>
            <thead>
                <tr>
                    <th onClick={() => requestSort('orderDate')}>Category<span><IoMdArrowDropdown /></span></th>
                    <th onClick={() => requestSort('orderNumber')}>Product No</th>
                    <th onClick={() => requestSort('totalPrice')}>Name<span><IoMdArrowDropdown /></span></th>
                    <th onClick={() => requestSort('totalItems')}>Price<span><IoMdArrowDropdown /></span></th>
                    <th onClick={() => requestSort('status')}>Qty</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((product) => (
                    <tr key={product._id}>
                        <td>{product.category}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
  
    </div>
  )
}

export default Productboard
