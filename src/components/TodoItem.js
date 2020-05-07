import React, {Component} from 'react';

export default class TodoItem extends Component {
    render(){
        const {item, handleDelete, handleEdit} = this.props;
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{item}</h6>
                <div className="todo-icon">
                    <button type="button" 
                        className="btn text-success"
                        onClick={handleEdit}
                        >
                        edit
                    </button>
                    <button type="button" 
                        className="btn text-danger"
                        onClick={handleDelete}
                        >
                        delete
                    </button>
                </div>
            </li>
        );
    }
}