// Dictionary with 150 category-specific words (partially shown for brevity)
const dictionary = {
    apple: { definition: 'A round fruit with red, green, or yellow skin, often eaten raw or cooked.', category: 'Fruit' },
    banana: { definition: 'A long, curved fruit with yellow skin, soft and sweet inside.', category: 'Fruit' },
    orange: { definition: 'A citrus fruit with bright orange skin, juicy and tangy.', category: 'Fruit' },
    // ... (Add remaining fruits, vegetables, animals, birds, flowers, colors, devices, hardware, software as per your structure)
};

// AI Concepts
const aiConcepts = {
    'what is machine learning?': {
        definition: 'Machine Learning is a subset of AI that enables systems to learn from data and improve without explicit programming.',
        explanation: 'It uses algorithms to identify patterns in data and make predictions or decisions.',
        example: `from sklearn.linear_model import LinearRegression\nX = [[1], [2], [3]]\ny = [2, 4, 6]\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[4]])) # Outputs: [8]`
    },
    'what is neural network?': {
        definition: 'A Neural Network is a model inspired by the human brain, used for complex pattern recognition in AI.',
        explanation: 'It consists of layers of nodes (neurons) that process input data through weighted connections.',
        example: `import tensorflow as tf\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(10, activation='relu', input_shape=(1,)),\n    tf.keras.layers.Dense(1)\n])\nmodel.compile(optimizer='adam', loss='mse')`
    },
    'what is nlp?': {
        definition: 'Natural Language Processing (NLP) is a field of AI focused on understanding and generating human language.',
        explanation: 'It involves tasks like sentiment analysis, text generation, and translation.',
        example: `from nltk.tokenize import word_tokenize\nimport nltk\nnltk.download('punkt')\ntext = "Hello, world!"\nprint(word_tokenize(text)) # Outputs: ['Hello', ',', 'world', '!']`
    }
};

// Interview Questions (Merged with subtopic-based structure and steps)
const interviewQuestions = {
    python: {
        'list comprehension': [
            {
                level: 'beginner',
                question: 'What is a list comprehension in Python?',
                answer: 'A list comprehension is a concise way to create lists using a single line of code.',
                steps: [
                    'Define the output expression (e.g., x**2 for squares).',
                    'Specify the input iterable (e.g., range(5)).',
                    'Combine in syntax: [expression for item in iterable].',
                    'Optionally add conditions (e.g., if x % 2 == 0).'
                ],
                example: `squares = [x**2 for x in range(5)]\nprint(squares) # Outputs: [0, 1, 4, 9, 16]`
            },
            {
                level: 'intermediate',
                question: 'How do list comprehensions improve code efficiency?',
                answer: 'List comprehensions are faster than loops for creating lists and support filtering and nested structures.',
                steps: [
                    'Replace a for loop with a list comprehension for speed.',
                    'Use conditional logic (e.g., if) to filter items.',
                    'Handle nested loops for complex data (e.g., matrix flattening).',
                    'Test performance with timeit for comparison.'
                ],
                example: `# Filtering even numbers\nnumbers = [1, 2, 3, 4, 5]\nevens = [x for x in numbers if x % 2 == 0]\nprint(evens) # Outputs: [2, 4]\n# Nested comprehension\nmatrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]\nprint(flat) # Outputs: [1, 2, 3, 4]`
            },
            {
                level: 'advanced',
                question: 'How can list comprehensions handle complex transformations?',
                answer: 'List comprehensions can manage advanced transformations like dictionary creation, set operations, or conditional logic chains.',
                steps: [
                    'Use dict comprehensions for key-value pairs.',
                    'Apply set comprehensions for unique values.',
                    'Chain multiple conditions for precise filtering.',
                    'Optimize memory with generator expressions for large datasets.'
                ],
                example: `# Dictionary comprehension\nsquares_dict = {x: x**2 for x in range(5)}\nprint(squares_dict) # Outputs: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n# Set comprehension\nunique = {x % 3 for x in [1, 2, 3, 4, 5, 6]}\nprint(unique) # Outputs: {0, 1, 2}\n# Generator expression\nlarge = sum(x for x in range(1000000) if x % 2 == 0)`
            }
        ],
        'tuple vs list': [
            {
                level: 'beginner',
                question: 'Explain the difference between a list and a tuple.',
                answer: 'A list is mutable (can be changed), while a tuple is immutable (cannot be changed).',
                steps: [
                    'Create a list with square brackets: [1, 2, 3].',
                    'Create a tuple with parentheses: (1, 2, 3).',
                    'Modify list elements with indexing (e.g., lst[0] = 4).',
                    'Attempting to modify a tuple raises an error.'
                ],
                example: `lst = [1, 2, 3]\nlst[0] = 4\nprint(lst) # Outputs: [4, 2, 3]\ntup = (1, 2, 3)\n# tup[0] = 4 # This would raise an error`
            }
        ],
        'decorator': [
            {
                level: 'intermediate',
                question: 'What are decorators in Python?',
                answer: 'Decorators are functions that modify the behavior of another function or method.',
                steps: [
                    'Define a decorator function that takes a function as input.',
                    'Create a wrapper function inside it to add behavior.',
                    'Return the wrapper function.',
                    'Apply with @decorator_name above the target function.'
                ],
                example: `def my_decorator(func):\n    def wrapper():\n        print("Before")\n        func()\n        print("After")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello")\nsay_hello() # Outputs: Before\n# Hello\n# After`
            }
        ],
        'generator': [
            {
                level: 'advanced',
                question: 'How do generators work in Python?',
                answer: 'Generators are iterators that yield values one at a time, saving memory.',
                steps: [
                    'Define a function with yield instead of return.',
                    'Call the function to get a generator object.',
                    'Iterate over the generator using next() or a loop.',
                    'Use for memory-efficient processing of large datasets.'
                ],
                example: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\nprint(list(fibonacci(5))) # Outputs: [0, 1, 1, 2, 3]`
            }
        ]
    },
    java: {
        'jdk vs jre vs jvm': [
            {
                level: 'beginner',
                question: 'What is the difference between JDK, JRE, and JVM?',
                answer: 'JDK is the development kit, JRE is the runtime environment, and JVM is the virtual machine that runs Java code.',
                steps: [
                    'Use JDK for compiling and running Java code (includes javac).',
                    'Use JRE to run Java applications (includes JVM).',
                    'JVM executes bytecode, managing memory and platform independence.',
                    'Install JDK for development, JRE for running apps.'
                ],
                example: `// JDK includes tools like javac\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello"); // Runs in JVM via JRE\n    }\n}`
            }
        ],
        'multithreading': [
            {
                level: 'intermediate',
                question: 'Explain multithreading in Java.',
                answer: 'Multithreading allows concurrent execution of multiple threads in a single process.',
                steps: [
                    'Create a thread by extending Thread or implementing Runnable.',
                    'Override the run() method with thread logic.',
                    'Start the thread using start().',
                    'Test thread execution with simple output.'
                ],
                example: `class MyThread extends Thread {\n    public void run() {\n        System.out.println("Thread running");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n} # Outputs: Thread running`
            }
        ],
        'memory model': [
            {
                level: 'advanced',
                question: 'What is the Java Memory Model?',
                answer: 'The Java Memory Model defines how threads interact with memory, ensuring visibility and ordering of operations.',
                steps: [
                    'Understand thread-local and shared memory.',
                    'Use volatile to ensure variable visibility across threads.',
                    'Apply synchronized blocks for atomic operations.',
                    'Test with concurrent threads to verify behavior.'
                ],
                example: `public class VolatileExample {\n    private volatile boolean flag = false;\n    public void writer() {\n        flag = true;\n    }\n    public void reader() {\n        if (flag) System.out.println("Flag is true");\n    }\n}`
            }
        ]
    },
    dbms: {
        'normalization': [
            {
                level: 'beginner',
                question: 'What is normalization in DBMS?',
                answer: 'Normalization organizes data to eliminate redundancy and ensure data integrity.',
                steps: [
                    'Understand anomalies (insertion, deletion, update).',
                    'Apply 1NF: Ensure atomic values and unique rows.',
                    'Test with a simple table structure.',
                    'Verify no repeating groups.'
                ],
                example: `-- First Normal Form (1NF)\nCREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Courses VARCHAR(100) -- Needs normalization\n);`
            }
        ],
        'joins': [
            {
                level: 'intermediate',
                question: 'Explain the difference between INNER JOIN and LEFT JOIN.',
                answer: 'INNER JOIN returns only matching rows, while LEFT JOIN returns all rows from the left table and matching rows from the right.',
                steps: [
                    'Identify tables to join (e.g., Students, Courses).',
                    'Use INNER JOIN for matching records only.',
                    'Use LEFT JOIN to include all left table records.',
                    'Test with sample data to verify results.'
                ],
                example: `SELECT s.Name, c.CourseName\nFROM Students s\nINNER JOIN Courses c ON s.StudentID = c.StudentID;\n-- vs\nSELECT s.Name, c.CourseName\nFROM Students s\nLEFT JOIN Courses c ON s.StudentID = c.StudentID;`
            }
        ],
        'transaction': [
            {
                level: 'advanced',
                question: 'What is a transaction in DBMS?',
                answer: 'A transaction is a sequence of operations that satisfies ACID properties (Atomicity, Consistency, Isolation, Durability).',
                steps: [
                    'Begin a transaction with BEGIN TRANSACTION.',
                    'Execute operations (e.g., INSERT, UPDATE).',
                    'Commit changes with COMMIT or rollback with ROLLBACK.',
                    'Test with multiple operations to ensure ACID compliance.'
                ],
                example: `BEGIN TRANSACTION;\nINSERT INTO Accounts (AccountID, Balance) VALUES (1, 1000);\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\nCOMMIT;`
            }
        ]
    },
    cpp: {
        'pointer': [
            {
                level: 'beginner',
                question: 'What is a pointer in C++?',
                answer: 'A pointer is a variable that stores the memory address of another variable.',
                steps: [
                    'Declare a pointer with type* (e.g., int*).',
                    'Assign the address of a variable using &.',
                    'Access the value using * (dereference).',
                    'Test with simple variables to verify addresses.'
                ],
                example: `#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    cout << *ptr << endl; // Outputs: 10\n    return 0;\n}`
            }
        ],
        'stl': [
            {
                level: 'intermediate',
                question: 'Explain the Standard Template Library (STL) in C++.',
                answer: 'STL provides containers, algorithms, and iterators for efficient data handling.',
                steps: [
                    'Use containers like vector for dynamic arrays.',
                    'Apply algorithms like sort or find.',
                    'Iterate with iterators or range-based for loops.',
                    'Test with sample data for efficiency.'
                ],
                example: `#include <vector>\n#include <iostream>\nusing namespace std;\nint main() {\n    vector<int> v = {1, 2, 3};\n    for (int x : v) cout << x << " ";\n    // Outputs: 1 2 3\n    return 0;\n}`
            }
        ],
        'template': [
            {
                level: 'advanced',
                question: 'What are templates in C++?',
                answer: 'Templates allow generic programming by defining functions or classes with placeholder types.',
                steps: [
                    'Define a template with template<typename T>.',
                    'Create a generic function or class.',
                    'Instantiate with specific types (e.g., int, double).',
                    'Test with different types to verify flexibility.'
                ],
                example: `#include <iostream>\nusing namespace std;\ntemplate <typename T>\nT add(T a, T b) {\n    return a + b;\n}\nint main() {\n    cout << add(5, 3) << endl; // Outputs: 8\n    return 0;\n}`
            }
        ]
    },
    javascript: {
        'closure': [
            {
                level: 'beginner',
                question: 'What is a closure in JavaScript?',
                answer: 'A closure is a function that retains access to its lexical scope even when executed outside that scope.',
                steps: [
                    'Define an outer function with a variable.',
                    'Return an inner function accessing that variable.',
                    'Call the inner function later to access the variable.',
                    'Test with console.log to verify scope retention.'
                ],
                example: `function outer() {\n    let x = 10;\n    return function inner() {\n        console.log(x);\n    };\n}\nconst fn = outer();\nfn(); // Outputs: 10`
            }
        ],
        'async await': [
            {
                level: 'intermediate',
                question: 'Explain async/await in JavaScript.',
                answer: 'Async/await simplifies asynchronous code using promises, making it look synchronous.',
                steps: [
                    'Mark a function as async to return a promise.',
                    'Use await to pause execution until a promise resolves.',
                    'Handle errors with try/catch.',
                    'Test with a sample API call.'
                ],
                example: `async function fetchData() {\n    let response = await fetch('https://api.example.com');\n    let data = await response.json();\n    console.log(data);\n}\nfetchData();`
            }
        ],
        'event loop': [
            {
                level: 'advanced',
                question: 'What is the event loop in JavaScript?',
                answer: 'The event loop manages asynchronous operations by processing tasks in the callback queue when the call stack is empty.',
                steps: [
                    'Understand the call stack and callback queue.',
                    'Use setTimeout or promises to queue tasks.',
                    'Observe execution order (sync, microtasks, macrotasks).',
                    'Test with console.log to verify timing.'
                ],
                example: `console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');\n// Outputs: Start, End, Promise, Timeout`
            }
        ]
    },
    css: {
        'box model': [
            {
                level: 'beginner',
                question: 'What is the box model in CSS?',
                answer: 'The box model defines the structure of an element, including content, padding, border, and margin.',
                steps: [
                    'Set content size with width/height.',
                    'Add padding for inner spacing.',
                    'Apply border for outline.',
                    'Use margin for outer spacing.'
                ],
                example: `div {\n    width: 100px;\n    padding: 10px;\n    border: 5px solid black;\n    margin: 15px;\n    /* Total width: 100 + 10*2 + 5*2 + 15*2 = 160px */\n}`
            }
        ],
        'flexbox': [
            {
                level: 'intermediate',
                question: 'Explain CSS Flexbox.',
                answer: 'Flexbox is a layout model for arranging items in a container, either in a row or column, with flexible sizing.',
                steps: [
                    'Set display: flex on the container.',
                    'Use justify-content to align items horizontally.',
                    'Use align-items to align items vertically.',
                    'Test with different screen sizes.'
                ],
                example: `.container {\n    display: flex;\n    justify-content: space-between;\n}\n.item {\n    flex: 1;\n}`
            }
        ],
        'specificity': [
            {
                level: 'advanced',
                question: 'What is CSS specificity?',
                answer: 'Specificity determines which CSS rule is applied based on selector priority (ID > Class > Element).',
                steps: [
                    'Calculate specificity: ID (100), Class (10), Element (1).',
                    'Compare selectors to determine precedence.',
                    'Use !important to override (sparingly).',
                    'Test with conflicting styles.'
                ],
                example: `#id {\n    color: red; /* Highest specificity */\n}\n.class {\n    color: blue;\n}\ndiv {\n    color: green; /* Lowest specificity */\n}`
            }
        ]
    },
    html: {
        'semantic tags': [
            {
                level: 'beginner',
                question: 'What are semantic HTML tags?',
                answer: 'Semantic tags describe their meaning, improving accessibility and SEO (e.g., <header>, <article>).',
                steps: [
                    'Use <header> for introductory content.',
                    'Use <main> for primary content.',
                    'Use <article> for self-contained content.',
                    'Validate with accessibility tools.'
                ],
                example: `<header>\n    <h1>Welcome</h1>\n</header>\n<main>\n    <article>Content here</article>\n</main>`
            }
        ],
        'alt attribute': [
            {
                level: 'intermediate',
                question: 'What is the purpose of the alt attribute in images?',
                answer: 'The alt attribute provides text descriptions for images, aiding accessibility and SEO.',
                steps: [
                    'Add alt attribute to every <img> tag.',
                    'Describe the image’s content or purpose.',
                    'Keep descriptions concise yet informative.',
                    'Test with screen readers.'
                ],
                example: `<img src="cat.jpg" alt="A cute cat sitting on a mat">`
            }
        ],
        'accessible form': [
            {
                level: 'advanced',
                question: 'How do you make a form accessible in HTML?',
                answer: 'Use labels, ARIA attributes, and proper input types to ensure forms are usable by screen readers.',
                steps: [
                    'Link inputs with <label> using for attribute.',
                    'Add aria-required for mandatory fields.',
                    'Use semantic input types (e.g., type="email").',
                    'Test with accessibility auditors.'
                ],
                example: `<form>\n    <label for="name">Name:</label>\n    <input id="name" type="text" aria-required="true">\n</form>`
            }
        ]
    }
};

// Programming Languages
const programmingLanguages = {
    'what is python?': {
        definition: 'Python is a simple, easy-to-read language used for websites, data science, and automation.',
        features: 'Simple code, lots of libraries, works on all computers, supports different coding styles.',
        advantages: 'Easy to learn, used for many things, big community, fast to build with.',
        disadvantages: 'Slower to run, not great for mobile apps, uses more memory.',
        oop: 'Supports object-oriented programming with classes, objects, and more.',
        variableTypes: [
            { type: 'Integer', explanation: 'A whole number like 5 or -10.', example: `x = 5\nprint(x) # Outputs: 5` },
            { type: 'Float', explanation: 'A number with decimals, like 3.14.', example: `y = 3.14\nprint(y) # Outputs: 3.14` },
            { type: 'String', explanation: 'Text, like "Hello", enclosed in quotes.', example: `name = "Amit"\nprint(name) # Outputs: Amit` },
            { type: 'List', explanation: 'A collection of items, changeable, like [1, 2, 3].', example: `numbers = [1, 2, 3]\nprint(numbers) # Outputs: [1, 2, 3]` },
            { type: 'Dictionary', explanation: 'Pairs of keys and values, like {"name": "Amit"}.', example: `person = {"name": "Amit"}\nprint(person["name"]) # Outputs: Amit` }
        ]
    },
    'what is javascript?': {
        definition: 'JavaScript makes websites interactive and runs in browsers or on servers.',
        features: 'Handles events, works async, changes web pages, works everywhere.',
        advantages: 'Runs in browsers, great for real-time apps, huge tools, fast for web.',
        disadvantages: 'Browser issues, loose typing, some security risks.',
        oop: 'Supports object-oriented programming with prototypes and classes.',
        variableTypes: [
            { type: 'Number', explanation: 'Any number, like 5 or 3.14.', example: `let x = 5;\nconsole.log(x); // Outputs: 5` },
            { type: 'String', explanation: 'Text, like "Hello", in quotes.', example: `let name = "Amit";\nconsole.log(name); // Outputs: Amit` },
            { type: 'Boolean', explanation: 'True or false values.', example: `let isTrue = true;\nconsole.log(isTrue); // Outputs: true` },
            { type: 'Array', explanation: 'A list of items, like [1, 2, 3].', example: `let numbers = [1, 2, 3];\nconsole.log(numbers); // Outputs: [1, 2, 3]` },
            { type: 'Object', explanation: 'Key-value pairs, like {name: "Amit"}.', example: `let person = {name: "Amit"};\nconsole.log(person.name); // Outputs: Amit` }
        ]
    },
    // ... (Add java, php, cpp as per your structure)
};

// SQL Types
const sqlTypes = {
    'what is ddl?': {
        definition: 'Data Definition Language: Commands to define or modify database structure.',
        commands: ['CREATE', 'ALTER', 'DROP', 'TRUNCATE'],
        syntax: {
            'CREATE': `CREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(50)\n); -- Creates a table`,
            'ALTER': `ALTER TABLE users ADD email VARCHAR(100); -- Adds a column`,
            'DROP': `DROP TABLE users; -- Deletes a table`,
            'TRUNCATE': `TRUNCATE TABLE users; -- Removes all data, keeps structure`
        }
    },
    // ... (Add dml, dcl, tcl as per your structure)
};

// Coding Concepts
const codingConcepts = {
    'what is server?': {
        definition: 'A server is a computer or software providing services to clients over a network.',
        steps: [
            { level: 'Basic', explanation: 'A server listens for client requests (e.g., HTTP GET).', example: `const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, {'Content-Type': 'text/plain'});\n    res.end('Hello, World!');\n});\nserver.listen(3000);` }
        ]
    },
    // ... (Add database, loop as per your structure)
};

// Fuzzy Search Utility
const fuzzySearch = (query, items) => {
    const levenshteinDistance = (a, b) => {
        const matrix = Array(b.length + 1).fill().map(() => Array(a.length + 1).fill(0));
        for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1,
                    matrix[j - 1][i - 1] + indicator
                );
            }
        }
        return matrix[b.length][a.length];
    };

    return items.map(item => {
        const score = item.subtopics.reduce((min, subtopic) => {
            const dist = levenshteinDistance(query.toLowerCase(), subtopic.toLowerCase());
            return Math.min(min, dist);
        }, Infinity);
        return { item, score };
    }).sort((a, b) => a.score - b.score)[0];
};

// Utility Functions
const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
};

const getElement = (id) => document.getElementById(id);

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

const playSound = (type) => {
    if (localStorage.getItem('soundEnabled') !== 'false') {
        const sound = new Audio(`https://cdn.pixabay.com/audio/2022/03/10/audio_${type === 'click' ? 'd6c4e1b7e7' : 'f7b7e1c9e2'}.mp3`);
        sound.play().catch(err => console.error('Sound error:', err));
    }
};

const shareMessage = (message) => {
    const cleanMessage = message.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (navigator.share) {
        navigator.share({
            title: 'NoteBot Response',
            text: cleanMessage,
        }).catch(err => {
            showFeedback('Failed to share message.');
            console.error('Share error:', err);
        });
    } else {
        navigator.clipboard.writeText(cleanMessage).then(() => {
            showFeedback('Message copied to clipboard!');
        }).catch(err => {
            showFeedback('Failed to copy message.');
            console.error('Clipboard error:', err);
        });
    }
};

const shareSession = () => {
    const sessionId = localStorage.getItem('sessionId');
    const url = `${window.location.origin}?session=${sessionId}`;
    navigator.clipboard.writeText(url).then(() => {
        showFeedback('Session URL copied! Share it to collaborate.');
    }).catch(err => {
        showFeedback('Failed to copy session URL.');
        console.error('Clipboard error:', err);
    });
};

const formatCode = (code, language) => {
    if (language === 'python') {
        return code.split('\n').map(line => line.trim() ? '    ' + line.trim() : line).join('\n');
    } else if (language === 'java' || language === 'cpp') {
        let indent = 0;
        return code.split('\n').map(line => {
            line = line.trim();
            if (!line) return line;
            if (line.endsWith('}')) indent--;
            const formatted = '    '.repeat(indent) + line;
            if (line.endsWith('{')) indent++;
            return formatted;
        }).join('\n');
    }
    return code;
};

// Theme Management
const initializeTheme = () => {
    const themeSelector = getElement('themeSelector');
    if (!themeSelector) return;

    const applyTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeSelector.value = theme;
        document.body.style.transition = 'background 0.5s ease';
    };

    themeSelector.addEventListener('change', () => {
        playSound('click');
        applyTheme(themeSelector.value);
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
};

// Sound Toggle
const initializeSound = () => {
    const soundToggle = getElement('soundToggle');
    if (!soundToggle) return;

    const applySound = (enabled) => {
        localStorage.setItem('soundEnabled', enabled);
        const volumeUp = soundToggle.querySelector('.fa-volume-up');
        const volumeMute = soundToggle.querySelector('.fa-volume-mute');
        if (volumeUp && volumeMute) {
            volumeUp.classList.toggle('d-none', !enabled);
            volumeMute.classList.toggle('d-none', enabled);
        }
    };

    soundToggle.addEventListener('click', () => {
        const current = localStorage.getItem('soundEnabled') !== 'false';
        applySound(!current);
    });

    const savedSound = localStorage.getItem('soundEnabled') !== 'false';
    applySound(savedSound);
};

// Chat Functionality
const initializeChat = () => {
    const chatInput = getElement('chatInput');
    const chatOutput = getElement('chatOutput');
    const chatVoice = getElement('chatVoice');
    const sendMessage = getElement('sendMessage');
    const clearChat = getElement('clearChat');
    const exportChat = getElement('exportChat');
    const leaderboardBtn = getElement('leaderboard');
    const chatFeedback = getElement('chatFeedback');
    const aiSuggestions = getElement('aiSuggestions');
    const suggestionButtons = document.querySelectorAll('.suggestion-btn');

    if (!chatInput || !chatOutput || !sendMessage) {
        console.error('Chat elements missing');
        return;
    }

    let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    let userName = localStorage.getItem('userName') || prompt('Enter your name for the leaderboard:', 'User') || 'User';
    localStorage.setItem('userName', userName);
    let sessionId = localStorage.getItem('sessionId') || Math.random().toString(36).substring(2, 10);
    localStorage.setItem('sessionId', sessionId);
    let quizMode = null;
    let quizQuestions = [];
    let quizIndex = 0;
    let quizScore = 0;

    const analytics = JSON.parse(localStorage.getItem('analytics')) || {
        questionsAsked: 0,
        favoriteTopics: {},
        sessions: 1
    };

    const appendChatMessage = (sender, message, reactions = [], isPinned = false) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${sender === 'NoteBot' ? 'bot-message' : 'user-message'}${isPinned ? ' pinned-message' : ''}`;
        messageDiv.setAttribute('role', 'listitem');
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sentiment = message.includes('error') || message.includes('failed') ? 'negative' : 'positive';
        const suggestedReactions = sentiment === 'positive' ? ['👍', '😊'] : ['😕', '❓'];
        const content = sender === 'NoteBot'
            ? `<div class="avatar"><img src="notbot.png" alt="NoteBot Avatar" aria-hidden="true"></div>
               <div class="message-content">
                   <p><strong>NoteBot:</strong> ${message}</p>
                   <span class="timestamp">${timestamp}</span>
                   <div class="reactions" role="group" aria-label="Message reactions">${reactions.map(r => `<span class="reaction" role="button" tabindex="0">${r}</span>`).join('')} ${suggestedReactions.map(r => `<span class="reaction suggested" role="button" tabindex="0">${r}</span>`).join('')}</div>
               </div>`
            : `<div class="message-content">
                   <p><strong>${sanitizeInput(userName)}:</strong> ${sanitizeInput(message)}</p>
                   <span class="timestamp">${timestamp}</span>
                   <div class="reactions" role="group" aria-label="Message reactions">${reactions.map(r => `<span class="reaction" role="button" tabindex="0">${r}</span>`).join('')}</div>
               </div>
               <div class="avatar"><img src="user.png" alt="User Avatar" aria-hidden="true"></div>`;
        messageDiv.innerHTML = content;

        if (sender === 'NoteBot') {
            const shareBtn = document.createElement('button');
            shareBtn.innerHTML = '<i class="fas fa-share"></i>';
            shareBtn.className = 'share-btn btn btn-sm btn-outline-light';
            shareBtn.title = 'Share Response';
            shareBtn.setAttribute('aria-label', 'Share response');
            shareBtn.onclick = () => {
                playSound('click');
                shareMessage(message);
            };
            const pinBtn = document.createElement('button');
            pinBtn.innerHTML = '<i class="fas fa-thumbtack"></i>';
            pinBtn.className = 'pin-btn btn btn-sm btn-outline-warning';
            pinBtn.title = isPinned ? 'Unpin Message' : 'Pin Message';
            pinBtn.setAttribute('aria-label', isPinned ? 'Unpin message' : 'Pin message');
            pinBtn.onclick = () => {
                playSound('click');
                togglePinMessage(messageDiv, message, sender, reactions);
            };
            messageDiv.querySelector('.message-content').appendChild(pinBtn);
            messageDiv.querySelector('.message-content').appendChild(shareBtn);
        }

        const reactionsDiv = messageDiv.querySelector('.reactions');
        const addReaction = (emoji) => {
            reactions.push(emoji);
            reactionsDiv.innerHTML = reactions.map(r => `<span class="reaction" role="button" tabindex="0">${r}</span>`).join('');
            saveChatMessage(sender, message, reactions, isPinned);
        };

        reactionsDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('reaction')) {
                const emoji = e.target.textContent;
                if (e.target.classList.contains('suggested')) {
                    addReaction(emoji);
                    e.target.classList.remove('suggested');
                }
            } else {
                const emoji = prompt('Enter an emoji to react (e.g., 👍, ❤️):');
                if (emoji) addReaction(emoji);
            }
        });

        reactionsDiv.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('reaction')) {
                const emoji = e.target.textContent;
                if (e.target.classList.contains('suggested')) {
                    addReaction(emoji);
                    e.target.classList.remove('suggested');
                }
            }
        });

        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
        if (!isPinned) messageDiv.focus();
    };

    const showTypingIndicator = () => {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        typingDiv.setAttribute('aria-live', 'off');
        chatOutput.appendChild(typingDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
        typingDiv.style.display = 'flex';
        return typingDiv;
    };

    const hideTypingIndicator = (typingDiv) => {
        if (typingDiv) typingDiv.remove();
    };

    const saveChatMessage = (sender, message, reactions = [], isPinned = false) => {
        try {
            const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
            history.push({ sender, message, reactions, timestamp: new Date().toLocaleString(), isPinned });
            if (history.length > 50) history.shift();
            localStorage.setItem('chatHistory', JSON.stringify(history));
        } catch (err) {
            console.error('localStorage error:', err);
        }
    };

    const loadChatHistory = () => {
        try {
            const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
            if (history.length === 0) {
                appendChatMessage('NoteBot', `Welcome to NoteBot, ${userName}! Ask about AI, coding, interview questions (e.g., "python list comprehension interview question"), or try "run python print('Hello')" in the code playground! Share session ID: <strong>${sessionId}</strong>`, [], false);
            } else {
                history.forEach(item => appendChatMessage(item.sender, item.message, item.reactions || [], item.isPinned || false));
            }
        } catch (err) {
            console.error('History load error:', err);
        }
    };

    const showFeedback = (message) => {
        if (chatFeedback) {
            chatFeedback.textContent = message;
            chatFeedback.classList.remove('d-none');
            chatFeedback.focus();
            setTimeout(() => {
                chatFeedback.classList.add('d-none');
                chatInput.focus();
            }, 3000);
        }
    };

    const exportChatHistory = () => {
        try {
            const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
            const text = history.map(item => `[${item.timestamp}] ${item.sender}: ${item.message.replace(/<[^>]+>/g, '')}${item.reactions?.length ? ' [Reactions: ' + item.reactions.join(', ') + ']' : ''}${item.isPinned ? ' [Pinned]' : ''}`).join('\n');
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `NoteBot_Chat_${new Date().toISOString().split('T')[0]}.txt`;
            a.click();
            URL.revokeObjectURL(url);
            showFeedback('Chat history exported!');
        } catch (err) {
            showFeedback('Failed to export chat.');
            console.error('Export error:', err);
        }
    };

    const togglePinMessage = (messageDiv, message, sender, reactions) => {
        const pinnedCount = Array.from(chatOutput.children).filter(div => div.classList.contains('pinned-message')).length;
        const isPinned = messageDiv.classList.contains('pinned-message');
        if (!isPinned && pinnedCount >= 3) {
            showFeedback('Maximum 3 pinned messages allowed.');
            return;
        }
        messageDiv.classList.toggle('pinned-message');
        const newPinnedState = messageDiv.classList.contains('pinned-message');
        saveChatMessage(sender, message, reactions, newPinnedState);
        if (newPinnedState) {
            chatOutput.prepend(messageDiv);
        } else {
            chatOutput.appendChild(messageDiv);
        }
        chatOutput.scrollTop = chatOutput.scrollHeight;
    };

    const runCode = (code, language) => {
        try {
            if (language === 'python') {
                if (code.includes('print(')) {
                    const match = code.match(/print\(["'](.*?)["']\)/);
                    const output = match ? match[1] : 'No output';
                    return `<span class="highlight-item">Output:</span> ${sanitizeInput(output)}`;
                }
                return `<span class="highlight-error">Error: Only simple print statements supported.</span>`;
            } else if (language === 'javascript') {
                const consoleLog = [];
                const originalConsoleLog = console.log;
                console.log = (msg) => consoleLog.push(msg);
                const output = eval(code); // Caution: Use safely
                console.log = originalConsoleLog;
                return `<span class="highlight-item">Output:</span> ${sanitizeInput(consoleLog.join('\n') || output || 'No output')}`;
            } else if (language === 'sql') {
                return `<span class="highlight-item">Output:</span> Query executed successfully (mock).`;
            } else if (language === 'cpp') {
                if (code.includes('cout')) {
                    const match = code.match(/cout\s*<<\s*["'](.*?)["']/);
                    const output = match ? match[1] : 'No output';
                    return `<span class="highlight-item">Output:</span> ${sanitizeInput(output)}`;
                }
                return `<span class="highlight-error">Error: Only simple cout statements supported.</span>`;
            } else if (language === 'java') {
                if (code.includes('System.out.println')) {
                    const match = code.match(/System\.out\.println\(["'](.*?)["']\)/);
                    const output = match ? match[1] : 'No output';
                    return `<span class="highlight-item">Output:</span> ${sanitizeInput(output)}`;
                }
                return `<span class="highlight-error">Error: Only simple println statements supported.</span>`;
            }
            return `<span class="highlight-error">Error: Unsupported language.</span>`;
        } catch (err) {
            return `<span class="highlight-error">Error: ${sanitizeInput(err.message)}</span>`;
        }
    };

    const updateLeaderboard = () => {
        const leaderboardList = getElement('leaderboardList');
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [{ name: userName, points: userPoints }];
        leaderboardList.innerHTML = leaderboard
            .sort((a, b) => b.points - a.points)
            .slice(0, 5)
            .map((entry, i) => `<li class="list-group-item" role="listitem">${i + 1}. ${sanitizeInput(entry.name)}: ${entry.points} points</li>`)
            .join('');
    };

    const showAnalytics = () => {
        const topics = Object.entries(analytics.favoriteTopics)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([topic, count]) => `<li>${topic}: ${count} queries</li>`)
            .join('');
        const response = `<span class="highlight-title">Session Analytics:</span><br>` +
                        `<span class="highlight-property">Questions Asked:</span> ${analytics.questionsAsked}<br>` +
                        `<span class="highlight-property">Points Earned:</span> ${userPoints}<br>` +
                        `<span class="highlight-property">Sessions:</span> ${analytics.sessions}<br>` +
                        `<span class="highlight-property">Favorite Topics:</span><ul>${topics || '<li>None</li>'}</ul>`;
        appendChatMessage('NoteBot', response);
    };

    const startQuiz = (topic, difficulty) => {
        quizMode = { topic, difficulty };
        quizQuestions = Object.values(interviewQuestions[topic]).flat().filter(q => q.level === difficulty).slice(0, 3);
        quizIndex = 0;
        quizScore = 0;
        askQuizQuestion();
    };

    const askQuizQuestion = () => {
        if (quizIndex >= quizQuestions.length) {
            const response = `<span class="highlight-title">Quiz Complete!</span><br>` +
                            `<span class="highlight-property">Score:</span> ${quizScore}/${quizQuestions.length}<br>` +
                            `<span class="highlight-item">Well done, ${userName}!</span>`;
            appendChatMessage('NoteBot', response);
            quizMode = null;
            userPoints += quizScore * 10;
            localStorage.setItem('userPoints', userPoints);
            updateLeaderboard();
            return;
        }
        const q = quizQuestions[quizIndex];
        const response = `<span class="highlight-title">Quiz Question ${quizIndex + 1} (${quizMode.topic} - ${quizMode.difficulty}):</span><br>` +
                         `<span class="highlight-property">Question:</span> ${q.question}<br>` +
                         `Type your answer or say "show answer" to reveal it.`;
        appendChatMessage('NoteBot', response);
    };

    const updateAISuggestions = debounce((message) => {
        if (!message) {
            aiSuggestions.innerHTML = '';
            return;
        }
        const input = message.toLowerCase().trim();
        const validTopics = ['python', 'java', 'dbms', 'cpp', 'javascript', 'css', 'html'];
        const subtopics = validTopics.reduce((acc, topic) => {
            return acc.concat(Object.keys(interviewQuestions[topic]).flatMap(sub => interviewQuestions[topic][sub].flatMap(q => q.subtopics || [sub])));
        }, []).filter((v, i, a) => a.indexOf(v) === i);
        const suggestions = [
            ...Object.keys(dictionary).filter(word => word.startsWith(input)),
            ...Object.keys(programmingLanguages).filter(lang => lang.startsWith(input)),
            ...Object.keys(sqlTypes).filter(sql => sql.startsWith(input)),
            ...Object.keys(codingConcepts).filter(concept => concept.startsWith(input)),
            ...Object.keys(aiConcepts).filter(ai => ai.startsWith(input)),
            ...['Fruit', 'Vegetable', 'Animal', 'Bird', 'Flower', 'Color', 'Output Device', 'Input Device', 'Hardware', 'Software'].filter(cat => cat.toLowerCase().startsWith(input)),
            ...validTopics.filter(t => t.startsWith(input)).map(t => `${t} interview question`),
            ...subtopics.filter(s => s.startsWith(input)).map(s => {
                const topic = validTopics.find(t => Object.keys(interviewQuestions[t]).includes(s));
                return `${topic} ${s} interview question`;
            }),
            ...(JSON.parse(localStorage.getItem('recentQueries')) || []).filter(q => q.startsWith(input))
        ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);
        aiSuggestions.innerHTML = suggestions.map(s => 
            `<button class="btn btn-sm ai-suggestion" data-query="${s}" role="button" aria-label="Suggest ${s}">${sanitizeInput(s.charAt(0).toUpperCase() + s.slice(1))}</button>`
        ).join('');
        aiSuggestions.querySelectorAll('.ai-suggestion').forEach(btn => {
            btn.addEventListener('click', () => {
                playSound('click');
                chatInput.value = btn.getAttribute('data-query');
                handleSendMessage();
            });
        });
    }, 100); // 100ms for instant suggestions

    const respondToChat = (message) => {
        const typingDiv = showTypingIndicator();
        analytics.questionsAsked++;
        const topic = message.toLowerCase().includes('python') ? 'Python' :
                     message.toLowerCase().includes('java') ? 'Java' :
                     message.toLowerCase().includes('dbms') ? 'DBMS' :
                     message.toLowerCase().includes('cpp') ? 'C++' :
                     message.toLowerCase().includes('javascript') ? 'JavaScript' :
                     message.toLowerCase().includes('css') ? 'CSS' :
                     message.toLowerCase().includes('html') ? 'HTML' :
                     message.toLowerCase().includes('ai') ? 'AI' : 'General';
        analytics.favoriteTopics[topic] = (analytics.favoriteTopics[topic] || 0) + 1;
        localStorage.setItem('analytics', JSON.stringify(analytics));
        userPoints += 10;
        localStorage.setItem('userPoints', userPoints);
        localStorage.setItem('leaderboard', JSON.stringify([{ name: userName, points: userPoints }]));
        updateLeaderboard();

        const recentQueries = JSON.parse(localStorage.getItem('recentQueries')) || [];
        recentQueries.push(message.toLowerCase().trim());
        if (recentQueries.length > 10) recentQueries.shift();
        localStorage.setItem('recentQueries', JSON.stringify(recentQueries));

        setTimeout(() => {
            hideTypingIndicator(typingDiv);
            const normalizedMessage = message
                .toLowerCase()
                .replace(/\s+/g, ' ')
                .trim()
                .replace(/\?$/, '');
            const lowerMessage = normalizedMessage + '?';
            console.log('Processed input:', lowerMessage);

            let response = '<span class="highlight-error">Sorry, I didn\'t understand. Try asking about AI, coding, interview questions (e.g., "python list comprehension interview question"), a word meaning (e.g., "What is apple?"), or run code with "run python print(\'Hello\')".</span>';

            if (quizMode) {
                if (normalizedMessage === 'show answer') {
                    const q = quizQuestions[quizIndex];
                    response = `<span class="highlight-title">Answer:</span><br>` +
                              `<span class="highlight-property">Question:</span> ${q.question}<br>` +
                              `<span class="highlight-property">Answer:</span> ${q.answer}<br>` +
                              `<span class="highlight-property">Steps:</span><ol>${q.steps.map(s => `<li>${s}</li>`).join('')}</ol><br>` +
                              `<span class="highlight-example">Example:</span><pre class="highlight-code language-${quizMode.topic.toLowerCase()}">${q.example}</pre>`;
                    quizIndex++;
                    setTimeout(askQuizQuestion, 1000);
                } else {
                    response = `<span class="highlight-title">Quiz Response:</span><br>` +
                              `Please answer the current question or say "show answer".`;
                }
            } else if (normalizedMessage === 'share session') {
                response = `<span class="highlight-title">Session Sharing:</span><br>Your session ID is <strong>${sessionId}</strong>. Share this URL: <a href="${window.location.origin}?session=${sessionId}" target="_blank">Join Session</a>`;
            } else if (normalizedMessage === 'show analytics') {
                showAnalytics();
                return;
            } else if (normalizedMessage.startsWith('start quiz')) {
                const [, , topic, difficulty] = normalizedMessage.split(' ');
                const validTopics = ['python', 'java', 'dbms', 'cpp', 'javascript', 'css', 'html'];
                const validDifficulties = ['beginner', 'intermediate', 'advanced'];
                if (validTopics.includes(topic) && validDifficulties.includes(difficulty)) {
                    startQuiz(topic, difficulty);
                    return;
                } else {
                    response = `<span class="highlight-error">Invalid quiz command. Use: start quiz [python|java|dbms|cpp|javascript|css|html] [beginner|intermediate|advanced]</span>`;
                }
            } else if (normalizedMessage.includes('interview question')) {
                const validTopics = ['python', 'java', 'dbms', 'cpp', 'javascript', 'css', 'html'];
                const topicMatch = validTopics.find(t => normalizedMessage.includes(t));
                if (topicMatch) {
                    const subtopic = normalizedMessage.replace(`${topicMatch} interview question`, '').replace(topicMatch, '').trim();
                    let questions;
                    if (subtopic) {
                        const allQuestions = Object.keys(interviewQuestions[topicMatch]).map(sub => ({
                            subtopic: sub,
                            questions: interviewQuestions[topicMatch][sub]
                        }));
                        const result = fuzzySearch(subtopic, allQuestions.map(q => ({ subtopics: [q.subtopic], questions: q.questions })));
                        if (result.score <= 5) {
                            questions = result.item.questions;
                        } else {
                            response = `<span class="highlight-error">No exact match for "${subtopic}". Try a related topic or use "${topicMatch} interview question" for a random question.</span>`;
                            appendChatMessage('NoteBot', response);
                            return;
                        }
                    } else {
                        const randomSubtopic = Object.keys(interviewQuestions[topicMatch])[Math.floor(Math.random() * Object.keys(interviewQuestions[topicMatch]).length)];
                        questions = interviewQuestions[topicMatch][randomSubtopic];
                    }
                    response = `<span class="highlight-title">${topicMatch.charAt(0).toUpperCase() + topicMatch.slice(1)} Interview Question (${subtopic || 'Random'}):</span><br>` +
                              questions.map(q => 
                                  `<span class="highlight-title">${q.level.charAt(0).toUpperCase() + q.level.slice(1)} Level:</span><br>` +
                                  `<span class="highlight-property">Question:</span> ${q.question}<br>` +
                                  `<span class="highlight-property">Answer:</span> ${q.answer}<br>` +
                                  `<span class="highlight-property">Steps:</span><ol>${q.steps.map(s => `<li>${s}</li>`).join('')}</ol><br>` +
                                  `<span class="highlight-example">Example:</span><pre class="highlight-code language-${topicMatch}">${q.example}</pre>`
                              ).join('<br>');
                } else {
                    response = `<span class="highlight-error">Invalid topic. Try: python, java, dbms, cpp, javascript, css, html</span>`;
                }
            } else if (message.startsWith('run ')) {
                const [_, lang, ...codeParts] = message.split(' ');
                const code = codeParts.join(' ');
                const formattedCode = formatCode(code, lang.toLowerCase());
                const output = runCode(code, lang.toLowerCase());
                response = `<span class="highlight-title">Code Playground:</span><br>` +
                           `<pre class="highlight-code language-${lang.toLowerCase()}">${sanitizeInput(formattedCode)}</pre>` +
                           `<div class="code-output active">${output}</div>`;
            } else if (aiConcepts[lowerMessage]) {
                const aiData = aiConcepts[lowerMessage];
                const aiTopic = normalizedMessage.replace('what is ', '');
                response = `<span class="highlight-title">Details about <span class="highlight-code-name">${aiTopic.charAt(0).toUpperCase() + aiTopic.slice(1)}</span>:</span><br>` +
                           `<span class="highlight-definition">Definition:</span> ${aiData.definition}<br>` +
                           `<span class="highlight-property">Explanation:</span> ${aiData.explanation}<br>` +
                           `<span class="highlight-example">Example:</span><pre class="highlight-code language-python">${aiData.example}</pre>`;
            } else if (programmingLanguages[lowerMessage]) {
                const langData = programmingLanguages[lowerMessage];
                const langName = normalizedMessage.replace('what is ', '');
                response = `<span class="highlight-title">Details about <span class="highlight-code-name">${langName.charAt(0).toUpperCase() + langName.slice(1)}</span>:</span><br>` +
                           `<span class="highlight-definition">Definition:</span> ${langData.definition}<br>` +
                           `<span class="highlight-property">Features:</span> ${langData.features}<br>` +
                           `<span class="highlight-property">Advantages:</span> ${langData.advantages}<br>` +
                           `<span class="highlight-property">Disadvantages:</span> ${langData.disadvantages}<br>` +
                           `<span class="highlight-property">OOP Support:</span> ${langData.oop}<br>` +
                           `<span class="highlight-property">Variable Types:</span><br>` +
                           langData.variableTypes.map(vt => 
                               `<span class="highlight-item">- ${vt.type}:</span> ${vt.explanation}<br>` +
                               `<span class="highlight-example">Example:</span><pre class="highlight-code language-${langName}">${vt.example}</pre>`
                           ).join('<br>');
            } else if (sqlTypes[lowerMessage]) {
                const sqlData = sqlTypes[lowerMessage];
                const sqlType = normalizedMessage.replace('what is ', '').toUpperCase();
                response = `<span class="highlight-title">Details about <span class="highlight-code-name">${sqlType}</span>:</span><br>` +
                           `<span class="highlight-definition">Definition:</span> ${sqlData.definition}<br>` +
                           `<span class="highlight-property">Commands:</span> ${sqlData.commands.join(', ')}<br>` +
                           `<span class="highlight-property">Syntax:</span><br>` +
                           Object.entries(sqlData.syntax).map(([cmd, example]) => 
                               `<span class="highlight-item">- ${cmd}:</span><br>` +
                               `<span class="highlight-example">Example:</span><pre class="highlight-code language-sql">${example}</pre>`
                           ).join('<br>');
            } else if (codingConcepts[lowerMessage]) {
                const conceptData = codingConcepts[lowerMessage];
                const conceptName = normalizedMessage.replace('what is ', '');
                response = `<span class="highlight-title">Details about <span class="highlight-code-name">${conceptName.charAt(0).toUpperCase() + conceptName.slice(1)}</span>:</span><br>` +
                           `<span class="highlight-definition">Definition:</span> ${conceptData.definition}<br>` +
                           `<span class="highlight-property">Steps:</span><br>` +
                           conceptData.steps.map(step => 
                               `<span class="highlight-item">- ${step.level}:</span> ${step.explanation}<br>` +
                               `<span class="highlight-example">Example:</span><pre class="highlight-code language-${conceptName === 'server' ? 'javascript' : conceptName === 'database' ? 'sql' : 'python'}">${step.example}</pre>`
                           ).join('<br>');
            } else {
                const categories = ['Fruit', 'Vegetable', 'Animal', 'Bird', 'Flower', 'Color', 'Output Device', 'Input Device', 'Hardware', 'Software'];
                const categoryInput = normalizedMessage.replace('what is ', '');
                const cleanCategory = categories.find(cat => cat.toLowerCase() === categoryInput || cat.toLowerCase() + 's' === categoryInput);
                if (cleanCategory) {
                    const items = Object.entries(dictionary)
                        .filter(([_, data]) => data.category === cleanCategory)
                        .map(([word, data]) => `<span class="highlight-item">- <span class="highlight-code-name">${word.charAt(0).toUpperCase() + word.slice(1)}</span>:</span> ${data.definition}`)
                        .join('<br>');
                    response = `<span class="highlight-title">Items in <span class="highlight-code-name">${cleanCategory}</span> category:</span><br>${items || '<span class="highlight-error">No items found.</span>'}`;
                } else if (dictionary[normalizedMessage.replace('what is ', '')]) {
                    const wordData = dictionary[normalizedMessage.replace('what is ', '')];
                    const word = normalizedMessage.replace('what is ', '');
                    response = `<span class="highlight-title">Details about <span class="highlight-code-name">${word.charAt(0).toUpperCase() + word.slice(1)}</span>:</span><br>` +
                               `<span class="highlight-definition">Definition:</span> ${wordData.definition}<br>` +
                               `<span class="highlight-property">Category:</span> ${wordData.category}` +
                               (wordData.deviceType ? `<br><span class="highlight-property">Device Type:</span> ${wordData.deviceType}` : '') +
                               (wordData.working ? `<br><span class="highlight-property">Working:</span> ${wordData.working}` : '');
                }
            }

            appendChatMessage('NoteBot', response);
            saveChatMessage('NoteBot', response);
            Prism.highlightAll();
            updateAISuggestions(message);
        }, 1500);
    };

    const handleSendMessage = () => {
        const message = chatInput.value.trim();
        if (message) {
            playSound('click');
            appendChatMessage('User', message);
            saveChatMessage('User', message);
            respondToChat(message);
            chatInput.value = '';
            chatInput.focus();
        } else {
            showFeedback('Please enter a message.');
        }
    };

    sendMessage.addEventListener('click', handleSendMessage);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.ctrlKey) {
            e.preventDefault();
            handleSendMessage();
        } else if (e.key === 'Enter' && e.ctrlKey) {
            chatInput.value += '\n';
        }
    });

    chatInput.addEventListener('input', () => updateAISuggestions(chatInput.value));

    if (chatVoice) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            chatVoice.addEventListener('click', () => {
                playSound('click');
                recognition.start();
                chatVoice.classList.add('recording');
                showFeedback('Listening...');
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase().trim();
                chatVoice.classList.remove('recording');
                if (transcript === 'clear chat') {
                    clearChat.click();
                } else if (transcript === 'export chat') {
                    exportChat.click();
                } else if (transcript === 'show leaderboard') {
                    leaderboardBtn.click();
                } else if (transcript === 'show analytics') {
                    showAnalytics();
                } else {
                    chatInput.value = transcript;
                    handleSendMessage();
                }
            };

            recognition.onerror = (event) => {
                chatVoice.classList.remove('recording');
                showFeedback('Voice recognition failed: ' + event.error);
                console.error('Speech recognition error:', event.error);
            };

            recognition.onend = () => {
                chatVoice.classList.remove('recording');
            };
        } else {
            chatVoice.style.display = 'none';
            showFeedback('Voice recognition not supported in this browser.');
        }
    }

    if (clearChat) {
        clearChat.addEventListener('click', () => {
            playSound('click');
            localStorage.removeItem('chatHistory');
            quizMode = null;
            chatOutput.innerHTML = '';
            appendChatMessage('NoteBot', `Chat cleared, ${userName}! Ask me anything or share session ID: <strong>${sessionId}</strong>`, [], false);
        });
    }

    if (exportChat) {
        exportChat.addEventListener('click', () => {
            playSound('click');
            exportChatHistory();
        });
    }

    if (leaderboardBtn) {
        leaderboardBtn.addEventListener('click', () => {
            playSound('click');
            updateLeaderboard();
            const modal = new bootstrap.Modal(getElement('leaderboardModal'));
            modal.show();
        });
    }

    suggestionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click');
            const query = btn.getAttribute('data-query');
            chatInput.value = query;
            handleSendMessage();
        });
    });

    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 12 + 6}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        document.querySelector('.background-particles').appendChild(particle);
        setTimeout(() => particle.remove(), 10000);
    };

    setInterval(createParticle, 300);

    loadChatHistory();
    analytics.sessions++;
    localStorage.setItem('analytics', JSON.stringify(analytics));

    // PWA Installation Prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const installBtn = document.createElement('button');
        installBtn.className = 'btn btn-primary';
        installBtn.textContent = 'Install NoteBot';
        installBtn.onclick = () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
                installBtn.remove();
            });
        };
        document.body.appendChild(installBtn);
    });
};

window.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeSound();
    initializeChat();

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.error('Service Worker registration failed', err));
    }
});