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
 function __l(d,_ch){ 
  let ch=_ch||'＃'
  ,ary=d.split('\n'+ch).map((d,i)=>(i===0)?d:ch+d)
  ,re=new RegExp('^'+ch)
  if(re.test(ary[0]))return ary;
  ary[0]=ary.shift(0)+'\n'+(ary[0]||'')
  return ary
 }
 ;
  
 root.__n=__n 
 root.__c=__c
 root.__w=__w
 root.__l=__l
})(this);
