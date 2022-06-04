import { 
    TASK,
    ADD, 
    DEL, 
    DONE,
    RESTORE,
} from "./constants";


export const addTask = ({ id, text}, taskId, date) => ({
    type: ADD + TASK,
    taskId: id || taskId,
    text,
    date,
    checked: false,
})

export const doneTask = ({ id, text, checked, date }) => ({
    type: DONE + TASK,
    taskId: id,
    text,
    date,
    checked: !checked,
})

export const delTask = ({ id, text, checked, date }) => ({
    type: DEL + TASK,
    taskId: id,
    text,
    date,
    checked: checked,
})


export const restoreTask = ({ id, text, checked, date }) => ({
    type: RESTORE + TASK,
    taskId: id,
    text,
    date,
    checked: checked,
})
