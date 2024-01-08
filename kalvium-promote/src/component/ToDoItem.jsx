import React from "react";

class TodoItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        // destructuring
        // accessing the data inside of an array/objects indivisually
        let {e, index, updateItem, deleteItem} = this.props;
        return (
            <>
                <div>
                    <input type="text" 
                    onChange={(e)=>{
                        updateItem(e.target.value, index)
                    }} 
                    value={e}/>
                    <button 
                    onClick={()=>{
                        deleteItem(index)
                    }}>Delete Item</button>
                </div>
            </>
        )
    }
}

export default TodoItem;