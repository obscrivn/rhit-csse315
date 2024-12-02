var FORMAT = {
  meets: "MTRF", /* Valid are UMTWRFS */
  showExtra: true,
};

var INPUT_DAYS = [

  // week 1
  {
    "topic": "Course Introduction",
    // "mode": "teams"
  },
  {
    "topic": "Representing Numbers",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2629990",
    "read": [{ "name": "BO 2.1.1, 2.2.2, 2.2.3", "url": "./syllabus.html#textbooks" },],
    "extra": [{ "name": "BO 2.1-2.3", "url": "./syllabus.html#textbooks" },
    { "name": "PP 2.1, 2.2, 2.3", "url": "./syllabus.html#textbooks" }],
  },
  {
    "topic": "Lab 1: Linux Setup",
    // "link":  "labs/lab1.html",
    "link": "labs/lab1-wsl2.html",
    "class": 'lab',
    "due": [{ "name": "Prelab 1", "url": 'labs/prelab1-wsl2.html' }],
  },
  {
    "topic": "Addressing", // (introducing without HW)",
    // "topic": "Addressing<br><i><small>(Videos on Moodle)</small></i>", // (introducing without HW)",
    // "mode": "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630056",
    "read": [{ "name": "BO 2.1.3" }],
    "due": [{ "name": "Homework 1", "url": "./homework/homework1.pdf" }],
    "extra": [{ "name": "Homework 1 Solution", "url": "./homework/homework1_solutions.pdf" }]
  },

  // week 2
  {
    "topic": "Assembly Basics",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630089",
    "extra": [{ "name": "ARM handout", "url": './ARM_qrc.pdf' },
    { "name": "ARM Examples", "url": './examples/assembly/arm-asm.pdf' }]
  },
  {
    "topic": "Assembly Advanced",
  },
  {
    "topic": "Lab 2: Linux",
    "link": "labs/lab2.html",
    "class": "lab",
    // "mode":  "classroom",
    "extra": [{ "name": "Linux Commands", "url": 'https://files.fosswire.com/2007/08/fwunixref.pdf' }]
  },
  {
    "topic": "C Programming Basics",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630128",
    "due": [{ "name": "Homework 2", "url": "./homework/homework2.pdf" }],
    "extra": [
      { "name": "Homework 2 Solution", "url": "./homework/homework2_solutions.pdf" },
      { "name": "KR 1", "url": "./syllabus.html#textbooks" },
      { "name": "C handout", "url": "./c-refcard.pdf" }
    ],
  },


  // week 3
  {
    "topic": "Pointers Basics",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630131",
    "read": [{ "name": "BO 3.8.1-3.8.3, 3.9.1, 3.10.1" }],
    "extra": [{ "name": "BO 3.10" },
    { "name": "KR 5, 6" },
    { "name": "PP 3.36, 3.41.A-B" }]
  },
  {
    "topic": "Pointers Advanced",
    // "(Due by Friday midnight)",
    // + "<br/><a href='https://practic.csse.rose-hulman.edu'>CloudCoder</a>",
  },
  {
    "topic": "Lab 3: Stack/Procedure Call",
    "link": "labs/lab3.html",
    "class": "lab",
    // "mode":  "classroom",
    "extra": [{ "name": "ARM Guide", "url": 'http://www.cs.uni.edu//~fienup/cs1410s13/lectures/lec13_ARM_Guide.pdf' }]
  },
  {
    "topic": "Memory Hierarchy", // (remove disk)",
    // "topic": "Memory Hierarchy<br><i><small>(Videos on Moodle)</small></i>", // (remove disk)",
    // "mode": "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630086",
    "read": [{ "name": "BO 6.1.1-6.1.3" }],
    "due": [{ "name": "Homework 3", "url": "./homework/homework3.pdf" }],
    // " <a href='https://practic.csse.rose-hulman.edu'>CloudCoder</a><br/>",
    "extra": [
      { "name": "Homework 3 Solution", "url": "./homework/homework3_solutions.pdf" },
    ],
  },

  { "break": "Holiday Break", "weeks": 2 },

  // week 4
  
  {
    "topic": "C Debugging",
    "extra": [{ "name": "GDB Quick Reference", "url": './gdb-refcard.pdf' }, { "name": "Debugging Segfaults", "url": "debugging-segfaults.html" }]
  },
  {
    "topic": "Exam 1 Prep",
    "read": [
      { "name": "Review Guide", "url": "./exams/e1-reviewguide.pdf" },
    ],
    "due": [
      { "name": "Exam1 Practice Paper", "url": "./exams/exam1practice-paperpart.pdf" },
      { "name": "Exam1 Practice Coding", "url": "./exams/exam1practice-codingpart.pdf" }
    ],
    "extra": [
      { "name": "(Paper Solution)", "url": "./exams/exam1practice-paperpart_solutions.pdf" },
      { "name": "(Coding Solution)", "url": "./exams/exam1practice-codingpart_solutions.pdf" },
    ]
  },
  {
    "topic": "Exam 1",
    "class": "exam",
    // "mode":  "classroom",
  },
  {
    "topic": "Procedure Calls",
    // "topic": "Procedures Call<br><i><small>(Videos on Moodle)</small></i>",
    // "mode": "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630158",
    "read": [{ "name": "BO 3.7.1" }],
    // "due": "<a href='https://practic.csse.rose-hulman.edu'>CloudCoder</a>",
    "extra": [{ "name": "Stack Writeup", "url": "https://azeria-labs.com/functions-and-the-stack-part-7/" }],
  },




  // week 5
  {
    "topic": "Command-line Arguments (argv/argc)",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630212",

  },
  {
    "topic": "Memory Allocation",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630215",
    "read": [{ "name": "BO 3.7.4, 9.9.0-9.9.2" }],
    "extra": [{ "name": "BO 3.7, 9.9" },
    { "name": "KR 8.7" }],
  },
  {
    "topic": "Lab 4: Stack Smashing",
    "link": "labs/lab4.html",
    "class": "lab"
    // "mode":  "classroom",
    // "read": [ { "name":"Demo", "url":"https://moodle.rose-hulman.edu/mod/page/view.php?id=2630152" } ]
  },
  {
    "topic": "Heap Practice",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630221",
    // "due": "<a xhref='./labs/prelab5.html'>Prelab 5</a>",
    "due": [{ "name": "Homework 4", "url": './homework/homework4.pdf' }],
    // "extra":[  ]
    "extra": [  { "name": "Homework 4 Solution", "url": "./homework/homework4_solutions.pdf" }],
  },


  // week 6
  {
    "topic":" MLK Day",
    "class":"noclass"
  },
  {
    "topic": "argv/malloc Practice",
  },
  {
    "topic": "Lab 5: Managing Memory",
    "link": "labs/lab5.html",
    "class": "lab",
    // "mode":  "classroom",
    // "due": [{ "name": "Lab5" }],
    "extra": []
  },
  {
    "topic": "Floating Point",
    // "topic": "Exam 1 Recap",
    "due": [{ "name": "Homework 5", "url": "./homework/homework5.pdf" }],
    "extra": [
      { "name": "Homework 5 Solution", "url": "./homework/homework5_solutions.pdf" },
      // { "name": "Quiz 18 Solutions", "url": "./q18_practice_dynamic_alloc-solutions.pdf" },
    ]
  },


  // week 7
  {
    "topic": "IO",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630233",
    "read": [{ "name": "BO 10.1-10.4" }],
  },
  {
    "topic": "IO (cont.)",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630239",
    "read": [{ "name": "BO 10.8-10.11" }],
    "extra": [{ "name": "KR 7.5, 7.7, 8.1, 8.2" }]
  },
  {
    "topic": "Lab 6: IO",
    "link": "labs/lab6.html",
    // "mode":  "classroom",
    "class": "lab",
  },
  {
    "topic": "flex",
    "due": [{ "name": "Homework 6", "url": "./homework/homework6.pdf" }],
    "extra": [{ "name": "Homework 6 Solution", "url": "./homework/homework6_solutions.pdf" }]
  },

  // week 8
  {
    "topic": "Computer Networks",
    // "topic": "Computer Network<br><i><small>(Videos on Moodle)</small></i>",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2696251",
    "read": [{ "name": "BO 11.0-11.2" }],
  },
  {
    "topic": "Exam 2 Prep",
    "read": [
      { "name": "Review Guide", "url": "./e2-reviewguide.pdf" },
    ],
    "due": [
      { "name": "Exam2 Practice Paper", "url": "./exams/exam2practice-paperpart.pdf" },
      { "name": "Exam2 Practice Coding", "url": "./exams/exam2practice-codingpart.pdf" }
    ],
    "extra": [
      { "name": "(Paper Solution)", "url": "./exams/exam2practice-paperpart_solutions.pdf" },
    ]
  },
  {
    "topic": "Exam 2",
    // "mode":  "classroom"
    "class": "exam",
  },
  {
    "topic": "Socket Programming (Client)",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2696254",
    "read": [{ "name": "BO 11.3-11.4" }],
  },


  // week 9
  {
    "topic": "Socket Programming (Server)",
    // "mode":  "panopto",
    // "link":  "https://moodle.rose-hulman.edu/mod/page/view.php?id=2630272",
    "read": [{ "name": "BO 11.3-11.4" }]
  },
  {
    "topic": "Passing Pointers for Output",
    // "mode":  "teams",
  },
  {
    "topic": "Lab 7",
    "link": "labs/lab7.html",
    "class": "lab",
    "due": [
      { "name": "Prelab 7", "url": "./labs/prelab7.html" },
    ],
    // "mode":  "classroom",
    // "extra": [{ "name": "Due on Friday at 11:59 pm" }],
  },  
  // {
  //   "topic": "Exam 2 recap",
  //   // "read": [{ "name": "Exam 2 solution", "url": "./exam2-solutions.pdf" },
  //   // { "name": "Exam 2 coding part", "url": "./exam2-codingpart.pdf" }
  //   // ]
  // },
  {
    "topic": "Lab 7 Patching / Coding practice",
    "due": [{ "name": "Homework 7", "url": "./homework/homework7.pdf" }],
    "extra": [{ "name": "Homework 7 Solution", "url": "./homework/homework7_solutions.pdf" }]
  },

  // week 10
  {
    "topic": "Concurrency / pthreads",
  },
  {
    "topic": "Mutual Exclusion",
  },
  {
    "topic": "Lab 8",
    "link": "labs/lab8.html",
    //  "mode":  "classroom",
    "class": "lab",
  },
  {
    "topic": "Final Exam Prep",
    // "mode":  "teams",
    /*"read":  [ { "name": "BO 12.1-12.2" } ],*/
    "read": [{"name": "Review Guide", "url": "./fe-reviewguide.pdf"},],
    "extra": [
      { "name": "Final Exam Coding Practice<br>", "url": "./exams/finalexampractice-codingpart.pdf" }],
  },
  // finals week
  {
    "final": "Final Exam<br/>"
  }
];
