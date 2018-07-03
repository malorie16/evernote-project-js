document.addEventListener("DOMContentLoaded", function() {
  const newNote = new Note();
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
  let noteCreationForm = document.getElementById('note-creation')

  //addEventListener to create post
  noteCreationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let noteTitle = document.getElementById('note-title');
    let noteContent = document.getElementById('note-content');

    let newerNewNote = newNote.createNote(noteTitle.value, noteContent.value)
    // console.log(userNote);

    const previewNote = document.getElementById('noteId');
    // console.log(previewNote)
    previewNote.addEventListener('click', function(e) {
      let fullNote = document.getElementById('innerMain');
      console.log(newerNewNote)
      fullNote.innerHTML += newerNewNote.renderFullNote();
    })
  })

  // editButton.addEventListener('click', function(e) {
  //
  // })
  //
  // deleteButton.addEventListener('click', function(e) {
  //
  // })



});
