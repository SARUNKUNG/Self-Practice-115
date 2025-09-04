// Q1. Basic try...catch
// เขียนโค้ดที่ทำการ parse JSON ผิดพลาด และจัดการ error ด้วย try...catch
try {
    let data = JSON.parse("This is not JSON"); 
    console.log(data);
} catch (err) {
    console.log("Q1: Error caught ->", err.message);
}


// Q2. Custom Error with throw
// เขียนฟังก์ชัน divide ที่ throw error ถ้าหารด้วยศูนย์
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log("Q2:", divide(10, 2)); // 5
    console.log("Q2:", divide(10, 0)); // Error
} catch (err) {
    console.log("Q2: Error caught ->", err.message);
}


// Q3. finally block
// เขียนโค้ดที่เปิดไฟล์สมมติ แล้วใช้ finally เพื่อแสดงข้อความ "Closing file..."
try {
    console.log("Q3: Opening file...");
    throw new Error("File corrupted!");
} catch (err) {
    console.log("Q3: Error caught ->", err.message);
} finally {
    console.log("Q3: Closing file..."); 
}


// Q4. Validate Input
// เขียนฟังก์ชัน checkAge ที่ throw error ถ้าอายุน้อยกว่า 18
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }
    return "Access granted!";
}

try {
    console.log("Q4:", checkAge(20)); // OK
    console.log("Q4:", checkAge(15)); // Error
} catch (err) {
    console.log("Q4: Error caught ->", err.message);
}


// Q5. Nested try...catch
// เขียนโค้ดที่ใช้ try...catch ซ้อนกัน
try {
    try {
        let arr = null;
        console.log(arr.length); // Error
    } catch (innerErr) {
        console.log("Q5: Inner error caught ->", innerErr.message);
        throw new Error("Something went wrong in inner block!");
    }
} catch (outerErr) {
    console.log("Q5: Outer error caught ->", outerErr.message);
}


// Q6. TypeError Example
// เขียนฟังก์ชันที่เรียก method บน undefined เพื่อให้เกิด TypeError
try {
    let name;
    name.toUpperCase(); // Error
} catch (err) {
    console.log("Q6: Error type ->", err.name);
    console.log("Q6: Error message ->", err.message);
}


// Q7. Custom Error Class
// สร้าง class MyCustomError ที่ extends Error
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

try {
    throw new MyCustomError("This is a custom error!");
} catch (err) {
    console.log("Q7:", err.name, "-", err.message);
}


