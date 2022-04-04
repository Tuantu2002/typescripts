import React from "react";

function TableStudent(){
    return(

  <div  >
       <table className="classtable" >
    <thead className="header-table">
 <tr>
     <th  >Tên</th>
     <th>Tuổi</th>
     <th> sdt</th>
     <th> email</th>
     <th>anh dai dien</th>
     <th>Xóa</th>
 </tr>

    </thead>
  <tbody className="body-table">
  <tr>
      <td>Hạnh</td>
      <td>1</td>
      <td>11223344</td>
      <td>hanh@gamil.com</td>
      <td><img src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"  width="100" alt="" /></td>
      <td><button className="remove">Xóa</button></td>


      
  </tr>
  <tr>
      <td>2</td>
      <td>hạnh</td>
      <td>2A</td>
      <td>Lý</td>
      <td>3</td>

      
  </tr>

  </tbody>

   </table>
  </div>



    );
}
export default TableStudent;