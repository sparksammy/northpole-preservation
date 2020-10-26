//ElfChat Remade
//Made by Samuel Lord
//Part of the North Pole Preservation Project
//"The magic of Santa" is incomming! :-)
let sendBtn = document.getElementById("send")

const actionHelper = [
    //0
    ["hi","hello,","hey"],
    //1
    ["how are you", "how are things", "how is your"],
    //2
    ["mcdonalds at the northpole", "mcdonalds at the north pole"],
    //3
    ["you old"],
    //4
    ["what's up", "sup", "going on"],
    //5
    ["happy", "good", "fantastic"],
    //6
    ["bad", "terrible", "tired", "bored", "sad", "depressed"],
    //7
    ["thank you", "thanks"],
    //8
    ["lol", "haha", "funny"],
    //9
    ["whataburger at the northpole", "whataburger at the north pole"],
    //10
    ["how are the reindeer"],
    //11
    ["how do the reindeer fly", "how the reindeer fly", "how do reindeer fly"],
    //12
    ["bye","cya","see you!", "see you.", "see ya.", "see ya!", "goodbye"],
    //13
    ["your name"]
]

const action = [
    //0
    ["Hello!", "Oh, hi!"],
    //1
    ["Great! How is your day!", "Good! How are you?"],
    //2
    ["No, not yet."],
    //3
    ["Aww...", "I am not that old.", "Me? Old? I don't think so!"],
    //4
    ["Not much, just chatting.", "Not much."],
    //5
    ["That's great!", "Great!"],
    //6
    ["Aww.", "That's terrible. :'("],
    //7
    ["You're welcome.", "No problem."],
    //8
    ["I found that funny too. :-)", "Haha.", "I'm glad you laughed."],
    //9
    ["Not yet, sadly.", "No, not yet."],
    //10
    ["They are doing great!", "Great! :-)"],
    //11
    ["It's a secret that only Santa knows.", "Only Santa knows that, sorry."],
    //12
    ["Bye!", "See you soon!", "Bye, have a great day."],
    //13
    ["My name is Sam."]
]
    const alt = [
//0
"I did not understand, sorry.",
//1
"Could you rephrase that, please?"
]

//Rewritten by Sparksammy
function compare(triggerArray, replyArray, altArray, text) {
    var item;
    for (ss in actionHelper) {
        if (typeof actionHelper[ss] !== 'undefined') {
            if (actionHelper[ss].some(v => text.includes(v))) {
                //Return true, meaning there is at least one.
                var items = action[ss]
                item = items[Math.floor(Math.random() * items.length)]
                break;
            } else {
                item = altArray[Math.floor(Math.random() * altArray.length)]
            }
        }
    } 
    console.log(`Items: ${items}, item: ${item}`)
    return item;
}
function sendAndReply() {
    let inputField = document.getElementById("input")
    let input = inputField.value;
    console.log(`I typed '${input}'`)
    document.getElementById("pastTalk").innerHTML += `<p>You: ${input}</p>`
    let text = input.toLowerCase()
    var reply = compare(actionHelper,action,alt,text)
    document.getElementById("pastTalk").innerHTML += `<p>Sam: ${reply}</p>`
}