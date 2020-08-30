function deafGrandma(userStatement) {
    while (userStatement !== 'BYE') {
        var randomYear = Math.floor(Math.random() * (1950 - 1930 + 1)) + 1930;
        if (userStatement !== userStatement.toUpperCase()) { // how to get the first condition not to catch all 
            alert('HUH!? SPEAK UP, SONNY');
            userStatement = prompt('Ask your granny again')
        } else if (userStatement === userStatement.toUpperCase()) {
            alert(`NO, NOT SINCE ${randomYear}`);
            userStatement = prompt('How could you get out of this situation?')
        }
    }
}

deafGrandma(prompt('Ask your granny a question'));