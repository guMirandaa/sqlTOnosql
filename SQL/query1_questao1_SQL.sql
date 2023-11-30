select st.name as nome_aluno, ist.name as nome_instrutor, cs.title as nome_curso from student as st
inner JOIN advisor as ad on ad.s_ID = st.id
INNER JOIN instructor as ist on ist.id = ad.i_ID
INNER JOIN course as cs on cs.dept_name = ist.dept_name
INNER JOIN teaches as tc on tc.course_id = cs.course_id