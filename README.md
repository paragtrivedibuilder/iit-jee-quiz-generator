# IIT JEE Question Generator

A comprehensive random question generator for 11th grade students preparing for IIT JEE. This web application provides practice questions across Physics, Chemistry, and Mathematics with varying difficulty levels and question types.

## 🎯 Features

### 📚 Comprehensive Question Database
- **Physics**: Mechanics, kinematics, forces, energy, and more
- **Chemistry**: Atomic structure, bonding, stoichiometry, periodic properties  
- **Mathematics**: Calculus, trigonometry, algebra, coordinate geometry

### 🎮 Question Types
- **Multiple Choice Questions (MCQ)**: Traditional 4-option questions
- **Numerical Questions**: Students enter numerical answers with tolerance checking
- **Assertion-Reason Questions**: IIT JEE style A-R questions with 4 options

### 📊 Difficulty Levels
- **Easy**: Basic concepts and fundamental questions
- **Medium**: Intermediate level problems
- **Hard**: Advanced IIT JEE level questions

### 🎛️ Smart Filtering
- Filter by subject (Physics, Chemistry, Mathematics, or All)
- Filter by difficulty level
- Filter by question type
- Random question generation from filtered pool

### 📈 Progress Tracking
- Questions attempted counter
- Correct answers tracking
- Accuracy percentage calculation
- Persistent stats using localStorage
- Reset statistics option

## 🚀 How to Use

1. **Open `index.html`** in your web browser
2. **Select your preferences:**
   - Choose subject (All, Physics, Chemistry, Mathematics)
   - Select difficulty (All, Easy, Medium, Hard)
   - Pick question type (All, MCQ, Numerical, Assertion-Reason)
3. **Click "Generate Question"** to get a random question
4. **Answer the question** and click "Submit Answer"
5. **View explanation** and your progress stats
6. **Click "Next Question"** to continue practicing

## 🎨 Modern UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Beautiful Gradient Background**: Modern visual appeal
- **Interactive Elements**: Hover effects and smooth transitions
- **Color-coded Difficulty**: Easy (green), Medium (yellow), Hard (red)
- **Real-time Feedback**: Immediate correct/incorrect indication
- **Progress Visualization**: Clear stats display

## 📝 Sample Questions Included

### Physics
- Force and motion problems
- Projectile motion calculations
- Energy and work concepts
- Vector quantities

### Chemistry
- Atomic structure and periodic table
- Chemical bonding types
- Stoichiometry calculations
- Molarity and concentration

### Mathematics
- Calculus derivatives and integrals
- Trigonometric functions
- Coordinate geometry
- Limits and continuity

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: Runs entirely in the browser
- **Local Storage**: Progress tracking persists between sessions
- **Responsive**: Mobile-first design approach

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎓 Target Audience

- 11th grade students preparing for IIT JEE
- Students looking for random practice questions
- Teachers seeking question banks for practice sessions
- Anyone interested in JEE-level Physics, Chemistry, and Mathematics

## 🔧 Customization

The question database is easily expandable. To add more questions:

1. Open `script.js`
2. Navigate to the `questionDatabase` object
3. Add new questions following the existing format:

```javascript
{
    id: unique_id,
    type: 'mcq' | 'numerical' | 'assertion',
    difficulty: 'easy' | 'medium' | 'hard',
    question: 'Your question here',
    options: ['Option A', 'Option B', 'Option C', 'Option D'], // for MCQ
    correctAnswer: 0, // index for MCQ, answer for numerical
    explanation: 'Detailed explanation here'
}
```

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to contribute by:
- Adding more questions to the database
- Improving the UI/UX
- Adding new features
- Reporting bugs

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Learning! 🎓✨**

*Good luck with your IIT JEE preparation!*
