import React, { useState } from 'react';

function  LunchmenuAdd() {
    const lunchData = ['김치지깨','김치덮밥'];

    const [menu,setMenu] = useState(lunchData);  
    const [value,setValue] = useState("");  
    //const [value,setValue] = useState("");  


    const [errorMessage, setErrorMessage] = useState("");
    const [newMenu,setNewMenu] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)      
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let NewMenuItem = value;
        
        setNewMenu(NewMenuItem)
        console.log(newMenu)

        setErrorMessage("");        
        if (value === "") {
          setErrorMessage("메뉴를 입력하세요.");         
        }        
        
        setMenu(prev => [...prev, newMenu]);
        
        setValue("");
    }

    const handleClickClear = (e) =>{
        e.target.value = '';        
        document.querySelector('.btn-dell').style.display = 'none';
    }
    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className="add_lunchmenu">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name"
                //value={newMenu}
                onChange={handleInputChange}                
                placeholder="메뉴 추가"
                value ={value}                
                className='menuinputtext'
                 />
                <button 
                    type='button'
                    className='btn-dell hide'
                    onClick={() => handleClickClear()}
                    >
                    X
                 </button>                 

                <button type="submit" 
                    className='submit'
                    onClick={handleSubmit}
                    >
                    추가
                </button>                
                <div style={{ color: "red" }}>{errorMessage}</div>
            </form>
        </div>
      );
}

export default LunchmenuAdd;