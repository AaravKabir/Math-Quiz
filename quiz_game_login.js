function add_user(){
    console.log("function called");
    var player1_name = document.getElementById("Username1").value;
    var player2_name = document.getElementById("Username2").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="game_page.html";
}