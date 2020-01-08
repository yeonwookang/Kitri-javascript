const id = 10;
const title = 'hello';

let mObj = {
    id,
    title,
    greet() {
        return 'hello';
    }
}

function test(obj) {
    let{id, title} = obj;
    console.log(id + ' ' + title);
}

test({
    id: 30,
    title: 'good afternoon'
});

const post = {
    id: 10,
    title: 'hello',
    content: 'test content',
    picUrl: 'http://....',
    likes: 50,
    tags: ['', '', '',''],
    comments: [
        {replyId: 101,
        author: {
            user_id: 'te.qwe',
            name: 'kim'
            },
        content: 'comments test',
        date: '2020-01-08'},
        {replyId: 102,
            author: 'kang',
            content: 'comments test222',
            date: '2020-01-07'},
    ]
}

const myArr = [1,2,3];
let [a,b,c=0,d=0] = myArr;