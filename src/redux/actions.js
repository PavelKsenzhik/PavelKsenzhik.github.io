import { 
    TASK,
    ADD, 
    DEL, 
    DONE,
} from "./constants";


export const addTask = ({ id, text }, taskId, date) => ({
    type: ADD + TASK,
    taskId: id || taskId,
    text,
    date,
    checked: false,
})

export const doneTask = ({ id, text, checked }) => ({
    type: DONE + TASK,
    taskId: id,
    text,
    checked: !checked,
})

export const delTask = ({ id, text, checked }) => ({
    type: DEL + TASK,
    taskId: id,
    text,
    checked: !checked,
})
