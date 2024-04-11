function addComma(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function getNumberIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let overlap = [];
  let notInclude = [];
  let covered = new Array(21).fill(false);

  for (let interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i++) {
      covered[i] = true;
    }
  }

  for (let i = 0; i < intervals.length - 1; i++) {
    if (
      intervals[i][1] >= intervals[i + 1][0] &&
      intervals[i][1] < intervals[i + 1][1]
    ) {
      overlap.push([intervals[i + 1][0], intervals[i][1]]);
    }
  }

  let start = 0;
  while (start < covered.length) {
    if (!covered[start]) {
      let end = start;
      while (end < covered.length && !covered[end]) {
        end++;
      }
      notInclude.push([start, end - 1]);
      start = end;
    } else {
      start++;
    }
  }

  overlap = overlap.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t[0] === item[0] && t[1] === item[1])
  );

  return { overlap, notInclude };
}

function isFullAgeRangeCovered(list) {
  const sortedList = [...list].sort((a, b) => a.ageGroup[0] - b.ageGroup[0]);

  let expectedStart = 0;

  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i].ageGroup[0] !== expectedStart) {
      return false;
    }

    expectedStart = sortedList[i].ageGroup[1] + 1;
  }

  return expectedStart === 21;
}

export { isFullAgeRangeCovered, getNumberIntervals, addComma };
