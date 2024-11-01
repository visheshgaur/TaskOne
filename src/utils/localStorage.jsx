const employees = [
    {
        "id": 1,
        "email": "abc@gmail.com",
        "password": "123",
        "firstName": "Aarav",
        "taskCount": {
            active: 2,
            completed: 1,
            new: 2,
            failed: 0,
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "update Website",
                "taskDescription": "update the website to new design",
                "taskDate": "2022-11-11",
                "category": "design",
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve issues with the user login functionality",
                "taskDate": "2022-10-05",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for the client presentation",
                "taskDate": "2022-11-15",
                "category": "Business"
            }
        ]
    },
    {
        "id": 2,
        "email": "def@gmail.com",
        "password": "123",
        "firstName": "Vivaan",
        "taskCount": {
            active: 1,
            completed: 1,
            new: 2,
            failed: 1,
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Update Documentation",
                "taskDescription": "Complete the API documentation update",
                "taskDate": "2022-09-30",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Database",
                "taskDescription": "Update the database schema with new features",
                "taskDate": "2022-10-15",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false,
                "taskTitle": "deploy project",
                "taskDescription": "deploy latest project on vercel",
                "taskDate": "2022-10-18",
                "category": "Deployement"
            }
        ]
    },
    {
        "id": 3,
        "email": "ghi@gmail.com",
        "password": "123",
        "firstName": "Arjun",
        "taskCount": {
            active: 1,
            completed: 0,
            new: 1,
            failed: 0,
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create New Feature",
                "taskDescription": "Create a new feature for the website",
                "taskDate": "2022-12-01",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "email": "jkl@gmail.com",
        "password": "123",
        "firstName": "Ishaan",
        "taskCount": {
            active: 1,
            completed: 0,
            new: 1,
            failed: 0,
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Complete the API documentation update",
                "taskDate": "2022-09-30",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 5,
        "email": "mno@gmail.com",
        "password": "123",
        "firstName": "Anaya",
        "taskCount": {
            active: 1,
            completed: 0,
            new: 1,
            failed: 0,
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Complete the API documentation update",
                "taskDate": "2022-09-30",
                "category": "Documentation"
            }
        ]
    }
];




const admin=[
    {
        "id":1,
        "firstName":"Admin1",
        "email":"admin@gmail.com",
        "password":"123"
    }
]

export const setLocalStorage=()=>{
   const data= localStorage.setItem("employees",JSON.stringify(employees))
  
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem("employees"))

const admin=JSON.parse(localStorage.getItem("admin"))

return {employees,admin}
}
