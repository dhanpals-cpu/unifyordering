const apiResponse = [
    {
        id: 1,
        status: 'request',
        user: {
            id: 1,
            name: "Joe",
            lastName: "Bloggs",
            phone: "+91 9898989898",
            email: "Joe@example.com"
        },
        role: "Administrator",
    },
    {
        id: 2,
        status: 'approved',
        user: {
            id: 2,
            name: "Sarah",
            lastName: "Connors",
            phone: "+91 9898989898",
            email: "Sarah@example.com"
        },
        role: "Administrator",
    },
    {
        id: 3,
        status: 'invited',
        user: {
            id: 3,
            name: "Sarah",
            lastName: "Connors",
            phone: "+91 9898989898",
            email: "Sarah@example.com"
        },
        role: "Administrator",
    },
    {
        id: 3,
        status: 'approved',
        user: {
            id: 3,
            name: "Other 1",
            lastName: "User",
            phone: "+91 9898989898",
            email: "other@example.com"
        },
        role: "Standard",
    },
    {
        id: 4,
        status: 'approved',
        user: {
            id: 4,
            name: "Other 2",
            lastName: "User",
            phone: "+91 9898989898",
            email: "Sarah@example.com"
        },
        role: "Standard",
    }
];
export default apiResponse;