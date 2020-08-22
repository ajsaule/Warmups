function userIdGenerator(name, bio, secret) {
    let bioCount = bio.split(" ").length * 2;
    let userName = `${name}${bioCount}`;
    let secretArray = secret.split("");
    let secretCount = Math.ceil(secretArray.length / 2);
    let secretCharacters = secretArray[secretCount];
    userName = `${name}${bioCount}${secretCount}${secretCharacters}${secretCount}`;
    return userName;
}

console.log(userIdGenerator('JEFF', 'Hello world, I am a techincal officer in Australia', "JOHNSON"));