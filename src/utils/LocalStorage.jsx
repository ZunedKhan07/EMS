const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Finish report",
          "task_description": "Complete the quarterly financial report",
          "task_date": "2025-02-07",
          "category": "Report",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Team Meeting",
          "task_description": "Attend the team meeting about project progress",
          "task_date": "2025-02-08",
          "category": "Meeting",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Email follow-ups",
          "task_description": "Respond to client emails regarding new features",
          "task_date": "2025-02-09",
          "category": "Communication",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Develop new feature",
          "task_description": "Implement new feature for the product",
          "task_date": "2025-02-07",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Bug fixing",
          "task_description": "Fix bugs identified in the latest release",
          "task_date": "2025-02-09",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Customer Support",
          "task_description": "Assist customers with product-related queries",
          "task_date": "2025-02-06",
          "category": "Support",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Create FAQ",
          "task_description": "Update FAQ section based on common queries",
          "task_date": "2025-02-08",
          "category": "Documentation",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Update website",
          "task_description": "Make minor updates to the company website",
          "task_date": "2025-02-10",
          "category": "Website",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Project Kickoff",
          "task_description": "Kickoff meeting for the new project",
          "task_date": "2025-02-07",
          "category": "Meeting",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Client Demo",
          "task_description": "Demonstrate new features to the client",
          "task_date": "2025-02-09",
          "category": "Presentation",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Prepare Proposal",
          "task_description": "Prepare a proposal for a potential new client",
          "task_date": "2025-02-10",
          "category": "Proposal",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Write Documentation",
          "task_description": "Write technical documentation for the new feature",
          "task_date": "2025-02-06",
          "category": "Documentation",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Code Review",
          "task_description": "Review code submitted by team members",
          "task_date": "2025-02-08",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Design Mockups",
          "task_description": "Design UI mockups for the new feature",
          "task_date": "2025-02-09",
          "category": "Design",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Review employee tasks",
          "task_description": "Review the task progress of all employees",
          "task_date": "2025-02-06",
          "category": "Administration",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Approve Budgets",
          "task_description": "Review and approve project budgets",
          "task_date": "2025-02-07",
          "category": "Finance",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Schedule Interviews",
          "task_description": "Organize interviews for the new hiring process",
          "task_date": "2025-02-08",
          "category": "HR",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  

  export const setLocalStorage = () => {
     localStorage.setItem('employee',JSON.stringify(employees));
     localStorage.setItem('admin',JSON.stringify(admin));
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))  
    console.log(employees, admin);
    
}









//     const employees = [
//       {
//         "id": 1,
//         "email": "employee1@example.com",
//         "password": "123"
//       },
//       {
//         "id": 2,
//         "email": "employee2@example.com",
//         "password": "123"
//       },
//       {
//         "id": 3,
//         "email": "employee3@example.com",
//         "password": "123"
//       },
//       {
//         "id": 4,
//         "email": "employee4@example.com",
//         "password": "123"
//       },
//       {
//         "id": 5,
//         "email": "employee5@example.com",
//         "password": "123"
//       }
//     ]

//     const admin = [
//         {
//       "id": 1,
//       "email": "admin@example.com",
//       "password": "123"
//     }
// ]
  