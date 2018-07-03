
class User {
  constructor(){
    this.allNotes = []
  }

  createNote(title, content){
    // let noteId = this.allNotes.length
    // let newNote = new Note(title, content, noteId);
    let newNote = new Note(title, content);
    this.allNotes.push(newNote);

    let newNoteLoc = document.getElementById('note-list');
    newNoteLoc.innerHTML += newNote.el();
  }


}
