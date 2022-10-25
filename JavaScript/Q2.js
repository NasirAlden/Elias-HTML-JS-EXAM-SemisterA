let uniqueNumber = (nums) => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  const [index] = set;
  return index;
};

let nums = [2, 2, 1];
console.log(uniqueNumber(nums));
nums = [4, 1, 2, 1, 2];
console.log(uniqueNumber(nums));
nums = [1];
console.log(uniqueNumber(nums));
