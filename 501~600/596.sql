# Write your MySQL query statement below
select class from (select class from courses group by class,student) b group by class having count(0) >= 5;
