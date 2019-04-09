var click_count = 0;
function changeImg(direction) {
    var game_pic = document.getElementById("g_pic");
    var game_title = document.getElementById("g_title");
    var game_intro = document.getElementById("g_intro");
    if (direction == "left"){click_count--;} else {click_count++};
    switch (Math.abs(click_count))
    {
        case 1:
            game_pic.setAttribute("src", "../img/img2.jpg");
            game_title.innerHTML = "Top games - Resident Evil 2 : REMAKE";
            game_intro.innerHTML = "A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating " +
                "zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, " +
                "and unimaginable horrors await you. Witness the return of Resident Evil 2.";
            break;
        case 2:
            game_pic.setAttribute("src", "../img/img3.jpg");
            game_title.innerHTML = "Top games - Don't Starve Together";
            game_intro.innerHTML = "Don't Starve Together is the standalone multiplayer expansion of the uncompromising " +
                "survival game Don't Starve.";
            break;
        default:
            game_pic.setAttribute("src", "../img/img1.jpg");
            game_title.innerHTML ="Top games - Dead By Daylight";
            game_intro.innerHTML = "Dead by Daylight is a multi-player (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.";
            click_count = 0;
            break;
    }
}

function m_over(arrow) {
    var leftArrow = document.getElementById("l_arrow");
    var rightArrow = document.getElementById("r_arrow");
    if (arrow == "left"){
        leftArrow.setAttribute("src", "../img/left_arr_clicked.png");
    } else {
        rightArrow.setAttribute("src", "../img/right_arr_clicked.png");
    }
}

function m_leave(arrow) {
    var leftArrow = document.getElementById("l_arrow");
    var rightArrow = document.getElementById("r_arrow");
    if (arrow == "left"){
        leftArrow.setAttribute("src", "../img/left_arr.png");
    } else {
        rightArrow.setAttribute("src", "../img/right_arr.png");
    }
}