
var decryptor = {

  getPassword: function() {
    this.password = prompt("What's the word, bird?")
  },

  getCypherText: function() {
    this.cypherText = document.URL.split('?')[1]
  },

  decrypt: function() {
    this.getPassword()
    this.getCypherText()
    alert(CryptoJS.AES.decrypt(this.cypherText, this.password).toString(CryptoJS.enc.Utf8))
  },

}

document.getElementById('decrypt').onclick = function() { decryptor.decrypt() }
