a = int(input())
b = int(input())

start = a if a % 2 == 0 else a + 1

for i in range(start, b + 1, 2):
    print(i, end=" ")
