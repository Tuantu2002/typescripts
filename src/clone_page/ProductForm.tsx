import React, { useState } from "react";
import { createProduct } from "../client_api/product";
import { useNavigate } from "react-router-dom";
function ProductForm (){

    const navigate = useNavigate();

    const [nameValue , setNamevalue] = useState<string>('');
    const [ageValue , setAgevalue] = useState<string>('');
    const [priceValue , setPricevalue] = useState<string>('');
    const [message , setMessage] = useState<string[]>([]);

    const handleSubmit =  async() =>{

        // validate : bắt buộc nhập , tên >6 . tuôi <5 , giá >=1 

        const onValidate = (data : {name :string , age: number , price : number}) => {
const validateMessage = [];
                if(!data.name){
                 validateMessage.push('tên không được để chống')
                }else if(data.name.length <6){
               validateMessage.push('tên không được nhỏ hơn 6 kí tự')
                }
                if(!data.age){
                    validateMessage.push('tuổi không được để chống')
                   }
                   if(!data.price){
                    validateMessage.push('giá không được để chống')
                   }
                   
                 return validateMessage;

        }
        const submitData = {
            name : nameValue,
            age : +ageValue,
            price : +priceValue
        };
   const validate =  onValidate(submitData);

   if(validate.length === 0) {

      message.length &&  setMessage([]);

     const response = await  createProduct(submitData);
    if(response.status === 201){
navigate('/products');
    }
   }
   else {
       setMessage(validate);
   }
    };


return (

    <div>
        <h1>Thêm mới sản phẩm</h1>
        <form action="">
            <div>
                <label htmlFor="name">Tên sản phẩm</label>
                <input type="text" id="name " onChange={(event)=> setNamevalue(event.target.value)}  />
            </div>
            <div>
                <label htmlFor="age">Tuổi</label>
                <input type="number" id="age "  onChange={(event) => setAgevalue(event.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Giá sản phẩm</label>
                <input type="number" id="price " onChange={ (event) => setPricevalue(event.target.value)} />
            </div>

            <div>
                <button onClick={() => handleSubmit ()} type="button">Submit</button>
            </div>
        </form>
        {
            message.length >0 
            ?<ul>
                {
                    message.map((message, index) => (
                        <li key={index }>{message}</li>
                    ))
                }

            </ul>
            :null
        }
    </div>
);

};
export default ProductForm;