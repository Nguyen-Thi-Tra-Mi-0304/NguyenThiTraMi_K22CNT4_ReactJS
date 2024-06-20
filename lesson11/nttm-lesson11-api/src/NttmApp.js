import { useEffect, useState } from 'react';
import './App.css';
import NttmCategoryList from './components/NttmCategoryList';
import axios from './api/NttmApi';
import NttmCategoryForm from './components/NttmCategoryForm';

function NttmApp() {
  // Lấy dữ liệu từ api
  const [nttmCategories,setNttmCategories] = useState([]);

  const getCategories = async () => {
    try {
      const nttmCateResponse = await axios.get("NttmCategory");
      setNttmCategories(nttmCateResponse.data);
    } catch (error) {
      console.log("Lỗi", error);
    }
  }

  useEffect(()=>{
    getCategories();
    console.log("nttmCategories:",nttmCategories);
  },[])

  // trạng thái form 
  const [nttmCateforyIsFrom, setNttmCateforyIsForm] = useState(false);
  // Dữ liệu form: add/edit 
  let nttmCategoryInit = {
    nttmId:0,
    nttmCategoryName:"",
    nttmCategoryStatus:true
  }
  const [nttmCategoryEdit, setNttmCategoryEdit] = useState(nttmCategoryInit);


  const nttmHandleAddNew = (param) =>{
    setNttmCateforyIsForm(param);
  }

  const nttmHandleCateforyCloseForm = (param) =>{
    setNttmCateforyIsForm(param);
  }

  const nttmHandleCategorySubmit = (param) =>{
    let id = nttmCategories[nttmCategories.length-1].nttmId;
    console.log("Mã",id);
    param.nttmId = parseInt(id) + 1;
    nttmCategories.push(param);
    setNttmCategories((prev)=>{
      return[...prev];
    })
    setNttmCateforyIsForm(false);
  }

  // Hàm sử lý sự kiện xóa một đối tượng Category
  const nttmHandleDelete = (nttmId)=>{
    console.log("App-Delete-nttmId: ", nttmId);
    // xóa trên api 
    const nttmResponse = axios.delete(`NttmCategory/${nttmId}`);
    console.log("nttmResponse-Delete",nttmResponse);
    let nttmDelete = nttmCategories.filter(x=>x.nttmId !== nttmId);
    setNttmCategories(nttmDelete);
    console.log("Delete: ", nttmDelete);
  }

  // Sửa Category 
  const nttmHandleEdit = (nttmCategory) =>{
    setNttmCategoryEdit(nttmCategory)
    setNttmCateforyIsForm(true);
  }

  return (
    <div className="container my-3 border">
      <h1 className='text-center'>NGUYỄN THỊ TRÀ MI - Call API</h1>

      <NttmCategoryList renderNttmCategory = {nttmCategories}
                        onAddNew={nttmHandleAddNew}
                        onNttmDelete = {nttmHandleDelete} 
                        onNttmEdit = {nttmHandleEdit}/>
      <hr/>
      {
        nttmCateforyIsFrom===true?
        <NttmCategoryForm 
        renderNttmCategory = {nttmCategoryEdit}
        onCloseForm = {nttmHandleCateforyCloseForm} 
        onCategorySubmit = {nttmHandleCategorySubmit}       
        />:""
      }
    </div>
  );
}
export default NttmApp;
