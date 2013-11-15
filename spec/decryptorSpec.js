describe("Decryptor", function () {
  it ("Decrypts an encrypted string from a URL" , function() {
    encryptor.getCypherText = function() {
      decoder.cypherText = CryptoJS.ASE.encrypt("a test string", "password")
    }
    encryptor.getPassword = function() {
      encryptor.password = "password"
    }
    expect(encryptor.encrypt()).toEqual("a test string")
  });
});