
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBook, updateBook } from "../../client_api/book";
import { createCategory, getCategory, updateCategory } from "../../client_api/category";



export type CATEGORY_TYPE = {
   danhmuc : string,

}


export default function  CategoryForm ( ){
   const navigate = useNavigate();
   const {id} = useParams();
   const {
       register,
       handleSubmit,
       formState: {errors},
       reset
   }= useForm({
       defaultValues: {
          danhmuc : '',
     
       }
   });


   const onSubmit: SubmitHandler<CATEGORY_TYPE> = (data) => {
         const submmitData = {
          ...data,
         }
         if(id){
             return handleUpdateBook(submmitData);
         }
         return handleCreateCategory(submmitData);
   }

   const handleCreateCategory = async (data : CATEGORY_TYPE) => {
       const response = await createCategory(data);
       if (response.status === 201) {
        navigate('/category');
    }
   }   
   const   handleUpdateBook = async (data : CATEGORY_TYPE)   => {
    const response = await updateCategory(id, data);
    if (response.status === 200) {
        navigate('/category');
    }
}

const handeleCategory = async (id:string) =>{
    const response = await getCategory(id);
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
        handeleCategory(id)
     }
 } , [id]);
   return (
       <form onSubmit={handleSubmit(onSubmit)}>
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
