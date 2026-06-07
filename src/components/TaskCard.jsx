import { useAuth } from '../context/authContext';
import axios from 'axios';

// import React from 'react'

const TaskCard = ({task,onDelete, onToggle, onEdit}) => {
     const { token } = useAuth();

     const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onDelete(task._id);
    } catch (err) {
      console.log(err);
    }
  };

    const handleToggle = async () => {
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${task._id}/toggle`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onToggle(res.data);
    } catch (err) {
      console.log(err);
    }
  };

   const getBadge = () => {
    if (task.status === 'completed') return 'success';
    if (task.status === 'incomplete') return 'danger';
    return 'warning';
  };

  return (
   <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{task.title}</h5>
          <span className={`badge bg-${getBadge()}`}>
            {task.status}
          </span>
        </div>

        <p className="card-text text-muted mt-2">{task.description}</p>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={handleToggle}
          >
            Toggle
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard