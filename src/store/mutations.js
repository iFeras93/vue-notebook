import * as types from './mutations-type';

export default {
    [types.SET_CURRENT_NOTE_ID](state, id) {
        state.note.id = id;
    },
    [types.PREPEND_NOTES](state, note) {
        state.notes.unshift(note);
    },
    [types.TOUCH_LAST_SAVED](state) {
        state.note.lastSaved = Date.now()
    },
    [types.SET_SAVE_TIMEOUT](state, {callback, delay}) {
        state.savedTimeout = setTimeout(callback, delay)
    },
    [types.CLEAR_SAVE_TIMEOUT](state) {
        clearInterval(state.savedTimeout);
        state.savedTimeout = null;
    }, [types.SET_CURRENT_NOTE](state, note) {
        if (note === null) {
            state.note={id: null, title: null, body: null, lastSaved: null};
            return
        }
        state.note = note
    }, [types.DELETE_NOTE](state, id) {
        state.notes = state.notes.filter((note) => {
            return note.id !== id
        })
    }
}