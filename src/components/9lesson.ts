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
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrdes = "A" | "B" | "C" | "D" | "U"

const finallGredes: Record<Students, LetterGrdes> = {
    Sara: "B",
    Kelly: "U",
}

interface Grades {
    assign1: number
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 33 },
}

//Pick and Omit
// Pick we picking what we want to use from our assignment
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k124",
    title: "Final Project",
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrdes, "U"> //deleting U in array

type highGrade = Extract<LetterGrdes, "A" | "B"> // in array only A B

//Nonnyllable

type allPossibleGrades = "Dima" | "Dave" | null | undefined

type namesOnly = NonNullable<allPossibleGrades>

// ReturnType

//type newAssign = { title: string; points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type newAssign = ReturnType<typeof createNewAssign>

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]
