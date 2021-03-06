/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {
	let min = 0;
	let max = nums.length - 1;
	let mid = Math.floor(max/2);
	const search = () => {
		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			min = mid + 1;
		} else if (target < nums[mid]) {
			max = mid - 1;
		}
		mid = min + Math.floor((max - min) / 2);
		return search();
	}
	return search();
};
