var name = "User";
var room = "main";
var serverUrl = "http://slackie.azurewebsites.net/api/messages/";

var convertMessage = function(message) {
    return {
        "Name": name,
        "Room": room,
        "Content": message
    };
};

var scrollToBottom = function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
};

var getAvatarUrl = function(user) {
    if (user) {
        return "http://www.gravatar.com/avatar/11111111111111" + user.length + "" + user.charCodeAt() + "?s=32&d=identicon&r=PG"
    } else {
        return "";
    }
};
