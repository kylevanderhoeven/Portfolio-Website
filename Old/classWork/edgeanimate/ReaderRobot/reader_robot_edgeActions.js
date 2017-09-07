/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7555, function(sym, e) {
         // insert code here
         // Show an element 
         sym.$("READING").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.$("goread_btn").hide();
         
         // Hide an element 
         sym.$("Again").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         // insert code here
         // Show an element 
         sym.$("goread_btn").show();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goread_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(20000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym, e) {
         
         // Show an element 
         
         sym.stop();
         
         sym.$("Again").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Again}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'robotanimatedsprites_symbol_1'
   (function(symbolName) {   
   
   })("robotanimatedsprites_symbol_1");
   //Edge symbol end:'robotanimatedsprites_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-972590150");