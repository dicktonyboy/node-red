module.exports = function(RED) {
    function firstNode(config) {
        RED.nodes.createNode(this,config);
// start of node specific code
         var context = this.context();
         var node = this;
// listener on input
         this.on('input', function(msg) {
      // sending message       
         var outMsg = {payload:  "Your First Node Works"};
         node.send(outMsg);
    // end of send
         });
// end of listener
// end of node specific code
     }
     RED.nodes.registerType("FirstNode",firstNode);
};
