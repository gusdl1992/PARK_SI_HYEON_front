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
  


/*
HTML 이미지 간의 충돌을 확인하려면 두 이미지의 위치와 크기를 비교하여 충돌 여부를 판단해야 합니다. 
이미지의 좌표와 크기 정보는 이미지를 포함하는 부모 요소 또는 이미지 자체에서 얻을 수 있습니다.
아래는 간단한 예제 코드로, 두 이미지의 충돌을 확인하는 방법을 보여줍니다.
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>이미지 충돌 체크</title>
  <style>
    .image {
      position: absolute;
    }
  </style>
</head>
<body>

<img src="image1.jpg" alt="Image 1" class="image" id="image1" style="top: 50px; left: 50px; width: 100px; height: 100px;">
<img src="image2.jpg" alt="Image 2" class="image" id="image2" style="top: 70px; left: 70px; width: 100px; height: 100px;">

<script>
  function checkCollision() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    var rect1 = image1.getBoundingClientRect();
    var rect2 = image2.getBoundingClientRect();

    // 충돌 체크
    if (
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top &&
      rect1.left < rect2.right &&
      rect1.right > rect2.left
    ) {
      console.log('이미지 간 충돌이 발생했습니다.');
    } else {
      console.log('이미지 간 충돌이 발생하지 않았습니다.');
    }
  }

  // 페이지 로드 시 충돌 체크
  window.onload = checkCollision;
</script>

</body>
</html>


위의 코드에서 getBoundingClientRect 메서드를 사용하여 이미지의 좌표와 크기를 얻은 후, 두 이미지 간의 충돌을 체크하고 결과를 콘솔에 출력합니다. 
이 예제에서는 페이지 로드 시 자동으로 충돌을 체크하도록 했습니다. 페이지의 구조나 요구에 따라 이 코드를 이벤트 핸들러 등에 적용할 수 있습니다.



*/

/*
이미지의 위치와 크기 정보를 사용하여 간단한 수학적 계산을 통해 충돌 여부를 판단합니다.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>이미지 충돌 체크</title>
  <style>
    .image {
      position: absolute;
    }
  </style>
</head>
<body>

<img src="image1.jpg" alt="Image 1" class="image" id="image1" style="top: 50px; left: 50px; width: 100px; height: 100px;">
<img src="image2.jpg" alt="Image 2" class="image" id="image2" style="top: 70px; left: 70px; width: 100px; height: 100px;">

<script>
  function checkCollision() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    var rect1 = image1.getBoundingClientRect();
    var rect2 = image2.getBoundingClientRect();

    // 충돌 체크
    if (rect1.right > rect2.left && rect1.left < rect2.right &&
        rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
      console.log('이미지 간 충돌이 발생했습니다.');
    } else {
      console.log('이미지 간 충돌이 발생하지 않았습니다.');
    }
  }

  // 페이지 로드 시 충돌 체크
  window.onload = checkCollision;
</script>

</body>
</html>


이 방법에서는 두 이미지의 오른쪽, 왼쪽, 위, 아래 모서리의 좌표를 비교하여 간단하게 충돌 여부를 판단합니다. 
*/