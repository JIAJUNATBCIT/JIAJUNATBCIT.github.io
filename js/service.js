function showAnswer(question_num, answer_num) {
    var question = document.getElementById(question_num);
    var answer = document.getElementById(answer_num);
    if (answer.style.display === "none") {
        question.firstChild.src = "../img/subtr.png";
        answer.style.display = "";
    } else {
        question.firstChild.src = "../img/plus.png";
        answer.style.display = "none";
    }
}