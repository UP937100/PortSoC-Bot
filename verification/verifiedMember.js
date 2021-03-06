async function verifiedMember(
    guildMember,
    name,
    upNum,
) {
    // Create new nickname for user
    let newNickname;
    const nameArray = name.split(" ");
    console.log(nameArray);
    const newFirstName =
        nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
    if (nameArray.length == 1) {
        newNickname = `${newFirstName} / up${upNum}`;
    } else {
        const newSurname = nameArray[1][0].toUpperCase();
        newNickname = `${newFirstName} ${newSurname} / up${upNum}`;
    }

    guildMember.setNickname(newNickname);

    guildMember.send("Your Name and UP number has been verified!");
}

module.exports = { verifiedMember };
