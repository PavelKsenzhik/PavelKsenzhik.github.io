import { createSelector } from "reselect";

export const activeTasksSelector = (state) => state.tasks.active;
export const doneTasksSelector = (state) => state.tasks.done;
export const binTasksSelector = (state) => state.tasks.bin;

export const activeTasksListSelector = createSelector(
    activeTasksSelector,
    (tasks) => {
        return Object.values(tasks).sort((a, b) => a.date > b.date ? 1 : -1)
    }
)
export const doneTasksListSelector = createSelector(
    doneTasksSelector,
    (tasks) => { 
        return Object.values(tasks).sort((a, b) => a.date > b.date ? 1 : -1)
    }
)

export const binTasksListSelector = createSelector(
    binTasksSelector,
    (tasks) => {
        return Object.values(tasks).sort((a, b) => a.date > b.date ? 1 : -1)
    }
)

export const activeTaskSelector = (state, { id }) => activeTasksSelector(state)[id]; 
export const doneTaskSelector = (state, { id }) => doneTasksSelector(state)[id]