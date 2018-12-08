# Write your MySQL query statement below
select d.Department,d.Name as Employee,d.Salary From (select b.Name as Department,a.Name,Salary,(select count(DISTINCT Salary) from employee c where c.DepartmentId = a.DepartmentId and c.Salary > a.Salary) + 1 as Rank from employee a join department b on a.DepartmentId = b.Id) d where d.Rank <= 3 ORDER BY Department,Name,Salary DESC;
