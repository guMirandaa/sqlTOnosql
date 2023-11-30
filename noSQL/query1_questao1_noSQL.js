use('db_projeto');

const questao1 = db.student.aggregate([
  {
    $lookup: {
      from: "advisor",
      localField: "ID",
      foreignField: "s_ID",
      as: "advisor_info"
    }
  },
  {
    $unwind: "$advisor_info"
  },
  {
    $lookup: {
      from: "instructor",
      localField: "advisor_info.i_ID",
      foreignField: "ID",
      as: "instructor_info"
    }
  },
  {
    $unwind: "$instructor_info"
  },
  {
    $lookup: {
      from: "course",
      localField: "instructor_info.dept_name",
      foreignField: "dept_name",
      as: "course_info"
    }
  },
  {
    $unwind: "$course_info"
  },
  {
    $lookup: {
      from: "classroom_sections",
      localField: "course_info.course_id",
      foreignField: "sections.course_id",
      as: "teaches_info"
    }
  },
  {
    $unwind: "$teaches_info"
  },
  {
    $project: {
      _id: 0,
      nome_aluno: "$name",
      nome_instrutor: "$instructor_info.name",
      nome_curso: "$course_info.title"
    }
  },
  {
    $group: {
      _id: {
        nome_aluno: "$nome_aluno",
        nome_instrutor: "$nome_instrutor",
        nome_curso: "$nome_curso"
      }
    }
  }
]);

printjson(questao1.toArray());