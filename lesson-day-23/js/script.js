console.log('lesson day 23 - html functions, this keyword');

//hmtl function

const todaysTopics = [ 'HTML functions','This keyword',
'makeing keyboard small project'
]

console.log(todaysTopics);


//js ashiglaad element html deer nemeh

const topicHeader = document.createElement('h2');

//topic h2 dotor tekst nemeh

topicHeader.innerHTML = 'Lesson day';

//content id-tai element barij avah

let content = document.getElementById('content');

//h2 gedeg muchruu content id-tai element dotor nemeh

content.appendChild(topicHeader);

//todaytopics deeer ugsun utguudiig haruulahd
// UL bolon Li elementuud heregtei

let ulElement = document.createElement('ul');

//todayTopics utguudiig haruulah

for (let i = 0; i < todaysTopics.length; i++); {
// shineer li element uusgeh
let liElement = document.createElement('li');
//li element dotor todayTopics utgiig onooh
liElement.innerHTML = todaysTopics[i];
//ul element dotor li elementiig hiih
ulElement.appendChild(liElement);
}

//content id-tai element dotor ul element onoon

content.appendChild(ulElement);
