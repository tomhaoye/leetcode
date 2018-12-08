# Write your MySQL query statement below
SELECT Score,
(SELECT count(DISTINCT Score) FROM Scores AS b WHERE a.Score<b.Score)+1 AS Rank 
FROM Scores AS a ORDER BY Rank;
