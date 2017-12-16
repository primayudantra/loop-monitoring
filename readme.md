# Loop Monitoring

> Loop Monitoring is a libs for checking your service is up or down using cronjob and store the report to your MongoDB Database.

### Installation
Make sure you have **NODE** and **MONGODB**.
```bash
npm install loop-monitoring
```

### How EXAMPLE
```
var LoopMonitoring = require('loop-monitoring');

var listService = require('./exampleData.json');
var cronScheduler = "*/2 * * * * *";
var mongoUrl = 'mongodb://localhost/monitoring';


var monitoring = new LoopMonitoring(listService,cronScheduler,mongoUrl)

monitoring.Start();

console.log(`
  Monitoring Start
`)

```

### Example list of services
Create a json with key **serviceName** and **serviceUrl**
```
[
	{
		"serviceName":"Service 1",
		"serviceUrl":"http://localhost:8080"
	},
	{
		"serviceName":"Service 2",
		"serviceUrl":"http://localhost:9807"
	},
	{
		"serviceName":"Service 3",
		"serviceUrl":"http://localhost:4500"
	},
	{
		"serviceName":"Service 4",
		"serviceUrl":"http://localhost:7787"
	},
	{
		"serviceName":"Service 5",
		"serviceUrl":"http://localhost:7966"
	}
]
```
### Example Folder

You can try to run the code sample in `example` folder.

### Contact

If you have any questions, feedback, idea or anything, please drop me a message at `prima.yudantra@gmail.com`

### License

  [MIT](LICENSE) Copyright © 2017 Prima Yudantra
