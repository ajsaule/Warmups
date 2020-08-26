# // Intersection
# // Please complete this warmup in JavaScript without the use of any libraries.
# // You are given three arrays, write a function threeWayIntersection which only returns the common elements in all three arrays. For example:

def threeWayIntersection arr1, arr2, arr3, arrCount
    (arr1 + arr2 + arr3).group_by{|e| e}.keep_if{|_, e| e.length == arrCount}.keys
end 

p threeWayIntersection([1,3,4,1], [2,3,4,1], [3,4,7,8,9], 3)