import LunchTitle from './lunch/lunchtitle'
import LunchmenuAdd from './lunch/lunchmenuAdd'
import LunchmenuList from './lunch/lunchmenuList'
import LunchmenuChoice from './lunch/lunchmenuChoice'



const Gamelunch = () => {
    return (
        <div className="lunch__wrap">
            <LunchTitle >Lunch menu</LunchTitle>
            <LunchmenuAdd />
            <LunchmenuChoice />
            <LunchmenuList />
        </div>
      );
}

export default Gamelunch;