function shout(Hello){
    return Hello.toUpperCase()
}
function whisper(Hello){
    return Hello.toLowerCase()
}
function logShout (Hello){
    console.log(Hello.toUpperCase())
}
function logWhisper (Hello){
    console.log(Hello.toLowerCase())
}
function sayHiToHeadphonedRoommate (Hello){
    let cantAnswer = "I can't hear you!"
    let yesAnswer = "YES INDEED!"
    let otherAnswer = "I would love to!"
    if (Hello.toLowerCase(Hello) === Hello) {
        return cantAnswer
    }
    else if (Hello.toUpperCase(Hello) === Hello){
      return yesAnswer  
    }
    else if ("Let's have dinner together!" === Hello){
        return otherAnswer
    }
}