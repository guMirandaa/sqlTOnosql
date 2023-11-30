const questao4 = db.classroom_sections.aggregate([
    {
      $unwind: "$sections"
    },
    {
      $lookup: {
        from: "instructor",
        localField: "sections.teaches_takes.ID_prof",
        foreignField: "ID",
        as: "instructor_info"
      }
    },
    {
      $unwind: "$instructor_info"
    },
    {
      $group: {
        _id: {
          building: "$building",
          room_number: "$room_number",
          professor: "$instructor_info.name"
        }
      }
    },
    {
      $project: {
        _id: 0,
        building: "$_id.building",
        room_number: "$_id.room_number",
        professor: "$_id.professor"
      }
    }
  ])
printjson(questao4);