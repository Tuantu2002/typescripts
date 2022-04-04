import React , {Component, useEffect, useState } from 'react'
import { DeleteProduct, getProducts } from '../client_api/product';
import { Link } from 'react-router-dom';

class ProductList  extends Component{
    state = {
        count : 0
    };
    componentDimount (){
        console.log('didmount' , this.state.count);
    }
    componentUpdate(){
        console.log("diupdate" , this.state.count);
    }
    render() {
        return(
            <div className="" onClick={() => this.setState({
                count: this.state.count +1
            })}>
                    products list class
                    <div className="">
                        {this.state.count}
                    </div>
            </div>
        )
    }
} 

export type PRODUCT_TYPE = {
    id : number | string,
    name: string,
    price: number,

};

function ListProduct(){
  // const [count, setCount] = useState<number>(0);
    const [products, setProduct] = useState<PRODUCT_TYPE[]> ([]);
    // Thực hiện công việc và lắng nghe sự thay đổi của state
    // 2 tham số: arrow function để thực hiện công việc
    // [các phụ thuộc]: nếu k có phụ thuộc nào -> chỉ chạy 1 lần đầu
    // nếu có phụ thuộc -> khi biến phụ thuộc thay đổi -> chạy lại
    const handleGetProducts = async () => {
        const respone = await getProducts();
        setProduct(respone.data);
    };


      const handleDelete = async (id : string | number) =>{
                    const response = await DeleteProduct(id);
                    console.log(response);
                     if(response.status===200){
                         handleGetProducts();
                     }
                    
      };
    console.log(products);

    useEffect(() => {
        handleGetProducts();

    } , []);
    return(
        <div className="">
            <div>
                <Link to={'/products/create'}><button>Tạo mới</button></Link>
            </div>
            <table className="table__studen">
            <thead>
               <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>price</th>
                   <th>action</th>
                   
               </tr>
            </thead>
            <tbody>
            {products.map(Product =>(
                    <tr key={Product.id}>
                        <td>{Product.id}</td>
                        <td>{Product.name}</td>
                        <td>{Product.price}</td>
                        <td>
                            <Link to={`/products/${Product.id}`}  > chitiet</Link>
                        </td>
                        <td>
                           <button onClick={() => handleDelete(Product.id)} >Delete</button>
                        </td>
                        <td>
                            <button>Update</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        </div>
    );
    

}

export default ListProduct;