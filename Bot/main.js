const scriptName = "LifeGame";
Blank = "\u200b".repeat(500);

let Bot = {};
const map = [{id:'1',name:"낚시터"},{id:2,name:"광산"},{id:3,name:"농장"},{id:4,name:"과수원"}];

const fishing = {
  main:function(sender){
    Bot.reply(sender+"님이 낚시를 시작합니다.")
  }
}//낚시

const mine = {
  main:function(sender){
    Bot.reply(sender+"님이 채굴을 시작합니다.")
  }
}//광산

const orchard = {
  main:function(sender){
    Bot.reply(sender+"님이 수확을 시작합니다.")
  }
}//과수원

const Game = {
main: function (room, sender, msg, imageDB, isGroupChat) {
    if(msg=="지도"){
      let data = map.map(e => {return e.id+'. '+e.name});
      Bot.reply("이동할 지역을 선택하신후 이동 지역명(지역번호)를 입력해주세요.\n\n"+
      data.join("\n")
      )
      }else if(msg == "상점"){
        Bot.reply("현재 판매중인 물품입니다."+Blank+'÷')
      }else if(/^이동 (.+)$/.test(msg)){
        let locationID = RegExp.$1.trim();
        let finder = map.find(e => e.id == locationID || e.name == locationID); 
        if(finder)
        Bot.reply(finder.name+"(으)로 이동했습니다.")
        else Bot.reply("해당 지역은 존재하지 않습니다.\n\"지도\" 명령어를 입력해주세요.")
      }else if(msg == "낚시"){
        fishing.main(sender)
      }else if(msg == "채굴"){
        mine.main(sender)
      }else if(msg == "수확"){
        orchard.main(sender)
      }
  }
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  try {
    Bot.reply = (chatting) => {
      replier.reply(chatting)
    }
    Game.main(room, sender, msg, imageDB, isGroupChat)
  } catch (e) {
    Bot.reply('Error Code : ' + e.name + '\n\n' + 'Content : ' + e.message + '\n\n' + 'Line : ' + e.lineNumber)
  }
}


function createTable(){
let horizontal = "-"
let verticle = "|"
let seam = "+"
let result = map.map(e => {return e.id+'. '+e.name})
map.map(e => e.length)
return result
}
