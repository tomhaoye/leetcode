# Write your MySQL query statement below
select a.Num as ConsecutiveNums from Logs a, Logs b, Logs c where (a.id = b.id+1 and b.id = c.id+1 and a.Num = b.Num and b.num = c.Num) GROUP BY a.Num;
