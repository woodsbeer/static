{
  //計算兩個長方形所覆蓋的面積，每個長方形都是由左下頂點與右上頂點決定，如圖所示。
  // 假設覆蓋面積不會過int的最大值。
  // 思路
  // 先考慮兩個長方形不交疊的情況，只要單純的計算面積相加即可
  // AB,EF分別為左下頂點，CD,GH分別為右上頂點，如果A>=G表示第一個長方形在第二個長方形右側而且面積不重疊
  // 同樣方法可判斷兩個長方形其他三個點是否有交疊的情況
  // 如果有交疊的情況發生，使用max(A,E)可以找出交疊正方形的左下頂點，同樣方法可以找出交疊正方形正確位置並計算面積
  //八个参数分别是两个矩形左下角的坐标，右上角的坐标
  function getSumFect(a, b, c, d, e, f, g, h) {
    //分别两个矩形的面积
    const s1 = Math.abs(a - c) * Math.abs(b - d);
    const s2 = Math.abs(e - g) * Math.abs(f - h);
    //如果没有重叠的情况
    if (a >= g || c <= e || d <= f || b >= h) {
      return s1 + s2;
    }
    //如果有重叠，计算两个重叠的面积
    //注意计算重叠的时候是获取左边的点中最右的点，右侧两点中最左的那个点，下面两个点中偏上的那个点，这样我们就得到的中间那个重叠部分的上下的店的坐标
    //因为偏向中间的点才会重合
    const chong = Math.abs(Math.max(a, e) - Math.min(c, g)) * Math.abs(Math.max(b, f) - Math.min(d, h));
    return s1 + s2 - chong
  }

  console.log(getSumFect(-3, 0, 3, 4, 0, -1, 9, 2));
}
{
  //计算一个数里面有几个质数
  function countPrimes(num) {

    //从3开始才有非质数
    if (num <= 3) {
      return 1
    }
//在考虑大于三的情况，要加上基础的那个2
    let count = 1;
//小于num的数字中，也是只有基数才有可能是质数
    for (let i = 3; i <= num; i = i + 2) {
      //判断一个数之前先假定他是质数
      let noZ = true;
      for (let j = 2; j * j <= i; j++) {
        //如果i这数是质数的话，结束内部自循环，
          if (i%j===0){
            noZ=false
            break
          }
      }
      //内部循环的下面，如果这个i还是质数的话，总数加一
      if (noZ) {
        count++
      }
    }
    return count;
  }

  console.log(countPrimes(10));
}

