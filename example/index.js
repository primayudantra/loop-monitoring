
var LoopMonitoring = require('../lib/lib/loop.monitoring');

var listService = require('./exampleData.json');
var cronScheduler = "*/2 * * * * *";
var mongoUrl = 'mongodb://localhost/monitoring';


var monitoring = new LoopMonitoring(listService,cronScheduler,mongoUrl)

monitoring.Start();

console.log(`
  THIS IS AN EXAMPLE LOOP MONITORING SERVICE USING REQUEST-PROMISE
  FEEL FREE TO CONTRIBUTE :)
  AUTHOR : Prima Yudantra // prima.yudantra@gmail.com
`)
