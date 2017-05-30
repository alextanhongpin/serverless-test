'use strict'

const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: 'YOURKEY',
  secretAccessKey: 'YOURSECRET',
  region: 'sa-east-1'
})

module.exports.hello = (event, context, callback) => {
  const sns = new AWS.SNS({
    apiVersion: '2010-03-31'
  })
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
  const params = {
    Message: 'STRING_VALUE', /* required */
    MessageAttributes: {
      '<String>': {
        DataType: 'STRING_VALUE', /* required */
        BinaryValue: new Buffer('...') || 'STRING_VALUE',
        StringValue: 'STRING_VALUE'
      }
      /* '<String>': ... */
    },
    MessageStructure: 'STRING_VALUE',
    PhoneNumber: 'STRING_VALUE',
    Subject: 'STRING_VALUE',
    TargetArn: 'STRING_VALUE',
    TopicArn: 'STRING_VALUE'
  }
  sns.publish(params, (error, data) => {
    error ? callback(error) : callback(null, response)
  })
}
