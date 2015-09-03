

var connectedRef = new Firebase("https://burning-torch-3848.firebaseio.com/.info/connected");

connectedRef.on("value", function(snap) {
    if (snap.val() === true) {
        $("#connected").attr("src", "resources/thumbs-up-button.jpg");
    } else {
        $("#connected").attr("src", "resources/thumbs-down-button.jpg");
    }
});
