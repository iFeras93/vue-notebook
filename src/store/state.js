export default {
    note: {id: null, title: null, body: null, lastSaved: null},
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    savedTimeout: null
}