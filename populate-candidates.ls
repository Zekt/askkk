require! \fs
Firebase = require \firebase

candidates-ref = new Firebase 'https://askkk-ntu.firebaseio.com'
error <- candidates-ref.set JSON.parse fs.read-file-sync \candidates.json
console.log error if error

