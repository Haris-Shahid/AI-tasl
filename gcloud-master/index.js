const Speech = require('@google-cloud/speech');
const language = require('@google-cloud/language');
const fs = require('fs');
const port = process.env.PORT || 3050;

var express = require('express')
var app = express()
app.post('/', (req, res, next) => (
    // var userData = req.body;
        console.log(req.body)    
    )
)

app.use((err, req, res, next) => {
    
        console.log(err.message)
    
        // res.send(err.message)
        next()
    })
    
    app.listen(port, () => {
        console.log('server running on port:', port);
    })
// const client = new language.LanguageServiceClient();
// const projectId = 'haris-batch4';

// const speechClient = Speech({
//     projectId: projectId
//   });

//   const fileName = 'abc.wav';

//   const file = fs.readFileSync(fileName);
//   const audioBytes = file.toString('base64');
// //  console.log(audioBytes)
//   const audio = {
//     content: audioBytes
//   };

//   const config = {
//     encoding: 'LINEAR16',
//     sampleRateHertz: 16000,
//     languageCode: 'en-US'
//   };
//   const request = {
//     audio: audio,
//     config: config
//   };


//   speechClient.recognize(request)
//   .then((data) => {
//     const response = data[0];
//     const transcription = response.results.map(result =>
//         result.alternatives[0].transcript).join('\n');
//     console.log(`Transcription: ${transcription}`);
//     return text = transcription ;
  })
//   .then((text) => {
//     const document = {
//         content: text,
//         type: 'PLAIN_TEXT',
//       };
    
    
//       client
//       .analyzeSentiment({document: document})
//       .then(results => {
//           console.log(results)
//         const sentiment = results[0].documentSentiment;
//         console.log(`Text: ${text}`);
//         console.log(`Sentiment score: ${sentiment.score}`);
//         console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
//       })
//       .catch(err => {
//         console.error('ERROR:', err);
//       });
//   })
  .catch((err) => {
    console.error('ERROR:', err);
  });



  

