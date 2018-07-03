class Note {
  constructor(title, content, id){
    this.title = title;
    this.content = content;
    this.allNotes = []
    this.id = id;
  }

  //displays note preview
  el(){
    return `<div id='noteId'>
              <h3>${this.title}</h3>
              <p>${this.content.substring(0, 5)}...</p>
            </div>
            <br>`
  }

  //displays full note
  renderFullNote(){
    return `<div id='fullNoteId'>
              <h3>${this.title}</h3>
              <p>${this.content}</p>
              <button id="editButton">Edit Note Button</button>
              <button id="deleteButton">Delete Note Button</button>
            </div>
            <br>`
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
