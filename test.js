var S3 = require('./riakcs').load('s3').S3

var s3 = new S3({
  accessKeyId: "8DIQDXSNNEXOJOCVBVSO", //required
  secretAccessKey: "ShKgYr3RJTzXk1oJ8deAE4Qg9daULt0M4rM0SQ==", //required
  hostname: "127.0.0.1:8080", //required
  protocol: "http", //optional
  //proxy : "http://localhost:8080", //optional
})

s3.InitiateMultipartUpload({
  BucketName: '',
  ObjectName: 'large',
  uploads: 'test'
}, function (err, result) {
  console.log("S3 result: " + JSON.stringify(result, null, 2) + " error: " + JSON.stringify(err, null, 2));
})