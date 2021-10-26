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