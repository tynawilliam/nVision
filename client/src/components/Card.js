import React, { createContext, useState } from 'react'
import TaskCard from './TaskCard';
import BoxTarget from './BoxTarget';

export const CardContext = createContext({
    markAsDone: null,
})

const Card = () => {
    const [taskList, setTaskList] = useState([
        {
            _id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            category: 'Chores',
            title: 'Buy dog food',
            details: "Gotta make my woof woof happy"
        },
        {
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Shopping',
			title: 'Buy Milk',
			details: 'Remember, remember the lactose free aisle... 🥛',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Renew Gym Membership',
			details: 'Gotta keep the muscles happy! 💪🏻',
		},

    ]);

    const markAsDone = _id => {
        const task = taskList.filter((task, i) => task._id === _id)
        task[0].status = 'done';
        setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
    }

    return (
        <CardContext.Provider value={{ markAsDone }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <div>
                {taskList
                    .filter((task, i) => task.status === 'wip')
                    .map((task, i) => (
                        <TaskCard
                                key={task._id.toString()}
                                _id={task._id}
                                category={task.category}
                                title={task.title}
                                details={task.details}
                            />
                ))}
                </div>
                <BoxTarget>
                    {taskList
                    .filter((task, i) => task.status === 'done')
                    .map((task, i) => (
                        <TaskCard
                            key={task._id.toString()}
                            _id={task._id}
                            category={task.category}
                            title={task.title}
                            details={task.details}
                        />
                    ))}
                </BoxTarget>
            </div>
        </CardContext.Provider>
    )
}

export default Card
