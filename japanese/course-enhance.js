/* Original study notes and practice prompts for the commute page. */
const courseNotes = [
  {
    focus: [
      ['〜という意味', '「ご芳名」は「名前」という意味です。', '“ご芳名”是“姓名”的意思。', '用于解释词语或表达的含义。'],
      ['〜される（受身）', '日本では、結婚式は6月に行われます。', '在日本，婚礼在六月举行。', '主语是接受动作的一方；这里是客观说明习惯。'],
      ['〜なければならない', 'パーティーの席を決めなければなりません。', '必须决定聚会的座位。', '表示必须做某事；口语也常说「〜なくちゃ」。']
    ],
    practice: [
      ['「お大事に」はどういう意味ですか。', '「体に気をつけて」という意味です。', '「〜という意味」用于把前面的表达解释成另一种说法。'],
      ['席を（決める）→ 席を＿＿＿＿。', '決めなければなりません', '规则或必要事项用「动词ない形＋なければなりません」。']
    ]
  },
  {
    focus: [
      ['〜たことがある', '私は一度ハノイへ行ったことがあります。', '我去过一次河内。', '表示过去有过某种经历；不是单纯叙述某一次去过。'],
      ['疑问词＋か', 'ハノイがどこにあるか知っていますか。', '你知道河内在哪里吗？', '把“在哪里”放进更大的句子里，疑问词后接「か」。'],
      ['〜は…より', 'ハノイは東京より暖かいです。', '河内比东京暖和。', '比较两个对象时，比较对象后用「より」。'],
      ['〜のに（用途）', '学校へ持っていくのに便利なかばんです。', '这是很方便带去学校的包。', '这里不是“明明……却”，而是“用于……很方便”。']
    ],
    practice: [
      ['富士山を見た経験があります。用「〜たことがある」说。', '富士山を見たことがあります。', '经历表达直接接动词た形。'],
      ['“我不知道车站在哪里。”用「疑问词＋か」。', '駅がどこにあるか知りません。', '「どこにある」作为整体放在「か」前，再接「知りません」。']
    ]
  },
  {
    focus: [
      ['〜らしい', '田中さんは明日来るらしいです。', '听说田中明天会来。', '表示根据听来的信息作出判断，不是亲眼确认。'],
      ['〜てもらう', '友だちに駅まで連れていってもらいました。', '请朋友带我去了车站。', '强调自己得到对方帮助；「に」标出提供帮助的人。'],
      ['〜ば', '地図を見れば、迷いません。', '只要看地图，就不会迷路。', '表示条件；「动词ば形」后面接结果或建议。'],
      ['〜てある', 'ホテルはもう予約してあります。', '旅馆已经预订好了。', '表示有人事先做完某动作，并留下现在的状态。']
    ],
    practice: [
      ['“听说周六会下雨。”选择自然表达。', '土曜日は雨らしいです。', '「らしい」表示从信息得到的推测；不是自己直接判断的「そうです」。'],
      ['“如果有时间，就一起去吧。”', '時間があれば、一緒に行きましょう。', '「ある」的ば形是「​あれば」；条件部分放在前面。']
    ]
  },
  {
    focus: [
      ['〜ようだ', '木の上に子ねこがいるようです。', '树上好像有一只小猫。', '根据眼前线索或五感进行推测，语气比断定柔和。'],
      ['〜んじゃない？', 'あの子ねこは困っているんじゃない？', '那只小猫是不是遇到困难了？', '口语中寻求对方认同，也可以带有“难道不是吗”的语气。'],
      ['〜ても', '雨が降っても、助けに行きます。', '即使下雨，我也要去帮忙。', '表示让步条件：“即使……也……”。'],
      ['〜すぎる', '子ねこが高いところに登りすぎました。', '小猫爬到太高的地方了。', '表示超过适当程度；动词ます形去掉ます＋すぎる。']
    ],
    practice: [
      ['看到地上有水，推测“好像下过雨”。', '雨が降ったようです。', '根据现场痕迹作推测，用「〜ようです」。'],
      ['“即使很忙，也要吃饭。”', '忙しくても、ご飯を食べなければなりません。', '「ても」连接让步条件，后半句仍可接义务表达。']
    ]
  },
  {
    focus: [
      ['〜ようになる', 'ピアノが弾けるようになりました。', '我变得会弹钢琴了。', '表示能力、习惯或状态发生变化，常用于“从不会到会”。'],
      ['〜ようと思っている', '来年、日本へ行こうと思っています。', '我打算明年去日本。', '表示目前正在考虑或打算做某事，比明确决定更柔和。'],
      ['〜ために', '日本で働くために、日本語を勉強しています。', '为了在日本工作，我正在学习日语。', '表示目的；前面通常接动词辞书形或名词＋の。'],
      ['〜つもりだ', '毎日、少しずつ練習するつもりです。', '我打算每天一点点练习。', '表示已经有较明确的打算。']
    ],
    practice: [
      ['“我终于能听懂日语了。”', '日本語が聞き取れるようになりました。', '能力变化用「可能形＋ようになる」。'],
      ['“为了考试，每天复习单词。”', '試験のために、毎日単語を復習します。', '目的用「名词＋のために」；前后主语通常相同。']
    ]
  },
  {
    focus: [
      ['〜んですが', '予約をしたいんですが、空いていますか。', '我想预约，请问还有空位吗？', '把请求的前置背景说得委婉，给对方接话的空间。'],
      ['〜でしょうか', '何時にチェックインできるでしょうか。', '请问几点可以办理入住呢？', '礼貌地询问，比「できますか」更客气。'],
      ['〜と〜と、どちらがいいですか', '和室と洋室と、どちらがいいですか。', '日式房和西式房，哪个比较好？', '在两个选项之间征求意见。'],
      ['〜にする', 'では、和室にします。', '那么，我选日式房。', '表示在比较或考虑后作出选择。']
    ],
    practice: [
      ['电话预约时说“我想订房，请问还有空房吗？”', '部屋を予約したいんですが、空いていますか。', '用「〜たいんですが」先铺垫请求，再提问。'],
      ['在两种房间中选择日式房。', '和室にします。', '最终决定用「名词＋にします」。']
    ]
  },
  {
    focus: [
      ['〜ていただく', '選手にお話を聞かせていただきました。', '我有幸请这位选手为我讲述了情况。', '对方身份或场合较正式时，用来礼貌表达“承蒙对方做某事”。'],
      ['〜そうです（传闻）', '明日は試合があるそうです。', '听说明天有比赛。', '表示从别人那里听到的信息；和“看起来”的样态用法不同。'],
      ['〜ていらっしゃる', '監督は今、話していらっしゃいます。', '教练现在正在讲话。', '「〜ている」的尊敬说法，适合采访或正式场合。']
    ],
    practice: [
      ['向采访对象礼貌表达“谢谢您接受采访”。', 'インタビューを受けていただいて、ありがとうございます。', '「〜ていただいて」表达自己承蒙对方配合。'],
      ['“听说他今天不参加比赛。”', '彼は今日、試合に出ないそうです。', '消息来源是别人时用传闻「そうです」，前面接普通形。']
    ]
  },
  {
    focus: [
      ['〜てはいけない', '仕事中に携帯電話を使ってはいけません。', '工作时不可以使用手机。', '表示规则或禁止；比单纯的“不做”更强。'],
      ['〜ないようにする', '面接に遅れないようにします。', '我会注意不迟到面试。', '表示努力做到某事或避免某事，适合表达准备和注意事项。'],
      ['〜てほしい', '明日までに履歴書を出してほしいです。', '希望你在明天之前提交简历。', '表达希望对方做某事；对上级使用时要注意礼貌。'],
      ['〜からまいりました', '中国からまいりました。', '我来自中国。', '正式自我介绍中「来ました」的谦逊说法。']
    ],
    practice: [
      ['面试规则：“这里不可以抽烟。”', 'ここでたばこを吸ってはいけません。', '禁止事项用「て形＋はいけません」。'],
      ['“请注意不要忘记带简历。”', '履歴書を忘れないようにしてください。', '「ないようにしてください」是礼貌提醒对方避免某事。']
    ]
  },
  {
    focus: [
      ['〜でしょう？', 'この言葉は便利でしょう？', '这个词很方便，对吧？', '句尾上扬时用于寻求对方同意，不是单纯的未来推测。'],
      ['〜ところだ', '今から出かけるところです。', '我正要出门。', '表示动作即将开始；「ているところ」是正在进行。'],
      ['〜がする', 'この部屋はいいにおいがします。', '这个房间闻起来很香。', '用于感觉到声音、气味、味道等：“感觉有……”。'],
      ['自动词・他动词', 'ドアが開きました。／私がドアを開けました。', '门开了。／我把门打开了。', '自动词强调状态变化，他动词强调有人施加动作。']
    ],
    practice: [
      ['“闻起来有奇怪的味道。”', '変なにおいがします。', '气味用「においがする」，不能说成「においをする」。'],
      ['分别表达“门开了”和“我开门了”。', 'ドアが開きました。／私がドアを開けました。', '前者是自动词「開く」，后者是他动词「開ける」。']
    ]
  },
  {
    focus: [
      ['N4 综合辨析', '文脈を読んで、いちばん自然な表現を選びます。', '阅读上下文，选择最自然的表达。', '最后一课的重点是把助词、副词、指示词和动词成对辨认。'],
      ['指示词：これ・それ・その', 'その話は、さっき聞きました。', '那个话题，我刚才听过了。', '「その」放在名词前；单独指代事物时用「それ」。'],
      ['自動詞・他動詞', '電気がつきました。／電気をつけました。', '灯亮了。／我开了灯。', '先问“状态自己变化还是谁做了动作”，再选助词。']
    ],
    practice: [
      ['“请把灯打开。”选择助词：電気（が／を）つけてください。', '電気をつけてください。', '「つける」是他动词，需要动作对象用「を」。'],
      ['“刚才说的那个计划很有意思。”', 'さっき話したその計画はおもしろいです。', '名词前用「その」；它指向前文已经提到的内容。']
    ]
  }
];

function renderCourseNotes() {
  document.querySelectorAll('.course-block').forEach((block, index) => {
    const note = courseNotes[index];
    if (!note) return;
    const oldSummary = block.querySelector(':scope > p');
    if (oldSummary) oldSummary.remove();
    const focus = document.createElement('div');
    focus.className = 'focus-panel';
    focus.innerHTML = `<div class="focus-kicker">本课重点｜先记这几句</div>${note.focus.map(([pattern, jp, cn, explanation]) => `<div class="focus-row"><div class="focus-pattern">${pattern}</div><div class="focus-jp">${jp}</div><div class="focus-cn">${cn}</div><div class="focus-note">${explanation}</div></div>`).join('')}`;
    const pages = block.querySelector('.page-grid');
    block.insertBefore(focus, pages);
    const practice = document.createElement('section');
    practice.className = 'practice-panel';
    practice.innerHTML = `<div class="focus-kicker">课后自测｜原创练习 + AI 解答</div>${note.practice.map(([question, answer, why], i) => `<div class="practice-question"><b>${i + 1}. ${question}</b><details class="answer"><summary>查看 AI 解答</summary><p><b>答案：</b>${answer}</p><p>${why}</p></details></div>`).join('')}`;
    block.appendChild(practice);
  });
}

renderCourseNotes();

const coursePages = [
  [36, 49], [50, 67], [68, 85], [86, 102], [103, 119],
  [120, 133], [134, 149], [150, 161], [162, 171], [171, 171]
];
const audioByPage = {
  16: [2, 3, 4, 5, 6, 7, 8, 9], 18: [10], 26: [11],
  36: [15], 42: [16], 49: [17, 18], 50: [19], 60: [20], 67: [21, 22],
  68: [23], 79: [24], 84: [25], 85: [26, 27, 28], 86: [29], 92: [30],
  102: [31, 32, 33, 34, 35], 103: [36], 110: [37], 119: [38, 39, 40, 41],
  120: [42], 127: [43], 133: [44, 45, 46, 47, 48], 134: [49], 142: [50],
  149: [51, 52], 150: [53], 156: [54], 161: [55, 56, 57, 58],
  171: Array.from({length: 29}, (_, i) => i + 59)
};
const audioSrc = track => `audio/n4/Track${String(track).padStart(3, '0')}.mp3`;

function normalizeCoursePages() {
  document.querySelectorAll('.course-block').forEach((block, index) => {
    const desired = coursePages[index];
    if (!desired) return;
    const grid = block.querySelector('.page-grid');
    const existing = new Map([...grid.querySelectorAll('.page-card')].map(card => {
      const match = card.querySelector('h5')?.textContent.match(/(\d+)/);
      return [match ? Number(match[1]) : 0, card];
    }));
    grid.innerHTML = '';
    for (let page = desired[0]; page <= desired[1]; page += 1) {
      let card = existing.get(page);
      if (!card) {
        card = document.createElement('article');
        card.className = 'page-card';
        card.innerHTML = `<img class="book-page" loading="lazy" src="materials/week-page${page}.png" alt="TRY! N4 教材第${page}页"><h5>教材第 ${page} 页</h5>`;
      }
      grid.appendChild(card);
    }
  });
}

function addPageAudio() {
  document.querySelectorAll('.page-card').forEach(card => {
    const match = card.querySelector('h5')?.textContent.match(/(\d+)/);
    const tracks = match ? audioByPage[Number(match[1])] : null;
    if (!tracks || card.querySelector('.page-audio')) return;
    const player = document.createElement('div');
    player.className = 'page-audio';
    player.innerHTML = `<label>本页音频 · ${tracks.map(t => `Track${String(t).padStart(3, '0')}`).join('、')}</label><select aria-label="选择本页音轨">${tracks.map(t => `<option value="${t}">播放 Track${String(t).padStart(3, '0')}</option>`).join('')}</select><audio controls preload="none" src="${audioSrc(tracks[0])}"></audio>`;
    card.appendChild(player);
    const select = player.querySelector('select');
    const audio = player.querySelector('audio');
    select.addEventListener('change', () => { audio.src = audioSrc(Number(select.value)); });
    audio.addEventListener('ended', () => {
      const chain = document.querySelector('#chainAudio');
      if (!chain?.checked) return;
      const current = tracks.indexOf(Number(select.value));
      if (current < tracks.length - 1) {
        select.value = tracks[current + 1];
        audio.src = audioSrc(tracks[current + 1]);
        audio.play().catch(() => {});
        return;
      }
      const players = [...document.querySelectorAll('.page-audio audio')];
      const next = players[players.indexOf(audio) + 1];
      if (next) next.play().catch(() => {});
    });
  });
}

function addPlayerToggle() {
  const anchor = document.querySelector('#sprintDays');
  if (!anchor || document.querySelector('#chainAudio')) return;
  anchor.insertAdjacentHTML('beforebegin', '<div class="player-tools"><label><input id="chainAudio" type="checkbox" checked> 音频自动连播</label><span>当前页播放完后，自动进入本页下一条或下一张有音频的教材页</span></div>');
}

function setupSwipeViewer() {
  const viewer = document.querySelector('#viewer');
  const image = document.querySelector('#viewerImage');
  if (!viewer || !image) return;
  const prev = document.createElement('button');
  prev.className = 'viewer-prev';
  prev.type = 'button';
  prev.setAttribute('aria-label', '上一张');
  prev.textContent = '‹';
  const next = document.createElement('button');
  next.className = 'viewer-next';
  next.type = 'button';
  next.setAttribute('aria-label', '下一张');
  next.textContent = '›';
  const count = document.createElement('div');
  count.className = 'viewer-count';
  viewer.append(prev, next, count);
  let gallery = [];
  let index = 0;
  let startX = 0;
  const update = () => {
    const current = gallery[index];
    if (!current) return;
    image.src = current.src;
    image.alt = current.alt;
    count.textContent = `${index + 1} / ${gallery.length}`;
    prev.hidden = gallery.length < 2;
    next.hidden = gallery.length < 2;
  };
  const move = offset => {
    if (!gallery.length) return;
    index = (index + offset + gallery.length) % gallery.length;
    update();
  };
  const open = target => {
    const scope = target.closest('.course-block') || target.closest('.lesson-card') || document.body;
    gallery = [...scope.querySelectorAll('.book-page')];
    index = Math.max(0, gallery.indexOf(target));
    viewer.classList.add('on');
    update();
  };
  document.addEventListener('click', event => {
    if (event.target.matches('.book-page')) open(event.target);
  });
  prev.addEventListener('click', event => { event.stopPropagation(); move(-1); });
  next.addEventListener('click', event => { event.stopPropagation(); move(1); });
  viewer.addEventListener('touchstart', event => { startX = event.changedTouches[0].screenX; }, {passive: true});
  viewer.addEventListener('touchend', event => {
    const distance = event.changedTouches[0].screenX - startX;
    if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
  }, {passive: true});
  document.addEventListener('keydown', event => {
    if (!viewer.classList.contains('on')) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'Escape') viewer.classList.remove('on');
  });
}

normalizeCoursePages();
addPageAudio();
addPlayerToggle();
setupSwipeViewer();
