# Write your MySQL query statement below
select b.Id from Weather a join Weather b on to_days(a.RecordDate) = to_days(b.RecordDate) - 1 where b.Temperature > a.Temperature;
