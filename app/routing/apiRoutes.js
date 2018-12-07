const friendsdata = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });


    app.post("/api/friends", function (req, res) {
        let newUserScore = req.body.scores;
        let result = [];
        let match = 0;

        for (let i = 0; i < friendsdata.length; i++) {
            let difference = 0;
            for (let x = 0; x < newUserScore.length; x++) {
                console.log(friendsdata[i].scores[x]);
                difference += (Math.abs(parseInt(friendsdata[i].scores[x]) - parseInt(newUserScore[x])))
            };
            result.push(difference);
        };
        console.log(result);

        for (let y = 0; y < result.length; y++) {
            console.log(result[y]);
            if (result[y] <= result[match]) {
                match = y;
                console.log(match);
            }
        }
        friendsdata.push(req.body);

    });
};