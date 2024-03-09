import React from "react";
import Item2 from "./Item2";
import routes from "./routes";
import axios from "axios";

export default class TodoBox2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        axios.get(routes.tasksPath())
            .then((list) => {
                this.setState(list);
            });
    }

    add = (e) => {
        e.preventDefault();
        const {list} = this.state;
        const task = {
            id: list.length + 1,
            text: e.currentTarget.querySelector('input').value,
            state: 'active',
        };
        axios.post(routes.tasksPath(), task)
            .then(() => {
                list.push(task);
                this.setState(list);
            });
    };

    switch = (id) => {
        const {list} = this.state;

        let task = null;
        for (const index in list){
            if (list[index].id === id){
                task = list[index];
            }
        }

        const isActive = task.state === 'active';
        const route = isActive ? routes.finishTaskPath(task.id) : routes.activateTaskPath(task.id);
        task.state = isActive ? 'finished' : 'active';
        axios.patch(route, task)
            .then(() => {
                this.setState(list);
            });
    };

    renderItems = () => {
        const {list} = this.state;
        if (!list.length){
            return null;
        }
        const arrActive = [];
        const arrFinished = [];
        for (const index in list){
            const task = list[index];
            if (task.state === 'active'){
                arrActive.unshift(<Item2 data={task} swt={this.switch} />);
            }else{
                arrFinished.unshift(<Item2 data={task} swt={this.switch} />);
            }
        }
        return (
            <>
                <div className="todo-active-tasks">
                    {arrActive}
                </div>
                <div className="todo-finished-tasks">
                    {arrFinished}
                </div>
            </>
        );
    };

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.add}>
                        <div className="d-flex">
                            <input type="text" required="" className="form-control me-3" placeholder="I am going..." />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>
                {this.renderItems()}
            </div>
        );
    }
}