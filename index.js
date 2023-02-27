//question one

function InstagramPost(handleOfAuthor,content,anImageLink,numberOfViews,numberOfLikes){
    this.handleOfAuthor=handleOfAuthor;
    this.content=content;
    this.anImageLink=anImageLink;
    this.numberOfViews=numberOfViews;
    this.numberOfLikes=numberOfLikes

}

//question two

const post1=new InstagramPost('emma','i love books','https://www.funbooks.com',200,180);
const post2=new InstagramPost('emma','i love music','https://www.music.com',500,450);

//question 3a

function createPerson(name,age,location){
return {
    name,
    age,
    location
}
}

const person1=createPerson('musa',12,'kano');

//question 3b create jambScore factory function

function createJambScores(eng,govt,lit,crk){
    return{
        eng,
        govt,
        lit,
        crk
    }
}

// create an instance of the jambScore object for musa
const score1=createJambScores(70,85,82,94);

//add the jambScore instance to the musa person object above
person1.jambScore=score1;


//question four

//1.
//object.assign(destination,source) ;
const obj1={
    name:'wa',
    gender:'female'
}

const obj2={
    age:12,
    food:'rice'
}
Object.assign(obj1,obj2);
console.log('obj1');
console.log(obj1);
console.log('obj2');
console.log(obj2);

//2.
//spread operator
const person2={
    name:'abi',
    age:9,
    sport:'football'
}

const person4={...person2};
person4.name='mike'
console.log('person4');
console.log(person4);
console.log('person2');
console.log(person2);

//3.
//JSON.parse(JSON.stringnify(data));
const subject1={
    subjectA:'math',
    subjectB:'english'
}


const subject2=JSON.parse(JSON.stringify(subject1));
subject2.subjectA='biology';
console.log('subject1');
console.log(subject1);
console.log('subject2');
console.log(subject2);

//question five
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 

