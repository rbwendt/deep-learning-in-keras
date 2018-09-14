var Node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.architect;

var network = new Architect.Perceptron(2, 4, 1);

var trainingSet = [
    { input: [0,0], output: [0] },
    { input: [0,1], output: [1] },
    { input: [1,0], output: [1] },
    { input: [1,1], output: [0] }
  ];
  
// training set same as in above example
network.train(trainingSet, {
error: 0.01
});

network.activate([1,1]); // 0.9824...

drawGraph(network.graph(500, 500), '.draw');
