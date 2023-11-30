select dp.dept_name, dp.budget, (sum(ist.salary) / count(ist.name)) as media_salario, count(st.name) as total_alunos from student as st
INNER JOIN department as dp on dp.dept_name = st.dept_name
INNER JOIN instructor as ist on ist.dept_name = dp.dept_name
group by dp.dept_name