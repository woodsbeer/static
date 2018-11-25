{
  //题干，输入两句话，查找他们之间只出现一次的单词
  function getWordOnlyOne(string1, string2) {
    //用一个对象存储（对象可以看做是一个键值对的集合）
    let cable = {};
    //字符串拆分成数组，以空格作为拆分点
    let arr1 = string1.split(" ");
    let arr2 = string2.split(" ");
    //合并两个数组
    let arr = arr1.concat(arr2)
    let res = [];
    //把数组和出现的次数存进对象
    for (let word of arr) {
      if (cable[word]) {
        cable[word] += 1;
      }
      else
        cable[word] = 1;
    }
    //遍历对象，找到对应值为1的键值对，把键放在返回数组里面
    for (let word in cable) {
      if (cable[word] === 1)
        res.push(word)
    }
    return res;
  }

  console.log(getWordOnlyOne(' hellow   boy', 'game boy'));  //hellow game
}
{
  //题干
//   给定一个编码字符串 S。为了找出解码字符串并将其写入磁带，从编码字符串中每次读取一个字符，并采取以下步骤：
// 如果所读的字符是字母，则将该字母写在磁带上。
// 如果所读的字符是数字（例如 d），则整个当前磁带总共会被重复写 d-1 次。
// 现在，对于给定的编码字符串 S 和索引 K，查找并返回解码字符串中的第 K 个字母。
//   输入：S = "leet2code3", K = 10
//   输出："o"
//   解释：
// 解码后的字符串为 "leetleetcodeleetleetcodeleetleetcode"。
// 字符串中的第 10 个字母是 "o"。

  function getIndexByMyString(string, k) {
    const N = string.length;
    let size = 0;
    //先得到生产成的那个编码字符串的长度
    for (let c of string) {
      if (!isNaN(c)) {
        size *= c;
      }
      else {
        size += 1;
      }
    }
    //思路 我们为什么要逆向解析呢，根据string的逆向解析可以让编码字符串回到初始的状态，随时和key比较如果相等的话就返回
    //因为每次key和size会一起被除，所以他们最后都会在小于string的长度范围
    //把传进来的string从后往前解析，如果最后一位是数字，我们的编码字符串就除这个数字，得到更小的一个被循环的字符串
    //如果k小于这个被除过的字符串长度，不影响，如果k大于这个长度，k变成和他的余数，因为这个字符串本来也是不断循环的
    //我们现在要的那个下标位置现在定位在更小的字符串中，如果string下一个循环的末尾还是数字，继续相除编码数组
    //如果string的末尾是字母的话编码数组长度减一（和创建编码数组时候对应）
    //k，也就是我们的目标位置，始终是比当前编码长度小的，
    //每次循环的时候我们让原始字符串的末尾匹配解码字符串的末尾，j对应key，因为在生成的时候每一个j，也就是当时的最后一个数对应一个解码的长度
    //最后匹配的时候key=解码长度，，而且当前的字符串的那位不是数字的话，解码中key的那个位置等于当前解码长度的最后一位等于string中j对应的字母
    //如果j对应的是数字的话length还要再除一遍，然后key和length一定还是整除，取出这个j对应的字符即可（他也是上一次循环的解码字符串的末尾数字）
    for (let j = N - 1; j >= 0; j--) {
      k %= size;

      if (k === 0 && isNaN(string[j])) {
        return string[j]
      }
      if (!isNaN(string[j])) {
        size /= string[j]
      }
      else {
        size--
      }
    }
  }

  console.log(getIndexByMyString('leet2code3', 10));  //'o'
  console.log(getIndexByMyString('h3a2', 3)); // hhhahhha 'a'
}
{
  //二分法查找
  //题干
//   珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
//
// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，
// 她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。
//
// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
//
// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
  //输入: piles = [3,6,7,11], H = 8
  // 输出: 4
  function getSpeedEat(arrays, totalTime) {
    //二分法的范围定在一到一千
    let min = 1;
    let big = 1000;
    while (min < big) {
      let mid = Math.floor((min + big) / 2);
      //快了
      if (canEatSuccess(arrays, totalTime, mid)) {
        big = mid;
      }
      //慢了
      else {
        //假设我们的mid是0，t是1，j是1，如果不加一位
        min = mid + 1;
      }
    }
    //找到了
    return min
  }

//判断一个速度行不行
  function canEatSuccess(arrays, totalTime, speed) {
    let time = 0;
    for (let item of arrays) {
      time += Math.ceil(item / speed);
    }
    return time <= totalTime
  }

  console.log(getSpeedEat([3, 6, 7, 11], 8));
}

{
  //重写getIndexByMyString
  function getIndexByMyString1(string, key) {
    let length = 0;
    for (let s of string) {
      if (isNaN(s))
        length++;
      else{
        length *= s;
      }

    }
    for (let i = string.length - 1; i >= 0; i--) {
      key =  key%length;
      if (isNaN(string[i]) && key === 0) {
          return string[i]
      }
      if (!isNaN(string[i])) {
        length = length / string[i];
      }
      else {
        length--;
      }
    }
  }
  console.log(getIndexByMyString1('leet2code3', 10));  //'o'
}

