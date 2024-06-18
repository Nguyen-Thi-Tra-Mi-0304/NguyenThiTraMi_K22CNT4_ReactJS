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

  const nttmHandleAddNew = (param) =>{
    setNttmCateforyIsForm(param);
  }

  const nttmHandleCateforyCloseForm = (param) =>{
    setNttmCateforyIsForm(param);
  }

  const nttmHandleCategorySubmit = (param) =>{
    let id = nttmCategories[nttmCategories.length-1].nttmId;
    console.log("Mã",id);
    param.nttmId = id + 1;
    nttmCategories.push(param);
    setNttmCategories((prev)=>{
      return[...prev];
    })
    setNttmCateforyIsForm(false);
  }

  return (
    <div className="container my-3 border">
      <h1 className='text-center'>NGUYỄN THỊ TRÀ MI - Call API</h1>

      <NttmCategoryList renderNttmCategory = {nttmCategories}
                        onAddNew={nttmHandleAddNew} />
      <hr/>
      {
        nttmCateforyIsFrom===true?
        <NttmCategoryForm 
        onCloseForm = {nttmHandleCateforyCloseForm} 
        onCategorySubmit = {nttmHandleCategorySubmit}       
        />:""
      }
    </div>
  );
}

export default NttmApp;
