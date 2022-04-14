import { createSelector } from "reselect";

export const activeTasksSelector = (state) => state.tasks.active;
export const doneTasksSelector = (state) => state.tasks.done;

export const activeTasksListSelector = createSelector(
    activeTasksSelector,
    (tasks) => {
        return Object.values(tasks)
    }
)
export const doneTasksListSelector = createSelector(
    doneTasksSelector,
    (tasks) => {
        return Object.values(tasks)
    }
)

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