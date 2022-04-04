/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBook, updateBook } from "../../client_api/book";



export type BOOK_TYPE = {
   name : string,
   price: string,
   danhmuc : string,

}


export default function  BookForm ( ){
   const navigate = useNavigate();
   const {id} = useParams();
   const {
       register,
       handleSubmit,
       formState: {errors},
       reset
   }= useForm({
       defaultValues: {
          name: '',
          price: '',
          danhmuc : '',
     
       }
   });


   const onSubmit: SubmitHandler<BOOK_TYPE> = (data) => {
         const submmitData = {
          ...data,
         }
         if(id){
             return handleUpdateBook(submmitData);
         }
         return handleCreateBook(submmitData);
   }

   const handleCreateBook = async (data : BOOK_TYPE) => {
       const response = await createBook(data);
       if (response.status === 201) {
        navigate('/books');
    }
   }   
   const   handleUpdateBook = async (data : BOOK_TYPE)   => {
    const response = await updateBook(id, data);
    if (response.status === 200) {
        navigate('/books');
    }
}

const handeleGetBook = async (id:string) =>{
    const response = await getBook(id);
    if (response.status === 200) {
        reset ({
         ...response.data,
        status :`${response.data.status}`
       
        }
         );
     
    }
}
 useEffect(() => {
     if (id) {
         handeleGetBook(id)
     }
 } , [id]);
   return (
       <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label htmlFor="">Ten san pham </label>
          <input type="text"
          {
              ...register(
                  'name',
                  {
                      required : {value: true, message: 'bat buoc'}
                  }
              )
          }
          
          />
          <div>{errors.name?.message}</div>
      </div>

      <div>
          <label htmlFor="">Gia san pham </label>
          <input type="number"
          {
              ...register(
                  'price',
                  {
                      required : {value: true, message: 'bat buoc '}
                  }
              )
          }
          
          />
          <div>{errors.price?.message}</div>
      </div>
      <div>
          <label htmlFor="">danh muc san pham </label>
          <input type="text"
          {
              ...register(
                  'danhmuc',
                  {
                      required : {value: true, message: 'bat buoc nhap tu 6 ki tu'}
                  }
              )
          }
          
          />
          <div>{errors.danhmuc?.message}</div>
      </div>
  <button>Submit</button>
       </form>
   )
}
