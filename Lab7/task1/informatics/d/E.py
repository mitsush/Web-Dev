n = int(input())
nums = list(map(int, input().split()))
print("YES" if any(nums[i - 1] == nums[i] for i in range(1, n)) else "NO")