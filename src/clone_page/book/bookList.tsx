/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteBook, getBooks } from '../../client_api/book';

type BOOK= {
    id: number,
    name : string,
    price: number,
    danhmuc : string


};

export default function BookList() {
    const [Books, setBooks] = useState<BOOK[]>([]);

    const handleGetBooks = async () => {
        const response = await getBooks();
        setBooks(response.data);
    };

    useEffect(() => {
        handleGetBooks();
    }, []);
    const onhendleDelete = async (id : number | string) => {
        const response = await deleteBook(id);
        if(response.status === 200){
            handleGetBooks();
        }
    }

    return (
        <div>
            <div><Link to={'/books/create'}><button>
                Tạo mới book
            </button></Link></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>name</td>
                            <td>price</td>
                            <td>category</td>
                            <td>sửa</td>
                            <td>xóa</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Books.map(books => (
                                <tr key={books.id}>
                                    <td>{books.id}</td>
                                    <td>{books.name}</td>
                                    <td>{books.price}</td>
                                    <td>{books.danhmuc}</td>
                                    <td><Link to={`/books/edit/${books.id}`}> Sửa</Link></td>
                                    <td>

                                <button onClick={() => onhendleDelete(books.id)}>
                                    delete
                                </button>
                              
                            </td>
                                    
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};
