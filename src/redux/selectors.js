import { createSelector } from "reselect";

const activeTasksSelector = (state) => state.tasks.active;
const doneTasksSelector = (state) => state.tasks.done;

export const activeTasksIdSelector = createSelector(
    activeTasksSelector,
    Object.keys
);
export const doneTasksIdSelector = createSelector(
    doneTasksSelector,
    Object.keys
)


 
export const activeTaskSelector = (state, { id }) => activeTasksSelector(state)[id]; 
export const doneTaskSelector = (state, { id }) => doneTasksSelector(state)[id]