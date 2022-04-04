import React from "react";
import { Route , Routes } from "react-router-dom";
import ClientLayoutClone from "./clone_page/clientLayout/ClientLayout_Clone";
import Dashboard from "./clone_page/Dashboard";
import PostDetail from "./clone_page/PostDetail";
import PostForm from "./clone_page/PostForm";
import PostList from "./clone_page/PostList";
import ProductsDetail from "./clone_page/ProductDetail";
import ProductForm from "./clone_page/ProductForm";
import ProductsList from "./clone_page/ProductList";
import HomePage from "./clone_page/homepage";
import BookList from "./clone_page/book/bookList";
import BookForm from "./clone_page/book/bookForm";
import CategoryForm from "./clone_page/category/categoryForm";
import CategoryList from "./clone_page/category/categoryList";


function Appclone(){
  return (
    <div>
            <h1>App clone</h1>
            <Routes>
                {/* <Route path={'/'} element={< Dashboard />} />
                <Route path={'/product'} element={<ProductsList/>}/>
                <Route path={'/product/:id'} element={<ProductsDetail/>} /> */}
  
               <Route path={'/'} element ={<ClientLayoutClone/>}>
               <Route index element={<Dashboard/>} />
                <Route path={'products'} >
                  <Route index element ={<ProductsList/>} />
                  <Route path = {':id'} element= {<ProductsDetail/> } />
                  <Route path ={'create'} element = {<ProductForm/>} />
                  <Route path={'edit/:id'} element = {<ProductForm />}  />
                </Route>
                <Route path={'posts'}>
                        <Route index element={<PostList />} />
                        <Route path={':id'} element={<PostDetail />} />
                        <Route path={'create'} element={<PostForm />} />
                        <Route path={'edit/:id'} element={<PostForm />} />
                    </Route>
                    <Route path={'category'}>
                        <Route index element={<CategoryList />} />
                        <Route path={'create'} element={<CategoryForm />} />
                        <Route path={'edit/:id'} element={<CategoryForm />} />
                    </Route>
                    <Route path={'books'}>
                        <Route index element={<BookList />} />
                        <Route path={'create'} element={<BookForm />} />
                        <Route path={'edit/:id'} element={<BookForm />} />
                    </Route>
               </Route>
                
            
                
            </Routes>


        </div>
  )
}
export default Appclone;
