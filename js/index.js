var forums=[];

var id = 0;
function addProducts(fname, course, Class,name,date,img,descri) {
    let card = $('<button href="#" id="'+id+'" class="link-text '+course+' '+Class+' " onclick="show_forum(this.id)"></button>');
    card.append('<h3 class="navbar-text ">'+fname+'</h3>')
    $(".nav-container").append(card);
    let fquestion=addforum_section(fname,date,img, name,descri)
    var myforum = {
    	question: fquestion,
    	reply:[],
    }
    forums[id]=myforum;
    id++;
}

function addReply(id,title,name,date,img,descri){
  let reply=addforum_section(title,date,img, name,descri)
  forums[id].reply.push(reply);
}

function addforum_section(title,date,img,name,desc){
        let wrapper=$('<div><div>')
        let forum_question = $('<div class="header"><p class="header-left">'+title+'</p><p class="header-right">'+date+'</p><br><br><br></div>');
        let question_content = $('<div></div>');
        question_content.append('<img src="'+img+'" alt="img" class="image">');
        let question_profile = $('<div class="profile"></div>');
        question_profile.append('<p class="bold">'+name+'</p>');
        question_profile.append('<br><br><br><br><br><br>');
        question_content.append(question_profile);
        let question_desc = $('<div class="description"></div>')
        question_desc.append('<p>'+desc+'</p>');
        wrapper.append(forum_question);
        wrapper.append(question_content);
        wrapper.append(question_desc);
        wrapper.append('<hr>');
        return wrapper;
}

function addclassoption(name,value){
	let option = $('<option value="'+value+'">'+name+'</option>');
	$("#class").append(option);
}
var desc = 'Answer following questions by replying to this post.<br>1. What are the forms of Horn clauses?<br>2. Write the following English conditional statements as Prolog headed Horn clauses:<br>a. If Mike is the father of Joe and Mike is the father of Mary, then Mary is the sister of Joe.<br>b. If Mike is the brother of Fred and Fred is the father of Mary, then Mike is the uncle of Mary.<br><br>This is our last topic. File attached is information about Final Exam.<br>If you have any questions, feel free to ask me anytime through Line, Discord, or email.';

addProducts("GSLC 10 Jun - Logic Programming Language","plc","la02","Rulyna",'10/06/2020 15:28','asset/rulyna.jpg',desc);
desc = '<p>1.<br><p>There are two main forms of Horn Clauses<br><p>Headed Horn Clause, also known as rule. A Headed Horn Clause can only have one proposition of the left but may have multiple propositions on the right side. These type of statements are used for the hypotheses.<br><p>The other type of Horn Clause is called Headless Horn Clause, also known as a fact. A headless horn clause has an empty left side. Any given soluble theorem will have at most one headless clause and every other clause is headed. The headless clause will be the goal, and all other headed clauses can be viewed as hypothesis that support the goal.</p>';
addReply(0,'','DANIEL DANIEL','11/06/2020 14:29','asset/daniel.jpg',desc);
desc = '<p>Horn clauses can only be in either of two forms:</p><p>A single atomic proposition on the left side or an empty left side. The left side of a clausal form proposition is sometimes called the head and horn clauses with left side are also known as headed horn clauses.</p><br><p>a. If Mike is the father of Joe and Mike is the father of Mary, then Mary is the sister of Joe.</p><br><p>sibling(Mary, Joe) :- Father(Mike, Mary), Father(Mike, Joe)</p><p>b. If Mike is the brother of Fred and Fred is the father of Mary, then Mike is the uncle of Mary.</p><p>uncle(Mike, Mary) :- brother(Mike, Fred), Father(Fred, Mary)</p>';
addReply(0,'','MARIO HALIM','11/06/2020 22:12','asset/mario.jpg',desc);
desc = '<p>Answer following questions by replying to this post.</p><p>1. Is there any cost of exception handling implementation? or exception handling always '+'zero-cost'+'?</p><p>2. What questions should we ask related with exception handling design issues? Give 3 questions.</p><p>3. What question should we ask related with event handling design issues? Give 1 question.</p>';
addProducts("GSLC 13 May - Exception Handling","plc","la02","Rulyna",'13/05/2020 15:18','asset/rulyna.jpg',desc);

desc='<p>Jelaskan Risk Management Paradigm pada slide di BIMAY, slide ke-8.</p><p>seberapa penting Risk Management dalam Software Engineering? Jelaskan pendapat anda!</p>';
addProducts("Software Risk","se","ca02","Karto Iskandar","02/06/2020 21:03","asset/karto.jpg",desc);
/*addProducts("Diskusi Untuk Mengevaluasi Produk dan Layanan","se","ca02");
addProducts("Testing Aplikasi","se","ca02");
*/
desc = '<p>Discuss for or against the following statements:</p><br><p>1. For decentralized organization, a design whereby modules have high coupling is more suited than one whereby modules have low coupling.</p><br><p>2. A decentralized organization requires longer development time than does a centralized organization.</p>';
addProducts("Project Scheduling","se","la02",'Zulfany Erlisa Rasjid','02/06/2020 11:50','asset/zulfany.jpg',desc);
/*addProducts("Function Point","se","la02");
addProducts("Prototyping","se","la02");*/


function filter(c,cl) {
    $(".link-text").each(function() {
        $(this).removeClass("show");
        if ($(this).attr("class").indexOf(c) > -1 && $(this).attr("class").indexOf(cl) > -1){
            $(this).addClass("show")
        }
    });
};

function submit(id){
  console.log(id);
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " "  + currentdate.getHours() + ":"  + currentdate.getMinutes();
  addReply(id,'','Annonymous',datetime,'asset/derryl.jpg',$('#reply').val());
  show_forum(id);
}

function show_forum(id){
  document.getElementById('content-container').innerHTML = "";
  $("#content-container").append(forums[id].question);
  let reply_box=$('<div></div>');
  let reply_temp=$('<div></div>');
  reply_temp.append('<p class="description">Reply : </p>');
  reply_temp.append('<textarea name="reply"class="reply" id="reply" cols="30" rows="10"></textarea><br><br>');
  reply_temp.append('<button class="description" id="center" onclick="submit('+id+')">Submit</button>');
  reply_box.append(reply_temp);
  reply_box.append('<br><hr>');
  $("#content-container").append(reply_box);
  for(i=0;i<forums[id].reply.length;i++){
    $("#content-container").append(forums[id].reply[i]);
  }
}

$('#course').change(function(){
  var data= $(this).val();
  document.getElementById('class').innerHTML = ""; 
  // addclassoption("All","");
  if(data=="plc"){
    addclassoption("LA02","la02");
    //hide all SE subjects
  }
  if(data=="se"){
    addclassoption("CA02","ca02");
    addclassoption("LA02","la02");
    //hide all PLC subjects
  }        
  filter(data,$('#class').val()); 
});

$('#class').change(function(){
  var data= $(this).val();
  var data2= $('#course').val();
  filter(data2,data);        
});

function Select(test){
	console.log(test);
}

filter('plc','');

