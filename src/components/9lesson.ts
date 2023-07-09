// Utility Types

// Partial

interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate }
} // Partial create Assignment interface like T property

const assignS: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assignS, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assignS, { grade: 95 })

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
}

// assignVerified.grade = 88
recordAssignment({ ...assignGraded, verified: true })

//Record
