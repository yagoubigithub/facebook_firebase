const functions = require('firebase-functions');

const  {Storage} = require('@google-cloud/storage');
const os = require('os');
const path = require('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.onFileUpload = functions.storage.object().onFinalize(async (object) => {
     
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;

    console.log("File upload");

    if(path.basename(filePath).startsWith('rename-')){
        console.log("We already renamed this file");
        return;
    }
    const storage = new Storage();
    async function createBucket() {
        // Creates the new bucket
      return  await storage.createBucket(bucket);
        
      }
     
      const destBucket =  createBucket();

  
    const tempFilePath = path.join(os.tmpdir(),path.basename(filePath));
    const metadata = {contentType : contentType};
    return destBucket.file(filePath).download({
        destination : tempFilePath
    }).then(()=>{
        return destBucket.upload(tempFilePath,{
            destination  : 'rename-'  + path.basename(filePath),
            metadata : metadata
        })
    })
 });
