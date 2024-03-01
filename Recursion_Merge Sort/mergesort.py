def mergeSort(arr):
    if len(arr) <= 1:  # Base case: if the array has 0 or 1 element, it's already sorted
        return arr
    
    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort both halves
    left_sorted = mergeSort(left_half)
    right_sorted = mergeSort(right_half)
    
    # Merge the sorted halves
    return merge(left_sorted, right_sorted)

def merge(left, right):
    result = []
    left_index = right_index = 0
    
    # Compare elements from both arrays and merge them in sorted order
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
    
    result.extend(left[left_index:])
    result.extend(right[right_index:])
    
    return result


print(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))  
print(mergeSort([105, 79, 100, 110]))       
