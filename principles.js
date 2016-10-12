var verbs = [
  'withhold', 'give', 'protect', 'eliminate', 'fight', 'transcend', 'defend',
  'dominate', 'support', 'earn', 'follow', 'sow', 'please', 'exemplify', 'embody',
  'keep', 'prevent', 'demonstrate', 'accumulate', 'celebrate', 'acknowledge',
  'remember', 'appreciate', 'communicate', 'love', 'discover', 'avoid', 'ignore',
  'ridicule', 'divide', 'believe', 'create', 'fear', 'question', 'undermine',
  'sabotage', 'know', 'see', 'bind', 'blaze', 'blind', 'conceal',
  'confuse', 'consume', 'detect', 'devastate', 'diminish', 'drain', 'empower',
  'enlighten', 'entangle', 'envelope', 'expand', 'hinder', 'escape', 'invigorate',
  'liberate', 'madden', 'pierce', 'rejuvenate', 'restore', 'stupefy', 'transform',
  'control', 'unsee', 'stop', 'tire', 'avenge', 'vex', 'weaken', 'locate', 'build',
  'explain', 'awaken', 'banish', 'bless', 'enhance', 'fabricate', 'forbid', 'burn',
  'harm', 'infect', 'imprison', 'revive', 'rescue', 'expand', 'bait', 'trap',
  'ensnare', 'lure', 'deceive', 'trick', 'isolate', 'extract', 'manipulate',
  'transport', 'smuggle', 'gaslight', 'lead', 'teach'
];

var ideals = [
  'beauty', 'honesty', 'integrity', 'gratitude', 'fairness', 'justice', 'respect',
  'accountability', 'self-respect', 'risk-taking', 'impulsiveness',
  'self-reliance', 'reciprocity', 'mercy', 'greed', 'indulgence', 'maturity',
  'whimsy', 'playfulness', 'youth', 'ambition', 'your word', 'duty', 'freedom',
  'logic', 'order', 'chaos', 'power', 'victory', 'humility', 'virtue', 'vice',
  'judgement', 'detachment', 'independence', 'surrender', 'hope', 'fear', 'kindness',
  'bravery', 'boldness', 'caring', 'caution', 'cleanliness', 'commitment',
  'compassion', 'courage', 'courtesy', 'curiosity', 'defiance', 'devotion',
  'discretion', 'empathy', 'enthusiasm', 'flexibility', 'focus', 'forgiveness',
  'friendliness', 'frugality', 'generosity',  'gentleness', 'grace', 'helpfulness',
  'honor', 'humbleness', 'humor', 'industry', 'innocence', 'joyfulness', 'knowledge',
  'love', 'loyalty', 'magnanimity', 'majesty', 'meekness',  'obedience', 'openness',
  'orderliness', 'patience', 'peace', 'purity',  'reliability', 'responsibility',
  'self-sacrifice', 'service', 'simplicity', 'sincerity', 'spontaneity',
  'steadfastness', 'strength', 'tact', 'thankfulness', 'thrift', 'tolerance',
  'toughness', 'tranquility', 'trust', 'unity', 'wonder', 'zeal'
];

var adjectives = [
  'beautiful', 'honest', 'integrous', 'grateful', 'fair', 'just', 'respectful',
  'accountable', 'self-respecting', 'risk-taking', 'impulsive',
  'self-reliant', 'reciprocal', 'merciful', 'greedy', 'indulgent', 'mature',
  'whimsical', 'playful', 'youthful', 'ambitious', 'honorable', 'dutiful', 'free',
  'logical', 'ordered', 'chaotic', 'powerful', 'victorious', 'humble', 'virtuous', 'immoral',
  'judgmental', 'detached', 'independent', 'surrendering', 'hopeful', 'fearful', 'kind',
  'brave', 'bold', 'caring', 'cautious', 'clean', 'committed', 'compassion',
  'courageous', 'courteous', 'curious', 'defiant', 'devoted',
  'discrete', 'empathetic', 'enthusiastic', 'flexible', 'focused', 'forgiving',
  'friendly', 'frugal', 'generous',  'gentle', 'graceful', 'helpful',
  'honoring', 'humble', 'humorous', 'industrious', 'innocent', 'joyous', 'knowledgable',
  'loving', 'loyal', 'magnanimous', 'majestic', 'meek',  'obedient', 'open',
  'orderly', 'patient', 'peaceful', 'pure',  'reliable', 'responsible',
  'self-sacrificing', 'servile', 'simple', 'sincere', 'spontaneous',
  'steadfast', 'strong', 'tactful', 'thankful', 'thrifty', 'tolerant',
  'tough', 'tranquil', 'trusting', 'united', 'wonderous', 'zealous'
];

var groups = [
  'animals', 'beasts', 'friends', 'warriors', 'aristocrats', 'commoners',
  'children', 'strangers', 'enemies', 'allies', 'followers', 'people',
  'humans', 'elves', 'dwarves', 'halflings', 'workers', 'women', 'men', 'pets'
];

var things = [
  'mines', 'weapons', 'magical objects', 'towers', 'houses', 'babies', 'food',
  'drink', 'wealth', 'boats', 'trees', 'jewelery', 'castles'
];

var scopes = [
  'all','all','all',
  'your own',
  'the best',
  'the worst',
]

var patterns = {
  'be ADJECTIVE to VERB': function (){ // nice and specific
    return "be " + pick(adjectives) + " to " + pick(verbs);
  },
  'VERB GROUP': function (){ // kinda good actually, maybe too simple with just 2 words
    return  pick(verbs) + " " + pick(groups);
  },
  'VERB THING': function (){ // pretty good
    return  pick(verbs) + " " + pick(things);
  },
  'VERB ADJECTIVE GROUP': function (){ //
    return  pick(verbs) + " "+pick(adjectives)+" " + pick(groups);
  },

  // These are more specific so maybe do them at a lower chance.  or maybe not

  'VERB to VERB': function (){ //  maybe a little vague?  but maybe its good, might require thinking
    return pick(verbs)+" "+ pick(groups) + " to " + pick(verbs) ;
  },
  'be ADJECTIVE for GROUP': function (){ // maybe now too obscure to be relevant // good stuff
    return "be " + pick(adjectives) + " to " + pick(groups);
  },
  'VERB IDEAL for GROUP': function (){ // works well, on the specific side
    return pick(verbs) + " " + pick(ideals)+ " for " + pick(groups);
  },
  'IDEAL is IDEAL': function (){ // can be great, sometimes too broad
    return pick(ideals) + " is " + pick(ideals);
  },
  'VERB IDEAL': function (){ // can be too broad if ideals are too broad
    return pick(verbs) + " " + pick(ideals);
  },

};

var pick = function (list) {
  if (Array.isArray(list)) {
    return list[Math.floor(Math.random() * list.length)];
  } else {
    var value;
    var count = 0;
    for (var item in list) {
      if (Math.random() < 1 / ++count) {value = item; }
    }
    return list[value];
  }
}

var principle = function () {
  return pick(patterns)();
}

console.log(patterns.length + " patterns");
console.log(ideals.length + " ideals");
console.log(adjectives.length + " adjectives");
console.log(verbs.length + " verbs");
console.log(groups.length + " groups");
console.log(things.length + " things");
console.log();
for (i=0;i<100;i++) {
  console.log(principle());
}