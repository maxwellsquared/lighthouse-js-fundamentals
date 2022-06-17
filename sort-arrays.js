const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  if (metric === "redness") {
    vegetables.sort((a,b) => b.redness - a.redness);
    //this sorts by redness in descending order. reverse for ascending

  } else if (metric === "plumpness") {
    vegetables.sort((a,b) => b.plumpness - a.plumpness);
  }
  return vegetables[0].submitter;

}


console.log(judgeVegetable(vegetables, "plumpness"));