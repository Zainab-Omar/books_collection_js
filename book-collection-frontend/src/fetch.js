class FetchRequest {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    findOrCreateUser(e){
        return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: e.target.children[1].value
                } 
            })
        })
        // .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            return response.json().then((error) => {
                throw new Error(error);
              })
        })
    }
       createNewBook(e, user_id){
        return fetch(`${this.baseUrl}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                book: {
                    title: e.target.children[1].value,
                    author: e.target.children[5].value,
                    img_url: e.target.children[9].value,
                    user_id: user_id
                }
            })

        })
        // .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            return response.json().then((error) => {
                throw new Error(error);
              })
        })
    }

    deleteBook(bookId){
        //  debugger
        fetch(`${this.baseUrl}/books/${bookId}`, {
            method: 'DELETE'
        }) 
          .then(response => response.json())
          .then(json => console.log(json))
          .catch((error) => {
            console.error('Error:', error);
          });  
    }

}