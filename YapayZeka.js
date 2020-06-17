 
var tf = require('@tensorflow/tfjs');
 
const model = tf.sequential();
model.add(tf.layers.dense({units: 5, activation: 'sigmoid', inputShape: [2]}));
model.add(tf.layers.dense({ units: 2, activation: 'softmax' , outputShape: [2] }));
 
model.compile({loss: 'categoricalCrossentropy', optimizer: tf.train.adam(0.1)});
 
const x = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const y = tf.tensor2d([[1,0],[0,1],[0,1],[1,0]]);
 
const history = model.fit(x, y, {epochs: 200})
 .then(()=>{
  console.log("fit is over")
  //model.predict(tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]])).print();
  model.predict(xtrain ).print();
 });