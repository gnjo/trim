/*history
v1.0 coded
*/
;(function(root){
 let num=/^([-+]?(?:\d*[\.]\d+|\d+))$/,headzero=/^0[0-9]/ //bugfix
 ,isstring=function(value){return toString.call(value) === '[object String]'}
 function __n(obj){
  //numable
  if(!isstring(obj))return obj;
  ///^0[0-9]/.test('001') //string like a color code
  if(headzero.test(obj))return obj; //string ex.color code
  if(num.test(obj))return parseFloat(obj);//right number
  return obj;//string
 }
 ;
 let c=/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
 function __c(d){
  //comment trim
  return d.replace(c,'')
 } 
 ;
 let m=/\[\[\[\n(.*)\n\]\]\]/,s=/\[\[\[(.*)\]\]\]/;
 function __w(d){
  //wrap trim
  let re=(m.test(d))?m:(s.test(d))?s:void 0
  ,str= (re)?d.match(re).pop():d;
  return __c(str)
 }
 ;
 root.__n=__n 
 root.__c=__c
 root.__w=__w
})(this);
