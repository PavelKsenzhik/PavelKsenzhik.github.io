import produce from 'immer';

import { 
    TASK,
    ADD, 
    DONE,
    DEL,
    RESTORE,
} from "../constants";

const initialState = {
    active: {},
    done: {},
    bin: {},
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
            draft.bin[taskId] = {
                id: taskId,
                text,
                date,
                checked,
            }
            delete draft.active[taskId] 
            delete draft.done[taskId]
            break;
        }
        case RESTORE + TASK: {
            if(checked) {
                draft.done[taskId] = {
                    id: taskId,
                    text,
                    date,
                    checked,
                }
            } else {
                draft.active[taskId] = {
                    id: taskId,
                    text,
                    date,
                    checked,
                }
            }

            delete draft.bin[taskId]
            break;
        }
        default:
            return draft;
    }
})
