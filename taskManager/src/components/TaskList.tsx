import { useState } from "react";

enum IsCompleted {
  low = "low",
  high = "high",
  medium = "medium",
}

const TaskList = () => {
  const [taskForm, setTaskForm] = useState<{
    name: string;
    description: string;
    priority: string;
    completed: boolean;
  }>({
    name: "",
    description: "",
    priority: IsCompleted.low,
    completed: false,
  });
  const [taskList, setTaskList] = useState<
    {
      name: string;
      description: string;
      priority: string;
      completed: boolean;
    }[]
  >([]);
  const [filterTask, setFilterTask] = useState<string>("");

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList([...taskList, taskForm]);
    setTaskForm({
      name: "",
      description: "",
      priority: IsCompleted.low,
      completed: false,
    });
  }

  //   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  //   const { name, value, type, checked } = e.target;

  //   setTaskForm((prevTaskForm) => ({
  //     ...prevTaskForm,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // }

  function handleFilter() {
    return taskList.filter((ele) => {
      if (filterTask === "completed") {
        return ele.completed === true;
      } else if (filterTask === "pending") {
        return ele.completed == false;
      } else {
        return true;
      }
    });
  }

  return (
    <div className="allDiv">
      <div className="col1">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            value={taskForm.name}
            onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
          />
          <label htmlFor="description">Description: </label>
          <input
            name="description"
            value={taskForm.description}
            onChange={(e) =>
              setTaskForm({ ...taskForm, description: e.target.value })
            }
          />
          <label htmlFor="priority">Priority: </label>
          <select
            value={taskForm.priority}
            onChange={(e) =>
              setTaskForm({ ...taskForm, priority: e.target.value })
            }
          >
            <option value={IsCompleted.low}>Low</option>
            <option value={IsCompleted.medium}>Medium</option>
            <option value={IsCompleted.high}>High</option>
          </select>
          <button type="submit">Add task</button>
        </form>
      </div>
      <div className="col2">
        <div className="filterUnit">
          <select
            value={filterTask}
            onChange={(e) => setFilterTask(e.target.value)}
          >
            <option value="all">All tasks</option>
            <option value="completed">Completed tasks</option>
            <option value="pending">Pending tasks</option>
          </select>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "20px",
          }}
        >
          <div className="taskList" style={{ border: "none" }}>
            <h4>status</h4>
            <h4>Task name</h4>
            <h4>Description</h4>
            <h4>Priority</h4>
          </div>
          {handleFilter().map((ele, index) => (
            <div key={index} className="taskList">
              <input
                type="checkbox"
                checked={ele.completed}
                onChange={() => {
                  setTaskList(
                    taskList.map((task) =>
                      task.name === ele.name
                        ? { ...task, completed: !task.completed }
                        : task
                    )
                  );
                }}
              />
              <h3>{ele.name}</h3>
              <p>{ele.description}</p>
              <p
                className={
                  ele.priority === "low"
                    ? "lowTag"
                    : ele.priority === "high"
                    ? "highTag"
                    : ele.priority === "medium"
                    ? "medTag"
                    : "none"
                }
              >
                {ele.priority}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
