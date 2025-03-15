n = int(input())
nums = list(map(int, input().split()))
print(sum(nums[i] > nums[i - 1] for i in range(1, n)))