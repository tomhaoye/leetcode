# Write your MySQL query statement below
select T.Email from (select count(Email) as amount,Email from Person group by Email) as T where T.amount !=1;
