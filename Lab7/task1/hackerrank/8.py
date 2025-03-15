n = int(input())
scores = list(map(int, input().split()))
unique_scores = list(set(scores))
unique_scores.sort(reverse=True)
second_max_score = unique_scores[1]
print(second_max_score)
