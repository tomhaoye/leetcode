# Write your MySQL query statement below
DELETE FROM Person WHERE Id NOT IN (SELECT Id FROM (SELECT MIN(Id) as Id FROM Person GROUP BY Email) b);
