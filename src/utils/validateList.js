//T.C O(nlogn)
function validateList(list) {
  const errors = Array(list.length).fill(null);

  for (let i = 0; i < list.length; i++) {
    if (list[i].price === "0") {
      errors[i] = {
        index: i,
        message: { price: `不可以為空白` },
      };
    }
  }

  const sortedList = list
    .map((item, index) => ({ ...item, index }))
    .sort((a, b) => a.ageGroup[0] - b.ageGroup[0]);

  for (let i = 1; i < sortedList.length; i++) {
    if (sortedList[i].ageGroup[0] <= sortedList[i - 1].ageGroup[1]) {
      const currentIndex = sortedList[i].index;
      const prevIndex = sortedList[i - 1].index;
      errors[currentIndex] = {
        index: currentIndex,
        message: { ...errors[currentIndex]?.message, age: `年齡區間不可重疊` },
      };
      errors[prevIndex] = {
        index: prevIndex,
        message: { ...errors[prevIndex]?.message, age: `年齡區間不可重疊` },
      };
    }
  }

  return errors;
}

export default validateList;
