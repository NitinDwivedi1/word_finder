var paragraph="";
var para="";
var Word="";
var word="";
var arr=[];
var count=0;

function find()
{
  paragraph=document.getElementById('content').value;
  para=paragraph.toLowerCase();
  Word=document.getElementById('input').value;
  word=Word.toLowerCase();
  arr=para.split(" ");
  for(var i=0;i<arr.length;i++)
  {
    if(word==arr[i])
      count++;
  }
  if(count!=0)
  {
    document.getElementById('text').innerHTML="Word "+'"'+word+'"'+" occurs "+count+" times.";
  }
  else
  {
    document.getElementById('text').innerHTML=" This word is not present in the given text!!";
  }
}
