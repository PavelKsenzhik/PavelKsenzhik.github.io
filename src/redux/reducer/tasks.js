import produce from 'immer';

import { 
    TASK,
    ADD, 
    DONE,
    DEL,
} from "../constants";

const initialState = {
    active: {},
    done: {},
}


export default produce((draft = initialState, action) => {
    const { type, taskId, checked, text, date } = action;
    switch (type) {
        case ADD + TASK: {
            draft.active[taskId] = { 
                id: taskId,
                text,
                date,
                checked,
            }
            delete draft.done[taskId] 
            break;
        }
        case DONE + TASK: {        
            draft.done[taskId] = {
                id: taskId,
                text,
                date,
                checked,
            }
            delete draft.active[taskId] 
            break; 
        }
        case DEL + TASK: {
            delete draft.active[taskId] 
            delete draft.done[taskId]
            break;
        }
        default:
            return draft;
    }
})
