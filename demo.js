var acme = require("./lib/acme");

acme.enableLocalUsage();

const ENABLE_SERVER = false;
if (ENABLE_SERVER) {
  var server = acme.createServer();
  server.listen(4000);
  console.log("Server listening on port 4000");
}

var authzURL = "https://www.letsencrypt-demo.org/acme/new-authz";
var certURL = "https://www.letsencrypt-demo.org/acme/new-cert";
acme.getMeACertificate(authzURL, certURL, "example.com", function(x) {
  console.log("Result of getMeACertificate:");
  console.log(x);
  if (ENABLE_SERVER) { server.close(); }
});
