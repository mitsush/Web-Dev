n = int(input())
nums = list(map(int, input().split()))
print(sum(nums[i - 1] <  nums[i] and nums[i + 1] < nums[i] for i in range(1, n - 1)))