function arrangeNum(a) {
	const n = a.length;
	let low=0,mid=0,high=n-1;   //variables are set
	while(mid<=high){
		switch(a[mid]){
			case 0:     //if a[mid]==0
				//swap a[low] & a[mid], swapping by reference
				a[low] = a[low]+a[mid];
				a[mid] = a[low]-a[mid];
				a[low] = a[low]-a[mid];
				low++;      //increment low
				mid++;      //increment mid
				break;
			case 1:     //if a[mid]==1
				mid++;      //increment mid
				break;
			case 2:     //if a[mid]==2
				//swap a[mid] & a[high], swapping by reference
				a[mid] = a[mid]+a[high];
				a[high] = a[mid]-a[high];
				a[mid] = a[mid]-a[high];
				high--;     //decrement high
				break;
			default:
				return 'can not process this array'; 
		}
	}
	//returning adress of array(sorted)
	return a; 
}

console.log(arrangeNum([2,2,2,2,2,3,2,2,2,1,1,0,0,0,0,2,2,2,2,1,1,1,1]));