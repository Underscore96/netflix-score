class DBService {
    static getAllShows() {
        const url = "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows";
        return fetch(url).then((resp) => resp.json());
    }

    static updateShow(show) {
        const updateUrl =
            "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows/" + show.id;
        return fetch(updateUrl, {
            method: "put",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.json());
    }



    static createShow(show) {
        const createUrl =
            "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows/" + show.id;
        return fetch(createUrl, {
            method: "post",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.json());
    }






    static upvote(show){
        show.upVotes++;
       return this.updateShow(show);
    }


    static downvote(show){
        show.downVotes--;
        return this.updateShow(show);
    }
}

// function getAllShows() {
//     const url = "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows";
//     return fetch(url).then((resp) => resp.json());
// }

// function updateShow(show) {
//     const updateUrl =
//         "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows/" + show.id;
//     return fetch(updateUrl, {
//         method: "put",
//         headers: { "content-type": "application/json" }
//     }).then((resp) => resp.json());
// }

// function getUpvote() {}

// function getUpvote() {}
