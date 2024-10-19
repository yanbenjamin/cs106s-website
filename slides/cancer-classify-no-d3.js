/* CS106S: Cancer Diagnosis via KNN
 * Welcome! In this class, we will be looking at tumors and classifying them as benign or malignant.
 *
 * The method we will be using to do so is called K-Nearest Neighbors, or KNN. The way KNN works is as follows:
 * For each test point in our data, we try and find the K-most similar training points to that test point. After 
 * doing so, we look at these K-most similar training points, and determine whether a majority of these points are 
 * benign or malignant. Once we get this majority classification, we use this as our prediction for the test point.
 *
 * RUNNING THE CODE:
 * First, make sure that index.html runs the script "<script src="cancer-classify-no-d3.js"></script>". 
 * index.html should NOT have "<script src="cancer-classify.js"></script>"
 *
 * To run the code, simply open the index.html file in this folder (if on mac, double clicking on index.html should open it in a browser).
 * Then open up your console and check the output :D. Refresh the page to re-run the code!
 *
 * Edit the code where you see "TODO" to make this work! The code is heavily commented, but if you have any questions, do
 * not hesitate to raise your hand/ask an instructor :) 
 */

var CLASSIFICATION_INDEX = 10;  // index of the class for each training/test sample
var K = 3;                      // to classify each training example, we use the top K closest training examples. See below.
var BENIGN_LABEL = 2;                 // Samples with classification of "2" are Benign
var MALIGNANT_LABEL = 4;              // Samples with classification of "4" are Malignant

// Global variables for storing our samples. The d3 code below fills in these variables.
//  - trainingData: an Array of 628 training instances. Each training instance is represented as an Array with 11 values.
//  - testData: an Array of 71 test instances. Each test instance is represented as an Array with 11 values.
var trainData;
var testData;

// (1) When we load the script, we read in our training and test data from CSV's and store them in global variables.
loadData();
kNN();

// (2) We then run kNN to classify our test instances
// TODO: Complete this function
function kNN() {
  /* myResults: Array of 2s and 4s, one element for each test instance in testData.
     Each element at index i corresponds to a prediction for index i in the testData. */
  var myResults = [];
  for (var i = 0; i < testData.length; i++) {
    var testInstance = testData[i];

    /* Calculates distance between testInstance and each training point, storing them in 
    an array of objects of form {distance: <Euclidean distance>, class: <2 or 4>} */
    var pointDistances = [];
    for (var j = 0; j < trainData.length; j++){
      var trainInstance = trainData[j];
      var trainDist = calculateDistance(testInstance, trainInstance);
      var trainLabel = trainInstance[CLASSIFICATION_INDEX]; //2 = benign, 4 = malignant

      pointDistances.push({distance: trainDist, class: trainLabel}); 
    }

    //sorts the training points from smallest to largest distance
    pointDistances.sort(function f(a, b) {return a.distance - b.distance});

    //takes the closest K training points to the test sample   
    closestKPoints = pointDistances.slice(0, K);

    /* TODO: After getting closestKPoints, Classify the testInstance based on closestKPoints.
     Our prediction will be the classification that appears most frequently in closestKPoints, 
     and then we will store the prediction (either 2 or 4) in myResults.*/

     // count malignant and benign neighbors among the K closest points
    var benign_ct = 0;
    var malig_ct = 0;
    for (var j = 0; j < closestKPoints.length; j++) {
      if (closestKPoints[j].class == BENIGN_LABEL) {
        benign_ct++; // label of 2 => benign
      } else {
        malig_ct++; // label of 4 => malignant
      }
    }
    // if more benign neighbors than malignant, predict benign for test point
    if (benign_ct > malig_ct) {
      myResults.push(BENIGN_LABEL);
    } else { // otherwise, predict malignant (as long as K is odd, no equal case)
      myResults.push(MALIGNANT_LABEL);
    }

  }

  // At this point, myResults should contain testData.length predictions. We will now see how accurate we were and print it to console.
  console.log("Final Accuracy: " + printAccuracy(myResults));
}

// Calculates the Euclidean distance between two instances of our data. (https://en.wikipedia.org/wiki/Euclidean_distance#Definition)
// Be careful not to include the SAMPLE CODE NUMBER or the CLASS number when calculating this distance!
function calculateDistance(instance1, instance2) { 
  // initialize distance
  var dist = 0;

  // add squares of differences (index 0 ignored as it's the ID / code number of the data sample, see data.js)
  for (var j = 1; j < CLASSIFICATION_INDEX; j++) {
    dist += (instance1[j] - instance2[j]) ** 2;
  }

  // return sqrt (Euclidean distance)
  return Math.sqrt(dist);
}

/* No need to revise anything beyond this point :) */

// Computes accuracy of given results array.
function printAccuracy(myResults) {
  if (myResults.length !== testData.length) {
    return "Please provide exactly one classification for each test instance.";
  }
  var totalTestInstances = testData.length;
  var correctClassifications = 0;
  for (var i = 0; i < myResults.length; i++) {
    var currResult = myResults[i];
    var correctResult = testData[i][CLASSIFICATION_INDEX];
    if (currResult === correctResult) {
      correctClassifications++;
    }
  }
  var percentAccuracy = correctClassifications / totalTestInstances * 100;
  percentAccuracy = percentAccuracy.toFixed(2);
  return percentAccuracy;
}