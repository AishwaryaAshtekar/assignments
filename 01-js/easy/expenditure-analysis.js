/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const TotalSpentByCategory = {};

  // Iterate over each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;
    // Add the price to the total spent for the category
    TotalSpentByCategory[category] = (TotalSpentByCategory[category] || 0) + price;
  }

  // Convert TotalSpentByCategory object to an array of objects
  const result = Object.entries(TotalSpentByCategory).map(([category, total]) => ({
    category,
    totalSpent: total
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
