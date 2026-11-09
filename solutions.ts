
function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}



function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }

    if (typeof input === "number") {
        return input * 10;
    }

    return input ? "Active" : "Inactive";
}



function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const latitude: number = coordinate[0];
    const longitude: number = coordinate[1];
    const locationName: string = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        result.push(...arrays[i]);
    }

    return result;
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const popularCourses: Course[] = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].isPublished === true && courses[i].students >= minStudents) {
            popularCourses.push(courses[i]);
        }
    }

    return popularCourses;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const result: T[K][] = [];

    for (let i = 0; i < items.length; i++) {
        result.push(items[i][key]);
    }

    return result;
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

