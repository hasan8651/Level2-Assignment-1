# Type Narrowing in TypeScript

## ভূমিকা

TypeScript-এ Type Narrowing বলতে কোন ভেরিয়েবলের অনেক টাইপ থেকে ভেঙে ভেঙে নির্দিষ্ট টাইপটিতে পৌছানো বুঝায়। অর্থাৎ, একটি ভেরিয়েবলে কী Type-এর মান আছে, তা যাচাই করে সেই অনুযায়ী কাজ করাই Type Narrowing। এতে ভুল কম হয় এবং কোড বুঝতেও সুবিধা হয়।

## বিস্তারিত

মনে করি, একটি ফাংশনে "string" অথবা "number" দুই ধরনের মান আসতে পারে। "typeof" ব্যবহার করে আমরা বুঝতে পারি কোন ধরনের মান আছে।

``` typescript
function showValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}
```

এখানে "typeof" চেক করার পর TypeScript বুঝতে পারে, প্রথম অংশে value হলো string এবং অন্য অংশে number।

"instanceof" দিয়ে কোন অবজেক্ট নির্দিষ্ট class-এর তৈরি কি না, তা যাচাই করা যায়। যেমন:

``` typescript
function showError(error: unknown): void {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
```

এখানে "Error" হলে তার "message" ব্যবহার করা উচিত।

আর "in" operator দিয়ে কোনো অবজেক্টে নির্দিষ্ট property আছে কি না দেখা যায়।

``` typescript
function showPerson(person: { name: string } | { age: number }): void {
    if ("name" in person) {
        console.log(person.name);
    } else {
        console.log(person.age);
    }
}
```

এভাবে TypeScript বুঝতে পারে অবজেক্টে কোন property আছে।

## উপসংহার

Type Narrowing আমাদের কোডকে আরও নিরাপদ ও নির্ভরযোগ্য করে। "typeof",
"instanceof" এবং "in" এই ৩টি পদ্ধতিতে আমরা বিভিন্ন ধরনের Data সহজে যাচাই করতে পারি।