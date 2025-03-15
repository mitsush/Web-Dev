n = int(input())
nums = list(map(int, input().split()))
print(*[num for num in nums if num % 2 == 0])