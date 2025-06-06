export interface Question {
    id: number;
    question: string;
    steps: string[];
    image: string
}

export const questions: Question[] = [
    {
        "id": 1,
        "question": "How to view a user's vehicles?",
        "steps": [
            "Open the User List from the sidebar",
            "Select User from List",
            "Select the Vehicles top tab"
        ],
        "image": "/questions/1.png"
    },
    {
        "id": 2,
        "question": "How to view a user's purchase history?",
        "steps": [
            "Open the User List from the sidebar",
            "Select User from the list",
            "Select the Payments top tab"
        ],
        "image": "/questions/2.png"
    },
    {
        "id": 3,
        "question": "How to view a change a vehicle's subscription status?",
        "steps": [
            "Open the User List from the sidebar",
            "Select User from the list",
            "Select the Vehicles top tab",
            "Select the edit icon in the vehicle section",
            "Choose from the drop down menu the new subscription type for the vehicle",
            "Save your selection"
        ],
        "image": "/questions/3.png"
    },
    {
        "id": 4,
        "question": "How to delete a user?",
        "steps": [
            "Open the User List from the sidebar",
            "Select User from the list",
            "Select the Delete Account button at the top right of the page"
        ],
        "image": "/questions/4.png"
    },
    {
        "id": 5,
        "question": "How to edit a user's card information",
        "steps": [
            "Open the User List from the sidebar",
            "Select User from the list",
            "Click the Card top tab",
            "Select the edit icon in the Card Information Section",
            "Change the information of the desired fields",
            "Save your changes"
        ],
        "image": "/questions/5.png"
    }

    
]