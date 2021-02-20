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
        .then(response => response.json())
    }

    // createNewBook(e){
    //     return fetch(`${this.baseUrl}/books`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             book: {
    //                 title: e.target.children[1],
    //                 author: e.target.children[2],
    //                 img_url: e.target.children[3],
    //                 user_id: user_id
    //             }
    //         })

    //     })
    //     .then(response => response.json())
    // }
}