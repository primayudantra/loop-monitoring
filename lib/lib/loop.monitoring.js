var CronJob = require('cron').CronJob;
var moment = require('moment');
var rp = require('request-promise');
const mongo = require('../config/mongo')

var LoopMonitoring;

LoopMonitoring = (function(){
  function LoopMonitoring(data,schedule,mongoUrl){
    this.data = data;
    this.schedule = schedule;
    this.db = mongo.__init(mongoUrl);
  }

  LoopMonitoring.prototype.Start = function(){
    var scheduler = this.schedule;
    new CronJob(this.schedule, () => {
        LoopMonitoring.prototype.Checking(this.data, this.db)
    },null,true,'')
  }

  LoopMonitoring.prototype.Checking = async function(data, db){
    var obj = {};
    var monitoring = [];
    for(var i = 0; i < data.length; i++){
      var result = await LoopMonitoring.prototype.CheckingService(data[i].serviceUrl)

      obj.name = data[i].serviceName;

      result !== undefined ? obj.status = "UP" : obj.status = "DOWN"
      var payload = {serviceName: obj.name, status: obj.status}
      monitoring.push(payload)
    }
    var dataToDb = {
			time: moment().format('LTS'),
			date: moment().format('L'),
			monitoring: monitoring
    }
    var doc = await db.monitoring.save(dataToDb)
    console.log(doc)
  }

  LoopMonitoring.prototype.CheckingService = async function(serviceUrl){

    var data = {}
		var opts = { method: "GET",uri: serviceUrl,resolveWithFullResponse: true}

		data = await rp(opts).then(data => {
			return data.statusCode;
		}).catch(reason=>{
			return reason.response;
		})
		return data
  }

  return LoopMonitoring;
})();


module.exports = LoopMonitoring;
