// event listeners
var message;
document.getElementById("message").addEventListener('change', updateValue);
function updateValue(e) {
  message = e.target.value;
  console.log(message);
  return message;
}

var key = 'qwertyuiopasdfghjklzxcvbnm';
document.getElementById("key").addEventListener('change', changeKey);
function changeKey(e) {
  key = e.target.value;
  console.log(key);
  return key;
}


document.getElementById('randomize').addEventListener("click", function() {
  shuffle = str => [...str].sort(() => Math.random() - .5).join('');

  key = shuffle(key);
  console.log('You selected: ', this.value);
  console.log(key)

  //outputs 
  document.getElementsByName('key')[0].placeholder = key;

});

var direction;
document.getElementById('my-select').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  return direction = this.value;
});

document.querySelector('.btn').addEventListener("click", function() {
  // console.log(message + key + direction);
  qwertyquote(message, key, direction)
})


//
function qwertyquote(message, key, direction) {

  // Always put a place to put to rest
  let cypher = '';

  // Let key =   "qwertyuiopasdfghjklzxcvbnm"; //needs 26 unique might make function
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  // Checks direction tag appends +26 chars either way (maybe hacky maybe clever)
  if (direction == 'decode') {
    alphakey = key + alpha;
  }
  else {
    alphakey = alpha + key;
  }

  // Uppercases alphakey
  let alphakey2 = alphakey.toUpperCase();

  // Iterate over message letters
  for (let i = 0; i < message.length; i++) {

    // If special char ignore 
    if (alpha.indexOf(message[i].toLowerCase()) === -1) {
      cypher += message[i]
      continue
    }

    // If lowercase
    if (message[i] == alphakey[alphakey.indexOf(message[i])]) {
      cypher += alphakey[alphakey.indexOf(message[i]) + 26];
      continue // will restart for loop
    }

    // If anything else its uppercase
    cypher += alphakey2[alphakey2.indexOf(message[i]) + 26];
  }

  console.log(cypher);

  document.getElementById('new').innerHTML = cypher;
  document.getElementById('displayKey').innerHTML = key;

}
