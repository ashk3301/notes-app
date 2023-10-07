
import Groups from './Groups';
// import createNotes from './createNotes';

import './Sidebar.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>


function Sidebar(){
    return(
        <div className='Sidebar'>
            <div className='logo'>Pocket Notes</div>
            <div><button id='create'>+ Create Notes group</button></div>
            <div className='Groups'>
                <Groups id="1001" title={'Cuvette Notes'}/>
                <Groups id="1002" title={'My personal grp'}/>
                <Groups id="1003" title={'Javascript grp'}/>
                <Groups id="1004" title={'HTML grp'}/>
                <Groups id="1004" title={'CSS Notes'}/>
                <Groups id="1005" title={'SQL Notes'}/>
                <Groups id="1006" title={'Python Notes'}/>
            </div>
            <div className='newGroup'>
                <p>Create New Notes group</p>
                <label>Group Name</label>
                <input placeholder='Enter your group name...'></input>
                <div className='chooseColour'>
                    <div><label>Choose colour</label></div>
                    <div className='colours'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <button className='createButton'>Create</button>
            </div>
        </div>
    )
}
export default Sidebar


