let video;
let poseNet;
let poses = [];
var resmain="Nose,"+"LeftEye,"+"RightEye,"+"LeftEar,"+"RightEar,"+"LeftShoulder,"+"RightShoulder,"+"LeftElbow,"+"RightElbow,"+"LeftWrist,"+"RightWrist,"+"LeftHip,"+"RightHip,"+"LeftKnee,"+"RightKnee,"+"LeftAnkle,"+"RightAnkle\n";
var res;
var filenames;
var counter=0;
 

 
function getfiles(){
 
  filenames = $.ajax({
                  type: "POST",
                  url:"jquery2php.php",
                  async: false,
                  data: {'getfilenames':"1",'variable':"0"},
  }).responseText;
  filenames=filenames.split(","); 
  console.log(filenames);           
}
 

function setup() {
  
  if (counter==0)
    getfiles();
  counter++;
  addprogress();
  res=resmain;
  // createCanvas(innerWidth, innerHeight);
  video =  createVideo("\\"+filenames[counter],onLoad);
  // video.size(0, 0);
  video.play();
  video.hide();
  // video.elt.muted = true;
  poseNet = ml5.poseNet(video, 'single', modelReady); 
  filenames[counter]=filenames[counter].replace(/^.*[\\\/]/, '');
  poseNet.on('pose', function(results) {
    poses = results;
    console.log(poses);
    res=copycsv();
    document.getElementById('progress'+counter).innerHTML = filenames[counter]+" - "+((video.time() / video.duration()) * 100).toFixed(2) + ' %';
    video.onended(postreq);
  });
         
}

function postreq(){
  var value = res;
  var justthefilename = filenames[counter].split('.').slice(0, -1).join('.');
  console.log(justthefilename);
    $.ajax ({
      type: "POST",
      url:"jquery2php.php",
      data: {'variable':value,'getfilenames':"0",'filename':justthefilename},
      success: function() {
         console.log("message sent!");
      }
   });
   document.getElementById('progress'+counter).innerHTML = filenames[counter]+" - "+" Done";
   if(counter<filenames.length-1)
      {   console.log(counter);
          setup();
      }
   
}
function addprogress(){
  g = document.createElement("p");
  var textnode = document.createTextNode("");
  g.appendChild(textnode);
  g.setAttribute("id", "progress"+counter);
  document.getElementById("body").appendChild(g);

}
 

function onLoad() { 
    print("mouse click to start");
}

function modelReady(){
  select('#status').html('model Loaded')
}

function copycsv()  {
   //console.log("sdfsdf");
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
 
      let keypoint = pose.keypoints[j];
 
      // console.log(keypoint);
      res=res+keypoint.position.x+'|'+keypoint.position.y+'|'+keypoint.score+',';
      // Only draw an ellipse is the pose probability is bigger than 0.2
     
    }
    res=res+'\n';
   
}
  return res;
}





 