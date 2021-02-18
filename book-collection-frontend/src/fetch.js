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
        .then(json => console.log(json))
    }
}