module.exports = (bot) => {
    bot.hear(/Hi/, (response) => {
        return response.send("Howdy");
    });
}
module.exports = (bot) =>{
    bot.respond(/What's your favorite food?/, (response) => {
        return response.reply("I'm a robot--I don't eat food!");
    });
}

module.exports = (bot) =>{

    scaryMonster['Boooo', 'AAAAAAHHHHH', 'cackling', 'Your homework is due']
    bot.respond(/What's the scariest monster noise/, (response) => {
    return response.random (scaryMonster);
    });
}