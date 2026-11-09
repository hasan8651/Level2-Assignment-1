# Access Modifiers in TypeScript OOP

## ভূমিকা

TypeScript-এ Class ব্যবহার করে কাজ করার সময় সব Data পাবলিক করে রাখা ভালো না। কোন তথ্য কোথায় থেকে ব্যবহার করা যাবে, তা কন্ট্রোল করার জন্য "Access Modifiers" ব্যবহার করা হয়। TypeScript-এ প্রধানত "public", "private", "protected" এবং "readonly" ব্যবহার করা হয়।

## বিস্তারিত

"public" হলো ডিফল্ট Access Modifier। অর্থাৎ আলাদা করে কিছু না লিখলেও ক্লাসের property বা method বাইরে থেকে ব্যবহার করা যায়।

"private" দিলে সেই property বা method শুধু নিজের ক্লাসের ভিতরে ব্যবহার করা যায়, বাইরে থেকে ব্যবহার করা যায়না।

"protected" অনেকটা "private" এর মতো, তবে এর একটি সুবিধা আছে। নিজের
ক্লাসের পাশাপাশি সেই ক্লাস থেকে তৈরি child ক্লাসও এটি ব্যবহার করতে পারে।

``` typescript
class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly employeeId: number;

    constructor(
        name: string,
        salary: number,
        department: string,
        employeeId: number
    ) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.employeeId = employeeId;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    showDepartment(): string {
        return this.department;
    }
}
```

এখানে "name" বাইরে থেকে ব্যবহার করা যাবে। "salary" শুধু Employee ক্লাসের ভেতরে পাওয়া যাবে। "department" চাইল্ড ক্লাস Manager ব্যবহার করতে পারবে। আর "employeeId" একবার constructor-এ সেট হবার পর আবার চেঞ্জ করা যাবেনা।

## উপসংহার

Access Modifiers ব্যবহার করলে ক্লাসের Data কন্ট্রোল করা সহজ। কোন Data বাইরে থেকে Access করা যাবে আর কোন Data হাইড থাকবে, তা ঠিক করে কোডকে আরো ক্লিন রাখা যায়।