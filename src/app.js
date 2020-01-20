
const tasks = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      let newTask = {name: action.data, id: +new Date};
      return state.concat([newTask]);
    default:
      return state || [];
  }
};

//add redux
const store = Redux.createStore(Redux.combineReducers({
  tasks
}));

//watcher
store.subscribe(() => {
  console.log(store.getState());
});

let obj = {
  type: 'ADD_TASK',
  data: 'Task 1'
};

//send to redux
store.dispatch(obj);

const App = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  );
};

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <h1>Task List</h1>
        <ul>
          {this.props.tasks.map((task, i) => <li key={task.id}>{task.name}</li>)}
        </ul>
      </div>
    );
  }
}

//add new task
store.dispatch({
  type: 'ADD_TASK',
  data: 'Task 2'
});

const state  = store.getState();

ReactDOM.render((<App><TaskList tasks={state.tasks} /></App>), document.getElementById('root'));
