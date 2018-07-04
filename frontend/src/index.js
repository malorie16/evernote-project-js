document.addEventListener("DOMContentLoaded", function() {
  //newNote creates a new Note object

  new Note("Note 1", "Hello World, this is my first note!");

  //newNoteLoc gets the location in the DOM where we want to post a new note
  const newNoteLoc = document.getElementById('note-list');


  const editButton = document.getElementById('editButton');
  const deleteButton = document.getElementById('deleteButton');
  //insert the newly created note into the DOM
  // newNoteLoc.innerHTML += newNote.el();


  //allow users to enter information into form and create/display a post
  //grabs the form
  let body = document.getElementById('body')

  //addEventListener to create post
  body.addEventListener('click', function(e) {

    if (e.target.type === 'submit') {
    e.preventDefault();

    let noteTitle = document.getElementById('note-title');
    let noteBody = document.getElementById('note-body');
    Adapter.createNote({title: noteTitle.value, body: noteBody.value})
      .then((note) => {
        const newNote = new Note(note.title, note.body, note.id)
        newNoteLoc.innerHTML += newNote.el()
      })
    } else if (e.target.dataset.view === 'viewNote') {
      console.log(e.target)
    //let previewNote = document.getElementById('view-post');
    // console.log(previewNote)

      console.log(e);
      let fullNote = document.getElementById('innerMain');
      console.log(newerNewNote)
      fullNoteinnerHTML += newNote.renderFullNote();
    }

  })

  // editButton.addEventListener('click', function(e) {
  //
  // })
  //
  // deleteButton.addEventListener('click', function(e) {
  //
  // })



});
