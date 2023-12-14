// for 문을 이용해 문자열을 거꾸로 바꾸는 방법

function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  var originalString = 'Hello, World!';
  var reversedString = reverseString(originalString);
  console.log(reversedString);
  




  // 3번째 문자마다 다른문자를 추가해 문자열을 수정하는 방법 splice 메서드를 사용해 3번쨰에 X 추가

  function addCharacterEveryThird(str, charToAdd) {
    var result = str.split('');
    for (var i = 2; i < result.length; i += 4) {
      result.splice(i, 0, charToAdd);
    }
    return result.join('');
  }
  
  var originalString = 'ABCDEFGHIJK';
  var modifiedString = addCharacterEveryThird(originalString, 'X');
  console.log(modifiedString);
  

  // RPG 캐릭터 생성 함수
function createCharacter(name, classType, health, attack, defense) {
    return {
      name: name,
      classType: classType,
      health: health,
      attack: attack,
      defense: defense,
      // 다양한 기능을 추가할 수 있습니다.
      // 예: 데미지를 입히는 함수
      dealDamage: function (target) {
        var damage = this.attack - target.defense;
        target.health -= damage;
        console.log(`${this.name}이(가) ${target.name}에게 ${damage}의 데미지를 입혔습니다.`);
      },
      // 회복하는 함수
      heal: function (amount) {
        this.health += amount;
        console.log(`${this.name}이(가) ${amount}만큼 회복했습니다. 현재 체력: ${this.health}`);
      }
    };
  }
  
  // 테스트를 위한 RPG 캐릭터 생성
  var player = createCharacter('영웅', '전사', 100, 20, 10);
  var enemy = createCharacter('악당', '도적', 80, 15, 8);
  
  // 공격 및 회복 테스트
  player.dealDamage(enemy);
  enemy.dealDamage(player);
  player.heal(10);
  enemy.heal(5);
  