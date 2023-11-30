use('db_projeto');

const questao7 = db.student.aggregate([
  {
    $lookup: {
      from: "department",
      localField: "dept_name",
      foreignField: "dept_name",
      as: "department_info"
    }
  },
  {
    $unwind: "$department_info"
  },
  {
    $lookup: {
      from: "instructor",
      localField: "department_info.dept_name",
      foreignField: "dept_name",
      as: "instructor_info"
    }
  },
  {
    $unwind: "$instructor_info"
  },
  {
    $group: {
      _id: "$department_info.dept_name",
      budget: { $first: "$department_info.budget" },
      total_salario: { $sum: "$instructor_info.salary" },
      total_professores: { $sum: 1 },
      total_alunos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      dept_name: "$_id",
      budget: 1,
      media_salario: { $divide: ["$total_salario", "$total_professores"] },
      total_alunos: 1
    }
  }
]);

printjson(questao7.toArray());