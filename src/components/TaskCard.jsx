import { useAuth } from '../context/AuthContext';
import axios from 'axios';

import React from 'react'

const TaskCard = ({task,onDelete, onToggle, onEdit}) => {
     const { token } = useAuth();

     const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5002/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onDelete(task._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>TaskCard</div>
  )
}

export default TaskCard