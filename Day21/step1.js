// p.276 : Math 객체

const num = Math.random();  // 0 ~ 1 사이 난수.
console.log(num);


// 0이상 ~ 10 미만 사이의 난수
console.log(num * 10);

// 0이상 ~ 50 미만 사이의 난수
console.log(num * 50);

// 1이상 ~ 51 미만 사이의 난수
console.log(num * 50 + 1);

// -5이상 ~ 5미만 사이의 난수
console.log(num * 10 - 5);

// -25이상 ~ 25미만 사이의 난수
console.log(num * 50 - 25);

console.log(Math.floor(3.74));      // Math.floor() 소수점 버림 [ * 소수점 연산시에는 오차가 존재할수 밖에 없다. ]
console.log(parseInt(3.74));        // parseInt() 정수로 변환
console.log(3.14.toFixed());        // 반올림 

// -5이상 ~ 5미만 사이의 정수만
console.log(Math.floor(num * 10 - 5));
// -25이상 ~ 25미만 사이의 정수만
console.log(Math.floor(num * 50 - 25));

// p.291 : 객체 속성 여부 확인

const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000 ,
    puulisher : '한빛미디어'
}
// - 변수/상수 이름 정의할떄 주의할점 1 : 숫자시작X 2. 일부특수문자만가능 3. 뛰어쓰기X 4. 키워드X


// 객체에 속성여부 확인 방법 
if(object.name !== undefined){ console.log('name : 속성 존재') }
else{ console.log('name : 속성 없음') }

if(object.price !== undefined){ console.log('price : 속성 존재')}
else{console.log('price : 속성 없음')}

if(object.puulisher !== undefined){console.log('puulisher : 속성 존재')}
else{console.log('puulisher : 속성 없음')}