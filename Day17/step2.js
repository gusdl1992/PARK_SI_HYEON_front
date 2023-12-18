/*
    JS 자료형
        1. 숫자
        2. 문자열
        3. 불
        4. undefined
        5. 배열             [ 자료 , 자료 , 자료 ]
                                - 1.[ 숫자 , 문자열 ,불 ,배열 ]
                                - 2.[ 숫자, 문자열 , 불 배여레[] , 변수 , 상수 , 함수 , 객체{} ]

        6. 함수             function
                            - 1. const/let 변수명 = function(){}    익명함수
                            - 2. function 함수명(){}                선언함수

        7. 객체             { key : value , key : value , key value }
                                - 1.{
                                    key : 1,
                                    key : "유재석",
                                    key : true ,
                                    key : [] ,
                                    key : {} ,
                                    key : function( ){ }
                                }   

*/

// p.246

console.log( {} );  // Object

// 1. Object 객체를 만들어서 상수에 대입
const product = {
    제품명 : '7D 건조망고' , // key '제품명' , value ' 7D 건조 망고 ' = 속성property
    유형 : '당절임' ,
    성분 : '망고,설탕,메타중아황산나트륨,치자황색소' ,
    원산지 : '필리핀'
}

// 2. 객체 호출
console.log(product);
// 3. 객체내 속성 호출  객체명[' keyName '] : 해당하는 키의 값을 호출 vs 객체명.keyName : 해당하는 키의 값을 호출.
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);

console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);



// p.248

const 객체2 ={
    number : 273 ,
    string : '구름' ,
    boolean : true ,
    array : [52, 273, 103, 32] ,

    method : function(){
        console.log("객체2 메소드 실행")
    } ,
    객체3 : { method2 : function(){ }}
}
console.log(객체2)  // console : 객체 내 log 속성에 함수호출.
// document.querySelector();   // document : 객체내 querySelector 속성에 함수 호출
// .(온점) : 접근연산자 : 객체내 속성에 접근
객체2.method();         //객체2내 속성(메서드) 호출
객체2.객체3.method2();  // 객체2내 속성(객체3내 속성(메소드2)  호출)  호출

// p.249

const pet = {
    name : '구름' ,
    eat : function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다. `);
        // this란??? 함수내 에서 현재객체내 속성을 호출할때 사용하는 키워드.
        // this.key
    } ,
    eat2(food){}    // 함수명이 속성명을 대신한다.
}
pet.eat('도시락');
pet.eat('라면');

// p.249 ~ 250 : 속성추가

const studnet = { };
studnet.이름 = '윤인성'
studnet.취미 = '악기'
studnet.장래희망 = '생명공학자'
console.log(studnet);

// p.251 : 속성제거

delete studnet.장래희망;
console.log(studnet);

// p.254
/*
    1.  const object = {
            name : '혼자 공부하는 파이썬' ,
            price : 18000 , 
            publisher : '한빛미디어'
        }

    2. 속성추가 객체[속성] = 값 , 객체.속성 = 값

    3. 속성삭제 delete 객체명[삭제할속성명]

    4. 
        - 메소드속성
            print : function(long){}
        - 실행결과 예측
            - objet.print('es');
            빵는 스페인어로 pan입니다.
            this.ko 빵
            this.lang = lang:{ ko : '한국어' , en : '영어' }
            this.lang[es] = 스페인어
            this.[lang] = pan

        * this가 있으면 현재 객체내 속성. this가 없으면 매개변수
        

*/