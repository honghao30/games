import React, { useState } from 'react';

function  LunchmenuAdd() {

    // const [menus,setMenu] = useState('');
    // const [newMenu,setNewMenu] = useState('');

    const handleClickSubmit = () => {
        console.log('클릭했니');        
    }
    const handleClickClear = (e) =>{
        document.querySelector('.menuinputtext').value = '';
        document.querySelector('.btn-dell').style.display = 'none';
    }
    return (
        <div className="add_lunchmenu">
            <form>
                <input type="text" 
                name="name"
                //value={newMenu}
                //onChange={({target}) => setNewMenu(target.value)}
                placeholder="메뉴 추가"
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
                    onClick={() => handleClickSubmit()}>
                    추가
                </button>
            </form>
        </div>
      );
}

export default LunchmenuAdd;