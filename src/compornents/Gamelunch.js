


function  Gamelunch() {


    return (
        <div className="lunch__wrap">
           <div className="title">
            <h1>Lunch Menu</h1>
            </div>
            <div className="add_lunchmenu">
            <form>
                <input type="text" name="name" />
                <button type="submit">추가</button>
            </form>
            </div>
            <div className="lunch-select">
            <button type="button">메뉴 고르기</button>
            </div>
            <div className="lunch-wrap">
            <ul id="lunch-list"></ul>
            </div>
            <div className="lunch-all">
                 <ul id="lunch-list"></ul>
            </div>
        </div>
      );
}

export default Gamelunch;