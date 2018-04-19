//Manual reverse method
		console.log('Reverse method:');
		function rev(arr){
			var i,
				len = arr.length,
				r = '';
			for(i = len-1; i >= 0; i -= 1) {
				r += arr[i];
			}
			console.log(r);
		}
		rev('hello');



		console.log('Reverse method (faster):');
		function rev(arr){
			var i,
				len = arr.length-1,
				r = '';
			for(i = len, r = ''; i >= 0; r += arr[i--]) {}
			console.log(r);
		}
		rev('hello');


//Positive numbers. Square root.
		function positive(arr){
			var i, b=0;
			for(i = 0; i < arr.length-b; i += 1) {
				if(arr[i] > 0){
					arr[i] = Math.sqrt(arr[i]);
				}
				else{
					arr.splice(i, 1);
				}
			}

			return arr;
		}

		console.log(positive([9, -3, 4, -9, 100]));




//Return largest numbers in arrays
		function largestNumbers(arr){
			var i, j, maxNumber = 0, newArr = [];

			for (i = 0; i<arr.length; i+=1){

				for (j=0; j<arr[i].length; j+=1) {

					if (arr[i][j] > maxNumber) {
						maxNumber = arr[i][j];
					}
					
				}
				newArr.push(maxNumber);
				maxNumber=0;
			}

			return newArr;
		}

		console.log(largestNumbers([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Checking for positive numbers
		function checkingPositiveNum(arr){
			function pos(arr) {
				return arr < 0;
			}

			return arr.some(pos);

		}

		console.log(checkingPositiveNum([1, -2, 3, 2, -4, 5]));



//Chunky Monkey
//-------------------------------------------------------
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

	function chunkArrayInGroups(arr, size) {
	  
	  var k=0, i, j, newArr=[[]],
	      arrSize = arr.length,
	      row = Math.ceil(arr.length/size);

		if(k < arrSize) {

		    for (i = 0; i < row; i+=1){
		    	newArr[i]=[];

				for (j = 0; j < size; j+=1) {
					if(arr[k] == null){
						break;
					}
					console.log(i,j);
					newArr[i][j]=arr[k];
					++k;
				}			

			}
		}
	  return newArr;
	}

	chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


//or
		function chunk(arr,size){
			var i, newArr=[], len=arr.length;
			for(i=0; i<len;i+=size){
				newArr.push(arr.slice(i,i+size))
				// newArr[i]=arr.slice(i,size);
				// start=size;
				// size+=size;
			}
			return newArr;
		}
		chunk([1,2,3,4,5,6,7],3);



//Slasher Flick
//-------------------------------------------------------
//Return the remaining elements of an array after chopping off n elements from the head.
	function slasher(arr, howMany) {
	  var newArr = arr.slice(howMany);
	  return newArr;
	}

	slasher(["burgers", "fries", "shake"], 1);



//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
	function checking(arr) {
		var i, size = arr.length - 1;

		for(i = 0; i < size; i+=1) {
			var n = (arr[i]==arr[i+1] ? true : false);

			if(n) {
				break;
			}

		}

		return n;
	}

	console.log(checking([1,2,5,7,9,10,5]));

//or
	var arr = [1, 5, 10, 6, 6, 8, 20], result;

	    result = 'no';
	    for(i = 0; i < arr.length; i+=1) {
	      if(i > 0 && arr[i] === arr[i - 1]){
	      result = 'yes';
	      break;
	    } 
	  }
	  console.log(result);



//Mutations
//------------------------------------------------------
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
	function mutation(arr) {
	  var str1 = arr[0].toLowerCase(),
	      str2 = arr[1].toLowerCase(),
	      i,
	      length2 = str2.length,
	      result;
	  
	   for(i = 0; i < length2; i+=1){
	      result = str1.indexOf(str2[i]);
	      console.log('result='+result+' i='+i+' str1='+str1+' str2='+str2);
	      if (result === -1){
	        return false;
	      }
	    }

	  return true;  
	}

	console.log(mutation(["hello", "neo"]));

//or
	function mutation(arr) {
	        var i;
	        for(i = 0; i < arr[1].length; i += 1){
	            if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
	                return false;
	            }
	        }
	        return true;
	    }
	    console.log(mutation(["voodoo", "vd"]));



//Falsy Bouncer
//-------------------------------------------------------
//Remove all falsy values from an array.
	function bouncer(arr) {
		var val = arr.filter(function(num) {
			return num!==null && num!==false && num!=='' && num!==undefined && num!==0 && (!isNaN(num) || typeof(num)=='string');
		});

		return val;
	}

	bouncer([7, "ate", "", false, 9]);


//or
	function bouncer(arr) {
	  return arr.filter(function(t) {
	    return !!t; //!! преобразовывает в булевой тип  
	  });
	}

	bouncer([7, "ate", "", false, 9]);
	}


//or
	function bouncer(arr) {
	  return arr.filter(Boolean);
	}