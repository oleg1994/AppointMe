import React, { useState, useEffect } from 'react';
import Search from '../../Search/Search'
import Sort from '../../Sort/Sort';

function Hair() {
    const [data, setData] = useState({title:'', info:''})
    function test(){
        setData({title:'Shop', info:'its a place with windows'})
    }
    


    return (
        <div>
            <Search/>
            <Sort/>
            <button style={{height:'100px'}} onClick={test}>TEST</button>
            <div>{data.title}{data.info}</div>
        </div>
    );
}

export default Hair;