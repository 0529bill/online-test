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

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (
        list[i].ageGroup[1] >= list[j].ageGroup[0] &&
        list[i].ageGroup[0] <= list[j].ageGroup[1]
      ) {
        errors[j] = {
          index: j,
          message: { ...errors[j]?.message, age: `年齡區間不可重疊` },
        };
        errors[i] = {
          index: i,
          message: { ...errors[i]?.message, age: `年齡區間不可重疊` },
        };
      }
    }
  }

  return errors;
}

export default validateList;
