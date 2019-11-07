function queueTime(customers, n) {
  let total = 0;
  let currCustomers = [];
  while (customers.length) {
    for (let i = currCustomers.length; i < n && customers.length; i++) {
      currCustomers.push(customers.shift());  // cust = [2,3,4] curr = [1]
    };
    let low = Math.min(...currCustomers);
    let currCopy = [];
    currCustomers.forEach((cust, idx) => {
      if (cust - low > 0) currCopy.push(cust - low);
    })
    currCustomers = currCopy;
    total += low;
  }
  return total;
}

const first = queueTime([1,2,3,4], 1);
console.log(first);

const second = queueTime([2, 2, 3, 3, 4, 4], 2);
console.log(second);

const third = queueTime([1, 2, 3, 4, 5], 100);
console.log(third);