import React, { useState } from 'react';

function  LunchmenuAdd() {
    const lunchData = ['김치지깨','김치덮밥'];
    const [menu, setMenu] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [newMenu,setNewMenu] = useState('');

    console.log(lunchData)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let NewMenuItem = menu;
        console.log('새메뉴',NewMenuItem)

        setNewMenu(NewMenuItem)

        console.log(newMenu)

        setErrorMessage("");
        
        if (menu === "") {
          setErrorMessage("메뉴를 입력하세요.");          
        }        

        this.setState({})
    }
    const handleInputChange = (e) => {
        setMenu(e.target.value);   
        console.log(e.target.value)      
    }
    const handleClickClear = (e) =>{
        e.target.value = '';        
        document.querySelector('.btn-dell').style.display = 'none';
    }
    return (
        <div className="add_lunchmenu">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name"
                //value={newMenu}
                onChange={handleInputChange}                
                placeholder="메뉴 추가"
                value ={menu}                
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