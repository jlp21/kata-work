function stringTransformer(str) {
    // Reverse a string and capitalization
      let newLetters = "";
      for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
          newLetters += str[i].toUpperCase();
        }else {
          newLetters += str[i].toLowerCase();
        } 
      } 
      let stringArr = newLetters.split(" ");
      let reverse = [];
      for(let i=(stringArr.length)-1; i>=0; i--)
        {
          reverse.push(stringArr[i]);
        } return reverse.join(" ")
  }

  function evenOrOdd(str) {
      // Count evens/odds
    const num = str.split('');
    console.log(num)
    let evens = 0;
    let odds = 0;
    num.forEach(x => {
      if(x % 2){
        odds += Number(x);
      }else {
        evens += +x;
      }
    });
    //   const [evens, odds] = [...str].reduce((a, v) => {
    //     if(v % 2) {
    //       a[1]+= Number(v);
    //     }else {
    //       a[0] += +v;
    //     }
    //     return a;
    //   }, [0,0])
    if (evens > odds){
      return("Even is greater than Odd")
    }else if( odds > evens){
      return("Odd is greater than Even")
    }else if( odds == evens){
      return("Even and Odd are the same")
    }
    }

    ///remove vowels from a string
    function disemvowel(str) {
        return str.replace(/[aeiou]/gi,'');
      }

    ///finds highest/lowest numbers
    function highAndLow(numbers){
        const num = numbers.split(" ");
        console.log(num);
        const max = Math.max(...num);
        const min = Math.min(...num);
        return `${max} ${min}`;
      }

      ///Find letters matching alphabet position
      function solve(arr){  

        const solution = arr.map((wordOg) => {
          let count=0;
          const word = wordOg.toLowerCase();
          for(let i=0; i<word.length; i++) {
            const characterIterating = word[i];
            console.log(characterIterating)
            const positionOf = word.charCodeAt(i) - 97;
            console.log(positionOf)
            if(positionOf === i) {
              count++;
            }
          }
          return count;
        })
        return solution;
        };

        ///Higher order function Filter example

        function isRubyComing(list) {
            // thank you for checking out my kata :)
            const ruby = list.filter(dev => (dev.language === 'Ruby'));
            if(ruby.length >= 1){
              return true;
            } else {
              return false;
            }
          };

          function maxPizza(cuts, count=2) {
            if (cuts < 0) {
                return -1
              } switch (cuts) {
                case 0:
                return 1;
                case 1:
                  return 2;
                case 2:
                  return 4;
                default:
                  return getCuts(cuts)
              }
              function getCuts(cuts) {
                let count = 4
                while(cuts > 2) {
                  count += cuts;
                  cuts--
                } return count;
              }
            }