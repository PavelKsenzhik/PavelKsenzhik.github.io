import produce from 'immer';

import { 
    TASK,
    ADD, 
    REMOVE, 
    DONE,
} from "../constants";
import { arrToMap } from "../utils";

const initialState = {
    active: {},
    done: {},
}


export default produce((draft = initialState, action) => {
    const { type, taskId, checked, text } = action;
    switch (type) {
        case ADD + TASK: {
            draft.active[taskId] = { 
                id: taskId,
                text,
                checked,
            }
            delete draft.done[taskId] 
            break;
        }
        case DONE + TASK: {        
            draft.done[taskId] = {
                id: taskId,
                text,
                checked,
            }
            delete draft.active[taskId] 
            break; 
        }

        default:
            return draft;
    }
})
