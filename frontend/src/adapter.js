class Adapter{

  static getNotes(){
    const baseURL = `http://localhost:3000/api/v1/notes`
    return fetch(baseURL)
      .then(r => r.json())
  }

  static createNote(data) {
    const baseURL = `http://localhost:3000/api/v1/notes`
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseURL, options)
      .then(r => r.json())
  }

  static getNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    return fetch(baseURL)
      .then(r => r.json())
  }


  static deleteNote(data) {
    const baseURL = `http://localhost:3000/api/v1/notes/${data.id}`
    const options = {method: 'delete'}
    return fetch(baseURL, options)
      .then(r => r.json())
  }
}
