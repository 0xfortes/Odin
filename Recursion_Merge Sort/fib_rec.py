def fibsRec(n):
    if n == 1:
        return [0]  # Base case
    elif n == 2:
        return [0, 1]  # Base case
    else:
        fib_sequence = fibsRec(n-1)  # Recursively call fibsRec
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])  # Generating next Fibonacci number
        return fib_sequence
    
result = fibsRec(8)
print(result)