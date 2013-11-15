describe("Encryptor", function () {
  it ("Encrypts a string into a URL and encrypted token" , function() {
    encryptor.getCypherText = function() {
      decoder.cypherText = CryptoJS.ASE.encrypt("a test string", "password")
    }
    encryptor.getPassword = function() {
      encryptor.password = "password"
    }
    expect(encryptor.encrypt()).toEqual("a test string")
  });
});