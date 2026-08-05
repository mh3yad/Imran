export const coursesData = [
  {
    id: 1,
    tag: { en: "Computer Science", ar: "Computer Science" },
    title: { en: "Programming Fundamentals", ar: "Programming Fundamentals" },
    length: "100 ساعة",
    category: { en: "Programming Fundamentals", ar: "Programming Fundamentals" },
    image: { ref: "/images/basicsc.jpg" },
    Description: "هذا الكورس يقدم لك أساسيات البرمجة من منظور علمي، مع التركيز على المبادئ الجوهرية بدلاً من التكنولوجيا نفسها. وبهذا، ستكتسب قاعدة صلبة تمكنك من إتقان أي لغة أو تقنية برمجية لاحقاً.",
      content: [
    {
      title: "Programming Fundamentals using C++ programming",
      length: "36 ساعة",
      topics: [
        "Variables & Data Types",
        "Operators",
        "Conditions (If-Else, Switch)",
        "Loops (For, While, Do-While)",
        "Arrays (1D & 2D)",
        "Functions",
        "Recursion",
        "Strings",
        "Structs"
      ]
    },
    {
      title: "Object-Oriented Programming (OOP)",
      length: "30 ساعة",
      topics: [
        "Classes & Objects",
        "Constructors",
        "Destructor",
        "Encapsulation",
        "Composition",
        "Inheritance",
        "Abstraction",
        "Polymorphism",
        "Operator Overloading",
        "Templates",
        "Exception Handling",
        "Static Members"
      ]
    },
    {
      title: "Git & GitHub",
      length: "4 ساعة",
      topics: [
        "Version control",
        "Github",
        "Git basics",
        "Push your first repo"
      ]
    },
    {
      title: "Data Structures & Algorithms",
      length: "12 ساعة",
      topics: [
        "Time & Space Complexity (Big O Notation)",
        "Arrays vs. Vectors",
        "Stack & Queue",
        "Hash Tables",
        "Sorting Algorithms (Bubble, Merge, Quick, etc.)",
        "Searching Algorithms (Linear, Binary)"
      ]
    },
    {
      title: "Database Systems",
      length: "10 ساعة",
      topics: [
        "Database Fundamentals",
        "Database Design & Modeling (ER Diagrams)",
        "Relational Databases",
        "SQL Fundamentals (SELECT, INSERT, UPDATE, DELETE)",
        "project"
      ]
    },
    {
      title: "Software Engineering Principles & DP",
      length: "8 ساعة",
      topics: [
        "SOLID Principles",
        "Design Patterns (Singleton, Factory)"
      ]
    }
    ],      
    },
  {
    id: 2,
    tag: { en: "Frontend ", ar: "Frontend " },
    title: { en: "Frontend Development", ar: "Frontend Development " },
    length: "150 ساعة",
    category: { en: "Web Development", ar: "تطوير الويب" },
    image: { ref: "/images/frontendc.jpg" },
    Description: "هذا الكورس يغطي كل ما تحتاجه لتصبح مطور واجهات أمامية محترف، بدءاً من أساسيات الويب وصولاً إلى أحدث الأطر والتقنيات.",
    content: [
      {
        title: "Web Fundamentals & HTML",
        length: "8 ساعات",
        description: "Build a strong foundation in how the web works and how modern websites are structured.",
        topics: [
          "Introduction to web technologies",
          "HTML document structure",
          "Semantic HTML",
          "Forms & validation",
          "Tables",
          "Accessibility standards (ARIA)",
          "SEO-friendly web structure",
          "Core HTML Components"
        ]
      },
      {
        title: "CSS & Modern UI Styling",
        length: "20 ساعة",
        description: "Learn how to design beautiful, responsive, and modern user interfaces.",
        topics: [
          "CSS fundamentals",
          "Colors, typography, and backgrounds",
          "Box model",
          "positioning",
          "Flexbox 1, direction, alignment,justify",
          "Flexbox 2 grow,shrink,basis,ordering,nesting",
          "Grid template,gap, columns, rows",
          "Responsive web design",
          "Animations & transitions",
          "project"
        ]
      },
      {
        title: "JavaScript Fundamentals",
        length: "40 ساعة",
        description: "Master the programming language of the web and create interactive applications.",
        topics: [
          "intro, add to html, console, alert",
          "Variables, data types & arthemitic, assignment logical operators, template literals",
          "Conditions if, switch",
          "Loop for, while, do while, break, continue",
          "Functions, params, return , scope",
          "Function2 arrow fn, anonymous, expression",
          "objects,crud,this, nested",
          "Arrays 1 crud",
          "Arrays 2 builtin push,pop,shift,slice,includes, indexof,join,nested",
          "string slice,substring,replace,upper-lower,math random,floor,round",
          "Challenge",
          "Dom tree,selecting,change content",
          "Dom manipulation CRUD, traverse next child",
          "Dom events,event listener",
           "BOM location,history,navigator",
          "local,session storage,cookies",
          "setTimeout,setInterval",
          "Project: TODO list",
          "Project:2"
        ]
      },
      {
        title: "Advanced JavaScript & APIs",
        length: "12 ساعة",
        description: "Move beyond basics and work with real-world asynchronous applications.",
        topics: [
          "Event loop & JavaScript execution model",
          "Promises & async/await",
          "REST APIs & HTTP methods",
          "AJAX & Fetch API",
          "API integration & data handling",   
          "Project: API integration & data handling",
        ]
      },
      {
        title: "Object-Oriented Programming in JavaScript",
        length: "8 ساعات",
        description: "Understand scalable application architecture using OOP concepts.",
        topics: [
          "Constructor functions",
          "Prototypes & inheritance",
          "ES6 classes",
          "this Keyword",
          "revision & project"
        ]
      },
      {
        title: "TypeScript",
        length: "16 ساعة",
        description: "Write scalable and maintainable applications with strongly typed JavaScript.",
        topics: [
          "TypeScript fundamentals",
          "Primitive Types",
          "Arrays & Tuples",
          "Object Typing & Data Shapes",
          "Interfaces & type aliases",
          "Optional & Readonly Properties",
          "Union & intersection types",
          "Classes & OOP in TypeScript",
          "Generics",
          "project"
        ]
      },
      {
        title: "Tailwind CSS",
        length: "8 ساعة",
        description: "Build modern, scalable, and production-ready interfaces faster.",
        topics: [
          "Utility-first CSS approach",
          "Responsive design with Tailwind",
          "Flexbox & Grid utilities",
          "revision & project"
        ]
      },
      {
        title: "Sass & Advanced Styling Architecture",
        length: "10 ساعات",
        description: "Create scalable and maintainable styling systems.",
        topics: [
          "Sass fundamentals",
          "Variables & nesting",
          "Mixins & reusable styles",
          "Functions & partials",
          "revision & project"
        ]
      },
      {
        title: "React Development",
        length: "30 ساعة",
        description: "Master the world's most popular frontend library.",
        topics: [
          "React fundamentals & JSX",
          "Components & props",
          "State management with hooks",
          "Component lifecycle",
          "Event handling",
          "Forms & validation",
          "Conditional rendering",
          "React Router",
          "API integration",
          "Context API & global state",
          "React Hooks deep dive",
          "React Query",
          "Redux Toolkit",
          "project 1",
          "project 2"
        ]
      },
    ]
  },
  {
  id: 3,
  tag: { en: "Backend", ar: "Backend" },
  title: { en: "Backend PHP/Laravel", ar: "Backend PHP/Laravel" },
  length: "150 ساعة",
  category: { en: "Web Development", ar: "تطوير الويب" },
  image: { ref: "/images/backendc.jpg" },
  Description: "هل أنت جاهز لتكون باك اند محترف لا تفوت الفرصة منهج متكامل يبدأ معك من البداية خطوة بخطوة",
  content: [
    {
      title: "PHP Fundamentals",
      length: "26 ساعة",
      description: "Build a solid foundation in server-side programming with PHP, from core syntax to handling real user input.",
      topics: [
        "Backend intro",
        "PHP intro",
        "PHP files",
        "Variables",
        "PHP data types",
        "Constants",
        "Operators",
        "Conditions (if, switch, match)",
        "Arrays (numeric, associative, multidimensional)",
        "Loops (for, while, do-while, foreach)",
        "Functions",
        "Built-in methods",
        "Pass by value vs pass by reference",
        "Requests (GET, POST)",
        "Form validations",
        "File uploads",
        "File validation",
        "Session & Cookies",
        "File inclusion",
        "project"
      ]
    },
    {
      title: "MySQL & Database Design",
      length: "26 ساعة",
      description: "Learn to design, query, and manage relational databases that power real backend applications.",
      topics: [
        "Database intro",
        "ERD & Entity relationships",
        "Case study (ERD & relationships)",
        "Create database",
        "Create tables",
        "CRUD operations",
        "Aggregation functions",
        "Grouping",
        "General operations",
        "Orders, limit & offset",
        "Subqueries",
        "Joins",
        "Pivot table & Alter table",
        "Index & View",
        "Shell, Workbench & CMD",
        "Triggers & Stored procedures",
        "Events & API"
      ]
    },
    {
      title: "PHP with MySQL",
      length: "14 ساعة",
      description: "Connect PHP to a real database and build authenticated, data-driven web pages.",
      topics: [
        "Connecting PHP with MySQL",
        "Project (Blog)",
        "Authentication",
        "Authorization",
        "Localization",
        "Pagination",
        "E-commerce project"
      ]
    },
    {
      title: "PHP OOP",
      length: "30 ساعة",
      description: "Understand scalable application architecture using object-oriented programming in PHP.",
      topics: [
        "OOP intro",
        "Class & Object",
        "Properties & methods",
        "Constructor & destructor",
        "Inheritance",
        "Access modifiers",
        "Abstract class",
        "Interface",
        "OOP principles",
        "SOLID principles",
        "Traits",
        "Static",
        "Const",
        "Final",
        "Method chaining",
        "Namespace",
        "Aggregation & composition",
        "Custom classes (DB, Request, Session, Validation)",
        "PDO",
        "Project: To-Do List (OOP + PDO)"
      ]
    },
    {
      title: "MVC & Laravel Basics",
      length: "28 ساعة",
      description: "Move from raw PHP into Laravel's MVC architecture and build structured, maintainable applications.",
      topics: [
        "Laravel install",
        "Laravel MVC structure",
        "Routing",
        "Controllers",
        "Migrations",
        "Models",
        "Eloquent model",
        "Views",
        "Layouts",
        "Assets",
        "Query builder",
        "CRUD operations",
        "Model relationships",
        "Laravel validation",
        "Pagination",
        "Sessions",
        "File uploads",
        "Route naming & groups"
      ]
    },
    {
      title: "Laravel Advanced & API Development",
      length: "26 ساعة",
      description: "Extend Laravel into production-ready territory — authentication, real-time features, and a full e-commerce API project.",
      topics: [
        "Middleware",
        "Seeders, Factories & Tinker",
        "Authentication",
        "Authorization",
        "API resources",
        "API authentication",
        "Email verification",
        "Social media login",
        "WebSocket",
        "Pusher",
        "Swagger documentation",
        "Payment integration (Paymob)",
        "E-commerce projectr"
      ]
    }
  ]
}
];