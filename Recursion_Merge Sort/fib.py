def fibs(n):
    fib_sequence = [0, 1] 
    if n <= 2:
        return fib_sequence[:n]  # Return sequence if n is less than or equal to 2
    else:
        for i in range(2, n):
            fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])  # Generating next Fibonacci number
        return fib_sequence
    
result = fibs(8)
print(result)