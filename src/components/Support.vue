<template>
  <div class="support"> 

      <h1 
        data-aos="fade-up" 
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >고객지원</h1> 
      <div class="file_upload" data-aos="fade-up" 
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-once="true">
        <p></p>
        <input id="file-selector" ref="file" type="file" @change="handleFileUpload()">
        <button @click="upload">업로드</button>
      </div>
  </div>
</template>
<script>
import AWS from "aws-sdk" 
import '../assets/css/support.css'
export default {
    data(){
        return {
            file:null,
            albumBucketName : "moongoodstone",
            bucketRegion : "ap-northeast-2",
            IdentityPoolId : "ap-northeast-2:fd1ff6f1-eff0-4cd2-8771-85a1d80d162b",
        }
    }, 
    methods: {
      handleFileUpload() {
          this.file = this.$refs.file.files[0] 
        },
        upload() { 
            const s3 = new AWS.S3({
            apiVersion: "2006-03-01",
            params: { 
                Bucket: this.albumBucketName 
                }
            })
            AWS.config.update({
                region: this.bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: "ap-northeast-2:fd1ff6f1-eff0-4cd2-8771-85a1d80d162b"
                })
            })
            let photoKey = this.file.name
            
            s3.upload({ 
                Key: photoKey,
                Body: this.file,
                ACL: "public-read"
                }, function (err, data) {
                    if(err) {
                        console.log(err)
                        return alert('업로드에 실패하였습니다:', err.message);
                    }
                    alert('파일을 업로드 하였습니다.'); 
                });
                

                
        } 
    }
}   
  
</script>