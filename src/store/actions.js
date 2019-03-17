import * as mutations from './mutations-type';

export const saveNote = function ({commit, dispatch, state}) {
    commit(mutations.TOUCH_LAST_SAVED);
    if (state.note.id === null) {
        commit(mutations.SET_CURRENT_NOTE_ID, Date.now());
        commit(mutations.PREPEND_NOTES, state.note)
    }

    dispatch('storeNotes');
};


export const storeNotes = function ({state}) {
    localStorage.setItem('notes', JSON.stringify(state.notes));
};

export const openNote = function ({commit}, note) {
    commit(mutations.SET_CURRENT_NOTE,note);
};

export const deleteNote = ({ commit, dispatch, state }, id) => {
    if (id === state.note.id) {
        dispatch('clearCurrentNote');
    }

    commit(mutations.DELETE_NOTE, id);

    dispatch('storeNotes');
}


export const startSaveTimeout = function ({commit, dispatch, state}) {
    if (state.savedTimeout !== null) {
        return
    }
    commit(mutations.SET_SAVE_TIMEOUT, {
        callback() {
            dispatch('saveNote');
            dispatch('stopSaveTimeout')
        },
        delay: 1000
    });
};
export const stopSaveTimeout = function ({commit, dispatch, state}) {
    commit(mutations.CLEAR_SAVE_TIMEOUT);
};

export const clearCurrentNote = ({ commit, dispatch }) => {
    dispatch('stopSaveTimeout');
    commit(mutations.SET_CURRENT_NOTE, null);
};