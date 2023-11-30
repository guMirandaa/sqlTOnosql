use("db_projeto");

db.createCollection("course");
db.course.createIndex({ "course_id": 1, "title": 1, "dept_name": 1, "credits": 1 }, { unique: true });

db.createCollection("classroom_section");
db.classroom_section.createIndex({  "classroom_name": 1, "building": 1, "room_number": 1, "capacity": 1, "sections": 1}, { unique: true });

db.createCollection("department");
db.department.createIndex({ "dept_name": 1, "building": 1, "budget": 1 }, { unique: true });

db.createCollection("instructor");
db.instructor.createIndex({ "ID": 1, "name": 1, "dept_name": 1, "salary": 1 }, { unique: true });

db.createCollection("student");
db.student.createIndex({ "ID": 1, "name": 1, "dept_name": 1, "tot_cred": 1 }, { unique: true });

db.createCollection("advisor");
db.advisor.createIndex({ "s_ID": 1, "i_ID": 1 }, { unique: true });

db.createCollection("time_slot");
db.time_slot.createIndex({ "time_slot_id": 1, "day": 1, "start_hr": 1, "start_min": 1, "end_hr": 1, "end_min": 1 }, { unique: true });

db.createCollection("prereq");
db.prereq.createIndex({ "course_id": 1, "prereq_id": 1 }, { unique: true });


//classroom_section
db.classroom_section.insertMany([
  {
    "classroom_name": "Painter 514",
    "building": "Painter",
    "room_number": "514",
    "capacity": 10,
    "sections": [
      {
        "course_id": "BIO-101",
        "sec_id": "1",
        "semester": "Summer",
        "year": 2017,
        "time_slot": "B",
        "teaches_takes": [{
          "ID_student": "98988",
          "ID_prof": "76766",
          "grade": "A"
        }]
      },
      {
    "course_id": "BIO-301",
    "sec_id": "1",
    "semester": "Summer",
    "year": 2018,
    "time_slot": "A",
	  "teaches_takes": [
      {
    "ID_student": "98988",
    "ID_prof": "76766",
    "grade": null
      }]
  },
      {
        "course_id": "HIS-351",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "C",
	"teaches_takes": [{
    "ID_student": "19991",
    "ID_prof": "32343",
    "grade": "B"
  }]
      }
    ]
  },
  {
    "classroom_name": "Packard 101",
    "building": "Packard",
    "room_number": "101",
    "capacity": 500,
    "sections": [
      {
        "course_id": "CS-101",
        "sec_id": "1",
        "semester": "Fall",
        "year": 2017,
        "time_slot": "H",
	"teaches_takes": [
		{"ID_student": "00128",
		 "ID_prof": "10101",
		 "grade": "A"},
{
    "ID_student": "12345",
    "ID_prof": "10101",
    "grade": "C"
  },
{"ID_student": "45678",
    "ID_prof": "10101",
    "grade": "F"
  },
{
    "ID_student": "54321",
    "ID_prof": "10101",
    "grade": "A-"
  },
{
    "ID_student": "76543",
    "ID_prof": "10101",
    "grade": "A"
  },
{
    "ID_student": "98765",
    "ID_prof": "10101",
    "grade": "C-"
  }
]
      },
      {
        "course_id": "CS-101",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "F",
	"teaches_takes": [  {
    "ID_student": "45678",
    "ID_prof": "45565",
    "grade": "B+"
  }]
      },
      {
        "course_id": "FIN-201",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "B",
	"teaches_takes": [{
    "ID_student": "23121",
    "ID_prof": "12121",
    "grade": "C+"
  }]
      },
      {
        "course_id": "MU-199",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "D",
	"teaches_takes": [{
    "ID_student": "55739",
    "ID_prof": "15151",
    "grade": "A-"
  }]
      }
    ]
  },
  {
    "classroom_name": "Taylor 3128",
    "building": "Taylor",
    "room_number": "3128",
    "capacity": 70,
    "sections": [
      {
        "course_id": "CS-190",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2017,
        "time_slot": "E"
      },
      {
        "course_id": "CS-190",
        "sec_id": "2",
        "semester": "Spring",
        "year": 2017,
        "time_slot": "A",
	      "teaches_takes": [{
            "ID_student": "12345",
            "ID_prof": "83821",
            "grade": "A"
          },
{
    "ID_student": "54321",
    "ID_prof": "83821",
    "grade": "B+"
  }
]
      },
      {
        "course_id": "CS-319",
        "sec_id": "2",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "C",
	"teaches_takes":[{
    "ID_student": "76543",
    "ID_prof": "83821",
    "grade": "A"
  }]
      },
      {
        "course_id": "CS-347",
        "sec_id": "1",
        "semester": "Fall",
        "year": 2017,
        "time_slot": "A",
	"teaches_takes": [{
		    "ID_student": "00128",
		    "ID_prof": "10101",
		    "grade": "A-"
		  }, {
    "ID_student": "12345",
    "ID_prof": "10101",
    "grade": "A"
  }]
      },
      {
        "course_id": "EE-181",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2017,
        "time_slot": "C",
	"teaches_takes": [{
    "ID_student": "76653",
    "ID_prof": "98345",
    "grade": "C"
  }]
      }
    ]
  },
  {
    "classroom_name": "Watson 120",
    "building": "Watson",
    "room_number": "120",
    "capacity": 50,
    "sections": [
      {
        "course_id": "CS-315",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "D",
	"teaches_takes": [{
    "ID_student": "12345",
    "ID_prof": "10101",
    "grade": "A"
  },
  {
    "ID_student": "98765",
    "ID_prof": "10101",
    "grade": "B"
  }],
}]
},
  {
    "classroom_name": "Watson 120",
    "building": "Watson",
    "room_number": "120",
    "capacity": 50,
    "sections": [
      {
        "course_id": "CS-315",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "D",
        "teaches_takes": [
          {
            "ID_student": "12345",
            "ID_prof": "10101",
            "grade": "A"
          },
          {
            "ID_student": "98765",
            "ID_prof": "10101",
            "grade": "B"
          }
        ]
      }
    ]
  },
  {
    "classroom_name": "Watson 100",
    "building": "Watson",
    "room_number": "100",
    "capacity": 30,
    "sections": [
      {
        "course_id": "CS-319",
        "sec_id": "1",
        "semester": "Spring",
        "year": 2018,
        "time_slot": "B",
        "teaches_takes": [
          {
            "ID_student": "45678",
            "ID_prof": "83821",
            "course_id": "CS-319",
            "grade": "B"
          }
        ]
      },
      {
        "course_id": "PHY-101",
        "sec_id": "1",
        "semester": "Fall",
        "year": 2017,
        "time_slot": "A",
        "teaches_takes": [
          {
            "ID_student": "44553",
            "ID_prof": "22222",
            "grade": "B-"
          }
        ]
      }
    ]
  }
  
]);

//course
db.course.insertMany([
  { "course_id": "BIO-101", "title": "Intro. to Biology", "dept_name": "Biology", "credits": 4 },
  { "course_id": "BIO-301", "title": "Genetics", "dept_name": "Biology", "credits": 4 },
  { "course_id": "BIO-399", "title": "Computational Biology", "dept_name": "Biology", "credits": 3 },
  { "course_id": "CS-101", "title": "Intro. to Computer Science", "dept_name": "Comp. Sci.", "credits": 4 },
  { "course_id": "CS-190", "title": "Game Design", "dept_name": "Comp. Sci.", "credits": 4 },
  { "course_id": "CS-315", "title": "Robotics", "dept_name": "Comp. Sci.", "credits": 3 },
  { "course_id": "CS-319", "title": "Image Processing", "dept_name": "Comp. Sci.", "credits": 3 },
  { "course_id": "CS-347", "title": "Database System Concepts", "dept_name": "Comp. Sci.", "credits": 3 },
  { "course_id": "EE-181", "title": "Intro. to Digital Systems", "dept_name": "Elec. Eng.", "credits": 3 },
  { "course_id": "FIN-201", "title": "Investment Banking", "dept_name": "Finance", "credits": 3 },
  { "course_id": "HIS-351", "title": "World History", "dept_name": "History", "credits": 3 },
  { "course_id": "MU-199", "title": "Music Video Production", "dept_name": "Music", "credits": 3 },
  { "course_id": "PHY-101", "title": "Physical Principles", "dept_name": "Physics", "credits": 4 },
]);



//department
db.department.insertMany([
  { "dept_name": "Biology", "building": "Watson", "budget": 90000 },
  { "dept_name": "Comp. Sci.", "building": "Taylor", "budget": 100000 },
  { "dept_name": "Elec. Eng.", "building": "Taylor", "budget": 85000 },
  { "dept_name": "Finance", "building": "Painter", "budget": 120000 },
  { "dept_name": "History", "building": "Painter", "budget": 50000 },
  { "dept_name": "Music", "building": "Packard", "budget": 80000 },
  { "dept_name": "Physics", "building": "Watson", "budget": 70000 },
]);


//instructor
db.instructor.insertMany([
  { "ID": "10101", "name": "Srinivasan", "dept_name": "Comp. Sci.", "salary": 65000 },
  { "ID": "12121", "name": "Wu", "dept_name": "Finance", "salary": 90000 },
  { "ID": "15151", "name": "Mozart", "dept_name": "Music", "salary": 40000 },
  { "ID": "22222", "name": "Einstein", "dept_name": "Physics", "salary": 95000 },
  { "ID": "32343", "name": "El Said", "dept_name": "History", "salary": 60000 },
  { "ID": "33456", "name": "Gold", "dept_name": "Physics", "salary": 87000 },
  { "ID": "45565", "name": "Katz", "dept_name": "Comp. Sci.", "salary": 75000 },
  { "ID": "58583", "name": "Califieri", "dept_name": "History", "salary": 62000 },
  { "ID": "76543", "name": "Singh", "dept_name": "Finance", "salary": 80000 },
  { "ID": "76766", "name": "Crick", "dept_name": "Biology", "salary": 72000 },
  { "ID": "83821", "name": "Brandt", "dept_name": "Comp. Sci.", "salary": 92000 },
  { "ID": "98345", "name": "Kim", "dept_name": "Elec. Eng.", "salary": 80000 },
]);


//student
db.student.insertMany([
  { "ID": "00128", "name": "Zhang", "dept_name": "Comp. Sci.", "tot_cred": 102 },
  { "ID": "12345", "name": "Shankar", "dept_name": "Comp. Sci.", "tot_cred": 32 },
  { "ID": "19991", "name": "Brandt", "dept_name": "History", "tot_cred": 80 },
  { "ID": "23121", "name": "Chavez", "dept_name": "Finance", "tot_cred": 110 },
  { "ID": "44553", "name": "Peltier", "dept_name": "Physics", "tot_cred": 56 },
  { "ID": "45678", "name": "Levy", "dept_name": "Physics", "tot_cred": 46 },
  { "ID": "54321", "name": "Williams", "dept_name": "Comp. Sci.", "tot_cred": 54 },
  { "ID": "55739", "name": "Sanchez", "dept_name": "Music", "tot_cred": 38 },
  { "ID": "70557", "name": "Snow", "dept_name": "Physics", "tot_cred": 0 },
  { "ID": "76543", "name": "Brown", "dept_name": "Comp. Sci.", "tot_cred": 58 },
  { "ID": "76653", "name": "Aoi", "dept_name": "Elec. Eng.", "tot_cred": 60 },
  { "ID": "98765", "name": "Bourikas", "dept_name": "Elec. Eng.", "tot_cred": 98 },
  { "ID": "98988", "name": "Tanaka", "dept_name": "Biology", "tot_cred": 120 },
]);


//advisor
db.advisor.insertMany([
  { "s_ID": "00128", "i_ID": "45565" },
  { "s_ID": "12345", "i_ID": "10101" },
  { "s_ID": "23121", "i_ID": "76543" },
  { "s_ID": "44553", "i_ID": "22222" },
  { "s_ID": "45678", "i_ID": "22222" },
  { "s_ID": "76543", "i_ID": "45565" },
  { "s_ID": "76653", "i_ID": "98345" },
  { "s_ID": "98765", "i_ID": "98345" },
  { "s_ID": "98988", "i_ID": "76766" },
]);


//time_slot
db.time_slot.insertMany([
  { "time_slot_id": "A", "day": "M", "start_hr": 8, "start_min": 0, "end_hr": 8, "end_min": 50 },
  { "time_slot_id": "A", "day": "W", "start_hr": 8, "start_min": 0, "end_hr": 8, "end_min": 50 },
  { "time_slot_id": "A", "day": "F", "start_hr": 8, "start_min": 0, "end_hr": 8, "end_min": 50 },
  { "time_slot_id": "B", "day": "M", "start_hr": 9, "start_min": 0, "end_hr": 9, "end_min": 50 },
  { "time_slot_id": "B", "day": "W", "start_hr": 9, "start_min": 0, "end_hr": 9, "end_min": 50 },
  { "time_slot_id": "B", "day": "F", "start_hr": 9, "start_min": 0, "end_hr": 9, "end_min": 50 },
  { "time_slot_id": "C", "day": "M", "start_hr": 11, "start_min": 0, "end_hr": 11, "end_min": 50 },
  { "time_slot_id": "C", "day": "W", "start_hr": 11, "start_min": 0, "end_hr": 11, "end_min": 50 },
  { "time_slot_id": "C", "day": "F", "start_hr": 11, "start_min": 0, "end_hr": 11, "end_min": 50 },
  { "time_slot_id": "D", "day": "M", "start_hr": 13, "start_min": 0, "end_hr": 13, "end_min": 50 },
  { "time_slot_id": "D", "day": "W", "start_hr": 13, "start_min": 0, "end_hr": 13, "end_min": 50 },
  { "time_slot_id": "D", "day": "F", "start_hr": 13, "start_min": 0, "end_hr": 13, "end_min": 50 },
  { "time_slot_id": "E", "day": "T", "start_hr": 10, "start_min": 30, "end_hr": 11, "end_min": 45 },
  { "time_slot_id": "E", "day": "R", "start_hr": 10, "start_min": 30, "end_hr": 11, "end_min": 45 },
  { "time_slot_id": "F", "day": "T", "start_hr": 14, "start_min": 30, "end_hr": 15, "end_min": 45 },
  { "time_slot_id": "F", "day": "R", "start_hr": 14, "start_min": 30, "end_hr": 15, "end_min": 45 },
  { "time_slot_id": "G", "day": "M", "start_hr": 16, "start_min": 0, "end_hr": 16, "end_min": 50 },
  { "time_slot_id": "G", "day": "W", "start_hr": 16, "start_min": 0, "end_hr": 16, "end_min": 50 },
  { "time_slot_id": "G", "day": "F", "start_hr": 16, "start_min": 0, "end_hr": 16, "end_min": 50 },
  { "time_slot_id": "H", "day": "W", "start_hr": 10, "start_min": 0, "end_hr": 12, "end_min": 30 },
]);

//prereq
db.prereq.insertMany([
  { "course_id": "BIO-301", "prereq_id": "BIO-101" },
  { "course_id": "BIO-399", "prereq_id": "BIO-101" },
  { "course_id": "CS-190", "prereq_id": "CS-101" },
  { "course_id": "CS-315", "prereq_id": "CS-101" },
  { "course_id": "CS-319", "prereq_id": "CS-101" },
  { "course_id": "CS-347", "prereq_id": "CS-101" },
  { "course_id": "EE-181", "prereq_id": "PHY-101" },
]);