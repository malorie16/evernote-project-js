class Note {

  constructor(title, body, id){
    this.title = title;
    this.body = body;
    this.id = id;
  }

  //displays note preview
  el(){
    return `<div id='noteId'>
              <h3>${this.title}</h3>
              <p>${this.body.substring(0, 5)}...</p><button id='view-note' data-view='viewNote'>View Post</button>
            </div>
            <br>`
  }

  //displays full note
  renderFullNote(){
    return `<div id='fullNoteId'>
              <h3>${this.title}</h3>
              <p>${this.body}</p>
              <button id="editButton" data-edit='editNote'>Edit Note Button</button>
              <button id="deleteButton" data-delete='deleteNote'>Delete Note Button</button>
            </div>
            <br>`
  }

  createNote(title, body){
    // let noteId = this.allNotes.length
    // let newNote = new Note(title, body, noteId);
    let newNote = new Note(title, body, );
    this.allNotes.push(newNote);

    let newNoteLoc = document.getElementById('note-list');
    newNoteLoc.innerHTML += newNote.el();
  }

}
