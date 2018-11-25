{
  //把一个字符串中出现的元音字母顺序翻转
  //Given s = "hello", return "holle".
  // Given s = "leetcode", return "leotcede".
  function coverseYuanyin(s) {
    const yuanYinArr = [];
    for (let i = 0; i < s.length; i++) {
      if ((/^[aeiou]$/).test(s[i])) {
        yuanYinArr.push(s[i]);
      }
    }
    let yl = yuanYinArr.length - 1
    let sa = s.split('');
    for (let i = 0; i < sa.length; i++) {
      if ((/^[aeiou]$/).test(sa[i])) {
        sa[i] = yuanYinArr[yl--]
      }
    }
    return sa.join('')
  }

  console.log(coverseYuanyin('leetcode'));
}
{
  //給兩個字串s跟t，判斷他們是否是同構字。
  // 如果他們是同構字，表示s裡面毎個字元都可以拿來對應t的特定字元。
  // 全部的字元都要依順序被取代，而且s一種字元只會對應t一種字元，也可能對應到與自己相同的字元。
  //Given "egg", "add", return true.
  // Given "foo", "bar", return false.
  // Given "paper", "title", return true.

  //要让前一个字符串的每一个字符和后面的字符串对应，那就来两个存储map，分别以两个字符串中出现过的值作为key，另一个字符串中对应位置的值作为value

  function sameStr(s1, s2) {
    const c1 = {};
    const c2 = {};
    if (s1.length !== s2.length)
      return false;
    for (const s1Key in s1) {
      //循环每一位数，获取他们的值
      let v1 = s1[s1Key];
      let v2 = s2[s1Key];
      // 对于两个字符串，分别用两个对象保存他们每个字符合下一个字符串中对应的，用键值对保存这两个字符串的关系
      //第一次出现就设置值为另一个字符串的值
      if (!c1[v1]) {
        c1[v1] = v2
      } else if (c1[v1] !== v2) {
        //已经出现过了，判断保存的值是不是和后一个字符串相等
        return false
      }
      if (!c2[v2]) {
        c2[v2] = v1
      } else if (c2[v2] !== v1) {
        return false
      }
    }
    return true
  }

  console.log(sameStr('jojo', 'hohq'));
}
{
  //pattern = "abba", str = "dog cat cat dog" should return true. pattern = "abba", str = "dog cat cat fish" should return false.
  function modelStr(pat, str) {
    let patCal = {};
    let strCal = {};
    const atrs = str.split(' ');
    const pats = [];
    for (let i = 0; i < pat.length; i++) {
      pats.push(pat[i])
    }
    if (pats.length !== atrs.length) {
      return false
    }
    for (let i = 0; i < pats.length; i++) {
      const ipats = pats[i];
      const istrs = atrs[i];
      //这里如果因为没有存储过的话会存储对应的值，存储过后就不需要在判断else逻辑了
      if (!patCal[ipats]) {
        pats[ipats] = istrs;
      }
      //这里不用else，因为如果是存储过上面的代码不会执行，
      if (pats[ipats] !== istrs) {
        return false;
      }
      if (!strCal[istrs]) {
        strCal[istrs] = ipats
      }
      if (strCal[istrs] !== ipats) {
        return false
      }
    }
    return true
  }

  console.log(modelStr('abba', 'dog cat cat dog'));   //true
}
{
  //一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。
  // 範例：
  // ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。

  //思路是从最初的两个取到最大的开头，然后用这个开头每次和后面的去比较
  function getLongestHeaStr(array) {
    let head = array[0];
    let index = 1;
    while (index < array.length) {
      head = getHead(head, array[index])
      index++
    }
    return head
  }

  function getHead(str1, str2) {
    let res = ''
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i])
        res += str1[i]
    }
    return res
  }

  console.log(getLongestHeaStr(['abcd', 'abccc', 'abdec']));
}

{
  //給一個指針needle跟字串堆疊haystack，回傳指針第一次在堆疊中出現的位置index。
  // 範例：
  // haystack = "abcdede"
  // needle = "de"，"de"第一次出現的位置為3
  //如果用api的话可以直接indexOf
  function lanjieStr(model, str) {
    if (str.length===0||!str)
      return 0
    if (model.length===0||str.length>model.length)
      return -1;
    for (let i = 0; i < model.length; i++) {
        // if (model.substr(i,str.length)===str){  //在这个例子他和下面的slice都可以
        if (model.slice(i,str.length+i)===str){
          return i
        }
    }
  }

  console.log(lanjieStr('abcd', 'cd'));
}

