
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCategorys } from '../../client_api/category';

type CATEGORY= {
  id : number,
    danhmuc : string


};

export default function CategoryList() {
    const [Category, setCategory] = useState<CATEGORY[]>([]);

    const handleGetCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    useEffect(() => {
        handleGetCategory();
    }, []);

    return (
        <div>
            <div><Link to={'/category/create'}><button>
                Tạo mới category
            </button></Link></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>category</td>
                            <td>sửa</td>
                            <td>xóa</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Category.map(category => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.danhmuc}</td>
                                    <td><Link to={`/category/edit/${category.id}`}> Sửa</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};