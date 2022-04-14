import { 
    TASK,
    ADD, 
    REMOVE, 
    DONE,
} from "./constants";


export const addTask = ({ id, text }, taskId) => ({
    type: ADD + TASK,
    taskId: id || taskId,
    text,
    checked: false,
})

export const doneTask = ({ id, text, checked }) => ({
    type: DONE + TASK,
    taskId: id,
    text,
    checked: !checked,
})

export const removeTask = (taskId) => ({
    type: REMOVE + TASK,
    taskId,
})
