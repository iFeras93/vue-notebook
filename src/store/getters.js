import moment from 'moment'
export const note = (state) => {
    return state.note;
};

export const notes = function (state) {
    return state.notes.sort((a, b) => {
        return a['lastSaved'] < b['lastSaved']
    });
}

export const wordsCount = function (state) {
    if (!state.note.body || state.note.body.trim() === '') {
        return 0;
    }
    return state.note.body.trim().split(' ').length;
};

export const lastSaved = state => {
    if (!state.note.lastSaved) {
        return 'Never'
    }

    return moment(state.note.lastSaved).calendar()
}