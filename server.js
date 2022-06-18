//1. Import epik.com
const Epik = require('epik.com');

//2. Initiate the Epik API Client with your API Signature
const EpikClient = new Epik(EPIK_API_SIGNATURE);

//3. Make calls
var func = async() => {
  let data = await EpikClient.domains.checkAvailability('jamesjustis.com');
};

const PORT = process.env.PORT||3000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});