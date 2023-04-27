1. prints 3 since i increments until the length of the list passed in as a parameter, which for [100,200,300] is 3. Moreover, i is var so it's updated most recently in the last for loop iteration.
2. prints 150. Since the last price in the list is 300, we do 300*0.5 in the last for loop iteration, and this is the last time discountedPrice is changed.Moreover, discountedPrice is var so it's updated most recently in the last for loop iteration.
3. prints 150. Since the last price in the list is 300, we do 150*100/100 in the last for loop iteration, which is 150. Moreover, finalPrice is var so it's updated most recently in the last for loop iteration.
4. returns [50,100,150]. finalPrice for each price in the parameter list is calculated and appended the discounted list. Since it is a var, it will take all the finalPrices and store them in this list to return.
5. error since i is a let variable and only holds value in the for loop block.
6. error since discountedPrice is a let variable and only holds value in the for loop block.
7. error since finalPrice is a let variable and only holds value in the for loop block.
8. returns [50,100,150]. discounted is defined in the scope of the function and since the return statement is in the function scope, it'll be the same as with the var case and work as intended.
9. error since i is a let variable and only holds value in the for loop block.
10. prints 3 since length is const and has function scope and the print statement is in the function.
11. returns [50,100,150]. discounted is const but has function scope, so it can be accessed in the for loop. And even though discountedPrice is const, it is redeclared in every for loop iteration, so no errors are thrown. It'll be the same as with the var case and work as intended.
12. 
- A: student.name;
- B: student['Grad Year'];
- C: student.greeting();
- D:  student['Favorite Teacher'].name;
- E: student.courseLoad[0];
13. 
- A: '35' -> integers map to their string representations
- B: 1 -> string map to their integer representations
- C: 3 -> null becomes 0 in number contexts
- D: '3null' -> converts null into a string and concats
- E: 4 -> true converted to 1 and added to 3
- F: 0 -> false becomes 0 and null becomes 0 and they are added together
- G: '3undefined' -> converts undefined into a string and concats
- H: NaN -> attempts to convert '3' to 3 and subtract undefined from it

14. 
- A: true -> '2' converted to 2 and 2>1 is true
- B: true -> '2' lexicographically comes before '12'
- C: true -> == does type coercion so '2' converted to 2 and 2 does equal 2
- D: false -> does not do type coercion so tries to compare string and int which isnt possible
- E: false -> converts true to 1 but 1 != 2
- F: true -> Boolean(2) evaluates to true as well and true = true

15. == does type conversion/coercion for potentially both sides of the expression before doing comparison, while === compares the the two ends as-is.

17. [2,4,6]. modifyArray takes [1,2,3] as a parameter, performs doSomething on each element of the parameter array (which doubles a number) and stores it as newArr to return.

18. ```
    1
    4
    3
    2
    ```