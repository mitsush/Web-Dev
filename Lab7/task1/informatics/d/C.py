n = int(input())
nums = list(map(int, input().split()))
print(len([num for num in nums if num > 0]))
