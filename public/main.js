
document.getElementById("submit-btn").addEventListener("click", () => {
    const newFriend = {
        name: document.getElementById("name").value.trim(),
        image: document.getElementById("image").value.trim(),
        answers: []
    }
    for (let i = 1; i <= 10; i++) {
        newFriend.answers.push(document.getElementById("q" + i).value);
    }
    console.log(newFriend);
    //fetch goes here
    //post goes below
});