// 听力任务依据《いろどり》初级 1 官方简体中文教材对应课页整理。
const irodoriListening=[
{track:'01-01',page:'第 1～2 页',scene:'两位许久未见的人互相问候。',tasks:['先听他们是用礼貌说法还是随意说法。','再判断两人是朋友、前后辈还是熟人。'],answer:'教材答案：①为熟人。听到「お久しぶりです／お元気ですか」是礼貌说法。'},
{track:'02-03',page:'第 1～2 页',scene:'人们在谈自己的兴趣。',tasks:['先听出说话人喜欢做什么。','再听句子里是用「ことです」还是「のが好きです」。']},
{track:'03-03',page:'第 1～2 页',scene:'一段介绍日本四季的录音。',tasks:['分别抓住春、夏、秋、冬的天气或景色。','再听一遍，留意樱花、雨、蝉和红叶。']},
{track:'04-03',page:'第 1～2 页',scene:'熟人见面时聊天气。',tasks:['先判断说到的是晴、雨、雪还是风。','再判断他们说的是现在、昨天还是每天的天气。']},
{track:'05-03',page:'第 1～2 页',scene:'人们介绍自己住的城市。',tasks:['听城市是方便还是不方便、热闹还是安静。','再听有没有提到商店、人或风景。']},
{track:'06-05',page:'第 1～3 页',scene:'问路和指路。先翻到教材前几页的地图，再听。',tasks:['先听目的地。','再听直走、左转、右转以及第几个路口。']},
{track:'07-01',page:'第 1 页和第 9 页',scene:'有人询问明天集合的时间和地点。',tasks:['先听几点集合。','再听是在车站、接待处、大厅还是公司门前。'],answer:'早上八点，在公司大门前集合。第 9 页有对应对话原文。'},
{track:'08-01',page:'第 1～2 页',scene:'有人邀请熟人一起出门。',tasks:['听对方被邀请去做什么。','再听被邀请者是否想去。']},
{track:'09-01',page:'第 1～2 页',scene:'有人谈自己学习日语的经历。',tasks:['听在哪里或通过什么方式学的日语。','再听有没有提到学习了多长时间。']},
{track:'10-01',page:'第 3 页',scene:'有人在窗口询问日语学习班。',tasks:['听他询问的是时间、费用还是需要准备的东西。','再记下听到的具体信息。']}
];
function renderIrodoriListening(i){const x=irodoriListening[i];return `<div class="section"><h3>先从这一段开始</h3><p>${x.scene}</p><p><strong>推荐音轨 ${x.track}</strong> · 中文教材${x.page}</p><button class="button" type="button" data-recommend="${x.track}">播放这段音频</button><ol>${x.tasks.map(t=>`<li>${t}</li>`).join('')}</ol>${x.answer?`<details class="answer"><summary>听完后核对</summary><p>${x.answer}</p></details>`:'<p class="tiny">听完后可在本课中文教材和官方答案中核对。</p>'}</div>`;}
