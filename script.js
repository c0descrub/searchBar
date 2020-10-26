var test = 'Linked'
console.log(test)

document.addEventListener('DOMContentLoaded', () => {

var targetInput = document.getElementById("country")
var results = document.getElementById("autocomplete-results")
var countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales']
var matches = []
var resultsCursor = 0
// var card = document.getElementById("card")

targetInput.focus();

targetInput.addEventListener( "keyup", function( event ) {
    results.innerHTML = ""
    toggleResults( "hide" )

    if (this.value.length > 0){
        matches = getMatches(this.value)
            if(matches.length > 0){
                displayMatches(matches)
            }
    }
})

    // function hideCard() {
    //     if(targetInput.length < 0) {
    //         card.classList.add("visible")
    //     } else if(targetInput.length > 0) {
    //         card.classList.remove("visible")
    //     }
    // }

    // hideCard()

    function toggleResults(action) {
        if (action == "show") {
            results.classList.add("visible")
        } else if (action == "hide" ){
            results.classList.remove("visible")
        }
    }

    function getMatches(inputText) {
        var matchList = []

        for (let i = 0; i < countryList.length; i++) {
            if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase() ) != -1) {
                matchList.push(countryList[i] )

            }
        }
        return matchList;  
    }

    function displayMatches(matchList) {
        var j = 0;

        while (j < matchList.length) {
            results.innerHTML += '<li class="result list-group-item">' + matchList[j] + '</li>'
            j++
        }
        moveCursor(resultsCursor)

        toggleResults("show")
    }

    function moveCursor(pos) {
        for ( var x = 0; x < results.children.length; x++) {
            results.children[x].classList.remove("featured")
        }

        results.children[pos].classList.add("featured")

        }
    
})