var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var idealMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };
        console.log(req.body);

        var data = req.body;
        var userScore = data.scores;
        var userDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            userDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                userDiff += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

                if(userDiff <= idealMatch.friendDiff) {
                    idealMatch.name = friends[i].name;
                    idealMatch.photo = friends[i].photo;
                    idealMatch.friendDiff = userDiff;
                }
            }
        }
            friends.push(data);
            res.json(idealMatch);
    });
}