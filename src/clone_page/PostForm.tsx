/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createPost, getPost, updatePost } from '../client_api/post';
import { useNavigate , useParams} from 'react-router-dom';

export type  POST_TYPE = {
    title: string,
    desc: string,
    author : string
     category : string,
     thumnail : string,
       status : number
}
export default function PostForm() {
    const navigate = useNavigate();
    const {id} = useParams();
    // react hook form
    // Khai báo biến register để đăng ký cho các
    // thành phần trong form
    // useForm cần truyền vào giá trị mặc định của form
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues: {
            title: '',
            desc: '',
            author : '',
            category : '',
            thumnail : '',
            status : 0
        }
    });


    const onSubmit: SubmitHandler<POST_TYPE> = (data) => {
      

        const submmitData = {
            ...data,
            status: +data.status
        };
        if (id) {
            return  handleUpdatePost(submmitData);
         
        }
      
        return  handleCreatePost(submmitData);
    
    };
    const   handleCreatePost = async (data : POST_TYPE) => {
        const response = await createPost(data);
        if (response.status === 201) {
            navigate('/posts');
        }
    }
      const   handleUpdatePost = async (data : POST_TYPE)   => {
        const response = await updatePost(id, data);
        if (response.status === 200) {
            navigate('/posts');
        }
    }

const handleSubmitPost =  async (data: POST_TYPE) => {
    const response = await createPost(data);
    if (response.status === 201) {
        navigate('/posts');
    }
}
   const handeleGetPost = async (id:string) =>{
       const response = await getPost(id);
       if (response.status === 200) {
           reset ({
            ...response.data,
           status :`${response.data.status}`
          
           }
            );
        
       }
   }
    

    useEffect (() => {
if (id) {
     handeleGetPost(id);
//      reset(data);
 }

    } , [id]);

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
               <label htmlFor="">Tiêu đề</label>
               <input
                type="text"
                placeholder='Tiêu đề'
                {...register(
                    'title',
                    {
                        required: {value: true, message: 'Bắt buộc'},
                    }
                )}
            />
           
            <div>{errors.title?.message }</div>
           </div>
            <div>
                <label htmlFor="">Mô tả</label>
                <input
                type="text"
                placeholder='Mô tả'
                {...register(
                    'desc',
                    {
                        required: true
                    }
                )}
            /> 
            </div>
           <div>
               <label htmlFor="">author</label>
               <input type="text" id=""  placeholder='author'
             {...register('author')}
            />
           </div>
           <div>
               <label htmlFor="">Category</label>
               <input type="text"  id=" " placeholder='category'
            {...register('category')} />
           </div>
           <div>
               <label htmlFor="">Thumbnail</label>
               <input type="text"  id=" " placeholder='thumnail'
            {...register('thumnail')} />
           </div>
           <div>
               <label htmlFor=""> Status</label>
               <input type="radio" {...register('status')} value ={0} />không kích hoạt
               <input type="radio" {...register('status')} value = {1} /> kích hoạt
           </div>
            <button>Submit</button>
        </form>
    </div>
  )
};