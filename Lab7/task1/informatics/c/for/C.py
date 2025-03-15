a = int(input())
b = int(input())

start = int(a ** 0.5)
if start ** 2 < a:
    start += 1

for i in range(start, int(b ** 0.5) + 1):
    print(i ** 2, end=" ")
